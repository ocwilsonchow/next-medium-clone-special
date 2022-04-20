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
const MessageInput = () => {
  const { data: session } = useSession();
  const [messageInput, setMessageInput] = useState("");

  console.log(session)
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
        />
      </InputGroup>
    </FormControl>
  );
};

export default MessageInput;
