import {
  Text,
  Button,
  Tooltip,
  Flex,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
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
  AiOutlineSetting,
  AiFillSetting,
} from "react-icons/ai";
import { BsChatDots, BsChatDotsFill } from "react-icons/bs";

const MenuComponent = () => {
  const menuItems = [
    {
      name: "🏠 Home",
      fillIcon: <AiFillHome />,
      outlineIcon: <AiOutlineHome />,
      link: "/",
    },
    {
      name: "👋🏻 About",
      fillIcon: <AiOutlineTrophy />,
      outlineIcon: <AiOutlineTrophy />,
      link: "/me/about",
    },
    {
      name: "📖 Blog",
      fillIcon: <AiFillFileText />,
      outlineIcon: <AiOutlineFileText />,
      link: "/me/blog",
    },
    {
      name: "💬 Chat",
      fillIcon: <BsChatDotsFill />,
      outlineIcon: <BsChatDots />,
      link: "/me/chat",
    },
    {
      name: "📩 Contact",
      fillIcon: <AiTwotoneMail />,
      outlineIcon: <AiOutlineMail />,
      link: "/contact-wilson",
    },

    {
      name: "⚙️ Settings",
      fillIcon: <AiFillSetting />,
      outlineIcon: <AiOutlineSetting />,
      link: "/settings",
    },
  ];

  return (
    <Menu>
      <MenuButton as={Button} variant="ghost" rightIcon={<HamburgerIcon />}>
        <Text>Menu</Text>
      </MenuButton>
      <MenuList>
        {menuItems.map((item, i) => (
          <Link key={i} href={item.link}>
            <MenuItem>
              <Box my={1} p={2} variant="link">
                {item.name}
              </Box>
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuComponent;
