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
  AiFillFileText,
  AiOutlineFileText,
  AiTwotoneMail,
  AiOutlineMail,
  AiOutlineTrophy,
  AiFillTrophy,
  AiOutlineSetting,
  AiFillSetting,
  AiFillCamera,
  AiOutlineCamera,
} from "react-icons/ai";
import { BsChatDots, BsChatDotsFill } from "react-icons/bs";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Leftbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const q = router.pathname;
  const menuItems = [
    {
      name: "home",
      fillIcon: <AiFillHome />,
      outlineIcon: <AiOutlineHome />,
      link: "/",
    },
    {
      name: "about",
      fillIcon: <AiFillTrophy />,
      outlineIcon: <AiOutlineTrophy />,
      link: "/me/about",
    },
    {
      name: "blog",
      fillIcon: <AiFillFileText />,
      outlineIcon: <AiOutlineFileText />,
      link: "/me/blog",
    },
    {
      name: "album",
      fillIcon: <AiFillCamera />,
      outlineIcon: <AiOutlineCamera />,
      link: "/me/album",
    },
    {
      name: "chat",
      fillIcon: <BsChatDotsFill />,
      outlineIcon: <BsChatDots />,
      link: "/chat/public",
    },
    {
      name: "favorites",
      fillIcon: <AiTwotoneMail />,
      outlineIcon: <AiOutlineMail />,
      link: "/me/contactWilson",
    },
    {
      name: "settings",
      fillIcon: <AiFillSetting />,
      outlineIcon: <AiOutlineSetting />,
      link: "/settings",
    },
  ];

  return (
    <VStack
      borderRightWidth="0.5px"
      p={2}
      h="full"
      justifyContent="space-evenly"
      spacing={6}
      w="150px"
    >
      <VStack spacing={6}>
        {session && <Avatar src={session?.user.image} size="sm" />}
        {menuItems.map((item, i) => (
          <Link href={item.link} key={i}>
            <IconButton
              icon={(q === item.link && item.fillIcon) || item.outlineIcon}
              variant="ghost"
              fontSize="20px"
              _focus={{ outline: 0 }}
              color={q === item.link && "blue.400"}
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
