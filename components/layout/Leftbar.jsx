import { Text, VStack, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {
  AiFillHome,
  AiOutlineHome,
  AiOutlineNotification,
  AiFillNotification,
  AiFillFileText,
  AiOutlineFileText,
  AiOutlineForm,
  AiFillEdit,
  AiOutlineHeart,
} from "react-icons/ai";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const Leftbar = () => {
  const menuItems = [
    {
      name: "Home",
      fillIcon: <AiFillHome />,
      outlineIcon: <AiOutlineHome />,
      link: "/",
    },
    {
      name: "Notifications",
      fillIcon: <AiFillNotification />,
      outlineIcon: <AiOutlineNotification />,
      link: "/me/notifications",
    },
    {
      name: "Saved",
      fillIcon: <AiOutlineHeart />,
      outlineIcon: <AiOutlineHeart />,
      link: "/me/saved",
    },
    {
      name: "Notes",
      fillIcon: <AiFillFileText />,
      outlineIcon: <AiOutlineFileText />,
      link: "/me/notes",
    },
    {
      name: "Create",
      fillIcon: <AiFillEdit />,
      outlineIcon: <AiOutlineForm />,
      link: "/new-note",
    },
  ];

  return (
    <VStack
      borderRightWidth="1px"
      p={4}
      h="100vh"
      justifyContent="center"
      spacing={6}
      w="100px"
    >
      {menuItems.map((item, i) => (
        <Link  key={i} href={item.link}>
          <IconButton
            icon={item.outlineIcon}
            variant="ghost"
            fontSize="20px"
          />
        </Link>
      ))}
      <ColorModeSwitcher />
    </VStack>
  );
};

export default Leftbar;
