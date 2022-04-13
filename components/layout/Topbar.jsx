import {
  Alert,
  Code,
  HStack,
  Text,
  Flex,
  useDisclosure,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import MenuItems from "../layout/MenuItems";
import React, { useRef } from "react";
import Link from "next/link";

const Topbar = () => {
  return (
    <Flex
      borderBottomWidth="0.5px"
      w="full"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Link href="/">
        <Code
          bg="none"
          fontWeight="black"
          fontSize="xl"
          cursor="pointer"
          _hover={{ color: "cyan.400" }}
        >
          wilson_dev
        </Code>
      </Link>
      <MenuItems />
    </Flex>
  );
};

export default Topbar;
