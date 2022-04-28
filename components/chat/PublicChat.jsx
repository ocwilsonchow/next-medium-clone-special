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
import groq from "groq";
import useSWR from "swr";
import { readClient } from "../../lib/sanity";

const key = groq`*[_type == "chatMessage"]  | order(createdAt asc) {
  createdAt,
  _id,
  message,
  userEmail,
  username,
  userImage
}`;

const PublicChat = () => {
  const dummyRef = useRef();
  const { createPublicMessage, setMessageInput, messageInput } = useChat();
  const fetcher = (query) => readClient.fetch(query);
  const { data: sanityMessages, mutate } = useSWR(key, fetcher);

  useEffect(() => {
    dummyRef.current.scrollIntoView({ behavior: "smooth" });
  }, [sanityMessages]);

  const handleSubmit = async () => {
    await createPublicMessage();
  };

  return (
    <Flex flexDir="column">
      <Flex flexDir="column" h="calc(100vh - 203px)" overflow="auto">
        {sanityMessages?.length === 0 && (
          <Center p={4}>
            <Text>Loading...</Text>
            <Spinner />
          </Center>
        )}
        {sanityMessages?.length !== 0 &&
          sanityMessages?.map((msg) => <Message key={msg._id} msg={msg} />)}
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
