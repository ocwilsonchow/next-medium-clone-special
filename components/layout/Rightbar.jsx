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
    <Flex flexDir="column" borderLeftWidth="0.5px" p={2} h="100vh" w="350px">
      <FormControl pt={2} px={2}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input type="tel" placeholder="Search" />
        </InputGroup>
      </FormControl>

      <ChatContainer />
    </Flex>
  );
};

export default Rightbar;
