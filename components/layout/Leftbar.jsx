import { Text, VStack, IconButton, Avatar, Button } from "@chakra-ui/react";
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
  AiFillGithub,
  AiFillTrophy,
  AiOutlineTrophy,
  AiOutlineFire
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
      name: "Blog",
      fillIcon: <AiFillFileText />,
      outlineIcon: <AiOutlineFileText />,
      link: "/me/blog",
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
    // {
    //   name: "Create",
    //   fillIcon: <AiFillEdit />,
    //   outlineIcon: <AiOutlineForm />,
    //   link: "/me/new-note",
    // },
    {
      name: "About",
      fillIcon: <AiOutlineTrophy />,
      outlineIcon: <AiOutlineTrophy />,
      link: "/me/about",
    },
  ];

  return (
    <VStack
      borderRightWidth="1px"
      p={2}
      h="100vh"
      justifyContent="space-evenly"
      spacing={6}
      w="100px"
    >
      <VStack spacing={6}>
        {menuItems.map((item, i) => (
          <Link key={i} href={item.link}>
            <IconButton
              icon={item.outlineIcon}
              variant="ghost"
              fontSize="20px"
            />
          </Link>
        ))}
      </VStack>
      <VStack>
        <ColorModeSwitcher />
      </VStack>
    </VStack>
  );
};

export default Leftbar;
