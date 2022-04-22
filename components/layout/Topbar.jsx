import { Code, HStack, Flex, Box } from "@chakra-ui/react";
import MenuItems from "../layout/MenuItems";
import React, { useRef } from "react";
import Link from "next/link";

const Topbar = () => {
  return (
    <Flex
      borderBottomWidth="0.5px"
      w="full"
      px={6}
      py={4}
      mx={0.5}
      justifyContent="space-between"
      alignItems="center"
      backdropFilter="blur(20px)"

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
      <Flex>
        <MenuItems />
      </Flex>
    </Flex>
  );
};

export default Topbar;
