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
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MenuItems from "../layout/MenuItems";
import React, { useRef } from "react";
import Link from "next/link";

const Topbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex
      borderBottomWidth="1px"
      w="full"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Link href="/">
        <Code bg="none" fontWeight="black" fontSize="xl" cursor="pointer" _hover={{color: 'cyan.400'}}>
          wilson_dev
        </Code>
      </Link>
      <Menu>
        <MenuButton as={Button} variant="ghost" rightIcon={<HamburgerIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          <MenuItems />
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Topbar;
