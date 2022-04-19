import {
  Text,
  VStack,
  IconButton,
  Avatar,
  Button,
  Tooltip,
} from "@chakra-ui/react";
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
  AiTwotoneMail,
  AiOutlineMail,
  AiOutlineTrophy,
  AiOutlineSetting,
  AiFillSetting,
} from "react-icons/ai";
import { BsChatDots, BsChatDotsFill } from "react-icons/bs";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useSession } from "next-auth/react";

const Leftbar = () => {
  const { data: session, status } = useSession();
  const menuItems = [
    {
      name: "Home",
      fillIcon: <AiFillHome />,
      outlineIcon: <AiOutlineHome />,
      link: "/",
    },
    {
      name: "About",
      fillIcon: <AiOutlineTrophy />,
      outlineIcon: <AiOutlineTrophy />,
      link: "/me/about",
    },
    {
      name: "Blog",
      fillIcon: <AiFillFileText />,
      outlineIcon: <AiOutlineFileText />,
      link: "/me/blog",
    },
    {
      name: "Chat",
      fillIcon: <BsChatDotsFill />,
      outlineIcon: <BsChatDots />,
      link: "/me/chat",
    },
    {
      name: "Favorites",
      fillIcon: <AiTwotoneMail />,
      outlineIcon: <AiOutlineMail />,
      link: "/me/contactWilson",
    },
    {
      name: "Settings",
      fillIcon: <AiFillSetting />,
      outlineIcon: <AiOutlineSetting />,
      link: "/settings",
    },
  ];

  return (
    <VStack
      borderRightWidth="0.5px"
      p={2}
      h="100vh"
      justifyContent="space-evenly"
      spacing={6}
      w="80px"
    >
      <VStack spacing={6}>
        {session && <Avatar src={session?.user.image} size="sm" />}
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
