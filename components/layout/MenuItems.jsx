import {
  Text,
  VStack,
  IconButton,
  Avatar,
  Button,
  Tooltip,
  Flex,
  MenuItem,
  Image,
  Icon
} from "@chakra-ui/react";

import Link from "next/link";
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
  AiOutlineFire,
} from "react-icons/ai";
const Menu = () => {
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
      name: "Favorites",
      fillIcon: <AiTwotoneMail />,
      outlineIcon: <AiOutlineMail />,
      link: "/contact-wilson",
    },
    {
      name: "About",
      fillIcon: <AiOutlineTrophy />,
      outlineIcon: <AiOutlineTrophy />,
      link: "/me/about",
    },
  ];

  return (
    <Flex flexDir="column" spacing={6} justifyContent="center">
      {menuItems.map((item, i) => (
        <Link key={i} href={item.link}>
          <MenuItem>
            <Button my={1} p={2} variant="link">
              {item.name}
            </Button>
          </MenuItem>
        </Link>
      ))}
    </Flex>
  );
};

export default Menu;
