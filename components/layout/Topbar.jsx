import {
  Alert,
  Code,
  HStack,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  useDisclosure,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import React, { useRef } from "react";

const Topbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex
      borderBottomWidth="0.5px"
      w="full"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Code bg="none" fontWeight="black" fontSize="xl">
        wilson_dev
      </Code>
      <>
        <IconButton ref={btnRef} icon={<HamburgerIcon />} variant="ghost" fontSize="lg" onClick={onOpen} display={{base: 'block', md: 'none'}}  />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent backdropFilter="blur(10px)">
            <DrawerCloseButton />
            <DrawerBody></DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </Flex>
  );
};

export default Topbar;
