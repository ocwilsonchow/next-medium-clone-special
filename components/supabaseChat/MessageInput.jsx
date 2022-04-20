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
import { useSession} from "next-auth/react";
import { AiOutlineSend } from "react-icons/ai";
import useSWR, { mutate } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());


const MessageInput = () => {
  const { data: session } = useSession();
  const [messageInput, setMessageInput] = useState("");

  const handleSubmit = () => {



  }


  return (
    <FormControl mt={4}>
      <InputGroup>
        <InputRightElement>
          <IconButton variant="ghost" icon={<AiOutlineSend />} />
        </InputRightElement>
        <Input
          boxShadow="base"
          placeholder="Message"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onClick={()=> handleSubmit()}
        />
      </InputGroup>
    </FormControl>
  );
};

export default MessageInput;
