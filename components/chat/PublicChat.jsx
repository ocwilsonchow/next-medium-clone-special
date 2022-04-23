import { useRef, useEffect } from "react";
import {
  Flex,
  FormControl,
  InputGroup,
  InputRightElement,
  IconButton,
  Input,
  Fade,
  Spinner,
  Text,
  Center,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import { useChat } from "../../context/ChatContext";
import Message from "./Message";

const PublicChat = () => {
  const dummyRef = useRef();
  const { publicMessages, createPublicMessage, setMessageInput, messageInput } =
    useChat();

  useEffect(() => {
    dummyRef.current.scrollIntoView({ behavior: "smooth" });
  }, [publicMessages]);

  // TODO add validation

  const handleSubmit = () => {
    createPublicMessage();
  };
  return (
    <Flex flexDir="column">
      <Flex flexDir="column" h="calc(100vh - 203px)" overflow="auto">
        {publicMessages.length === 0 && (
          <Center p={4}>
            <Text>Loading...</Text>
            <Spinner />
          </Center>
        )}
        {publicMessages.length !== 0 &&
          publicMessages?.map((msg, i) => <Message msg={msg} key={msg?._id} />)}
        <Flex pb={2} ref={dummyRef}></Flex>
      </Flex>
      <FormControl pt={4}>
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant="ghost"
              icon={<AiOutlineSend />}
              onClick={(e) => handleSubmit()}
              disabled={messageInput == ""}
            />
          </InputRightElement>
          <Input
            value={messageInput}
            placeholder="Message"
            onChange={(e) => setMessageInput(e.target.value)}
          />
        </InputGroup>
      </FormControl>
    </Flex>
  );
};

export default PublicChat;
