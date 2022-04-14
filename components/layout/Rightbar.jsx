import { useState, useEffect } from "react";
import {
  Flex,
  Input,
  Text,
  VStack,
  Button,
  InputGroup,
  InputLeftElement,
  FormControl,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ChatContainer from "../chat/ChatContainer";

const Rightbar = () => {
  return (
    <Flex
      flexDir="column"
      borderLeftWidth="0.5px"
      p={2}
      w="350px"
      overflow="auto"
    >
      <ChatContainer />
    </Flex>
  );
};

export default Rightbar;
