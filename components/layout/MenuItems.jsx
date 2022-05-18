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
  AiFillFileText,
  AiOutlineFileText,
  AiTwotoneMail,
  AiOutlineMail,
  AiOutlineTrophy,
  AiOutlineSetting,
  AiFillSetting,
} from "react-icons/ai";
import { BsChatDots, BsChatDotsFill } from "react-icons/bs";

const MenuComponent = (props) => {

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
      name: "📷 Album",
      fillIcon: <AiFillFileText />,
      outlineIcon: <AiOutlineFileText />,
      link: "/me/album",
    },
    {
      name: "💬 Chat",
      fillIcon: <BsChatDotsFill />,
      outlineIcon: <BsChatDots />,
      link: "/chat/public",
    },
    {
      name: "📩 Contact",
      fillIcon: <AiTwotoneMail />,
      outlineIcon: <AiOutlineMail />,
      link: "/me/contactWilson",
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
      <MenuButton as={Button} variant="ghost" _focus={{outline: 0}} rightIcon={<HamburgerIcon /> }>
        <Text>Menu</Text>
      </MenuButton>
      <MenuList bg="gray.300" color="black">
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
