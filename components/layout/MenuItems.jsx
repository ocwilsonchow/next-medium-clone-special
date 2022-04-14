import {
  Text,
  Button,
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
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";

const MenuComponent = (props) => {
  const { toggleColorMode } = useColorMode();
const text = useColorModeValue('🌙 Dark', '☀️ Light');
  const Mode = useColorModeValue('🌙 Dark Mode', '☀️ Light Mode');

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

        <Box
          display={{ base: "flex", md: "none" }}
          my={1}
          px={5}
          py={2}
          variant="link"
          aria-label={`Switch to ${text} mode`}
          onClick={toggleColorMode}
          {...props}
          transition="all ease 0.2s"
        >
          {Mode}
        </Box>
      </MenuList>
    </Menu>
  );
};

export default MenuComponent;
