import { useEffect, useState } from "react";
import {
  Box,
  InputGroup,
  InputRightElement,
  IconButton,
  Flex,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { AiOutlineSend } from "react-icons/ai";
import useSWR, { mutate } from "swr";
import axios from "axios";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MessageInput = ({ roomId }) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const { data: rooms, error, mutate } = useSWR("/api/chat", fetcher);

  const handleCreateMessage = async () => {
    setLoading(true);
    if (messageInput.length === 0 || !session) return;

    await axios({
      method: "POST",
      url: `/api/chat/${roomId}`,
      data: {
        text: messageInput,
        chat: {
          connect: {
            id: roomId,
          },
        },
        sender: {
          connect: {
            id: session.user.id,
          },
        },
      },
    })
      .then((resp) => {
        mutate();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
         setLoading(false);
      });
  };

  return (
    <FormControl mt={4}>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="ghost"
            icon={<AiOutlineSend />}
            onClick={handleCreateMessage}
            disabled={!session || loading}
          />
        </InputRightElement>
        <Input
          boxShadow="base"
          placeholder="Message"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          disabled={!session}
        />
      </InputGroup>
    </FormControl>
  );
};

export default MessageInput;
