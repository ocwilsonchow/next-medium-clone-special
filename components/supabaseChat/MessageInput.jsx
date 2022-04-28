import { useEffect, useState } from "react";
import {
  Box,
  InputGroup,
  InputRightElement,
  IconButton,
  Flex,
  FormControl,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { AiOutlineSend } from "react-icons/ai";
import useSWR, { mutate } from "swr";
import axios from "axios";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MessageInput = ({ roomId}) => {
  const { data: session } = useSession();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const { data: thisRoom, mutate } = useSWR(roomId ? `/api/chat/${roomId}` : null, fetcher);

  // TODO setup error state | setup validation  with react-hook-form
  const handleCreateMessage = async () => {
    setLoading(true);
    if (messageInput.length === 0 || !session) return setLoading(false);
    if (messageInput.length > 50) {
      toast({
        title: "Error",
        description: "Message cannot be more than 50 characters",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

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
        setMessageInput("");
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
          placeholder={(!session && "Sign in first") || "Message"}
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          disabled={!session}
        />
      </InputGroup>
    </FormControl>
  );
};

export default MessageInput;
