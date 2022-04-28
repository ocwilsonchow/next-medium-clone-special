import {
  Box,
  Button,
  Center,
  Code,
  Collapse,
  Fade,
  Flex,
  HStack,
  IconButton,
  SlideFade,
  Tag,
  Text,
} from "@chakra-ui/react"
import {
  AiOutlineGithub,
  AiFillFacebook,
  AiFillYoutube,
  AiTwotoneMail,
  AiFillInstagram,
} from "react-icons/ai";

const SocialLinks = () => {
  return (
    <HStack  spacing={3}>
      <a
        href="https://github.com/ocwilsonchow/next-medium-clone-special"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton
          icon={<AiOutlineGithub />}
          fontSize="lg"
          variant="outline"
          borderRadius="full"

        />
      </a>
      <a
        href="https://www.facebook.com/ocwilsonchow/"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton
          fontSize="lg"
          variant="outline"
          rounded="full"
          icon={<AiFillFacebook />}
        />
      </a>

      <a
        href="https://www.instagram.com/ocwilsonchow/"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton
          fontSize="lg"
          variant="outline"
          rounded="full"
          icon={<AiFillInstagram />}
        />
      </a>
      <a
        href="https://www.youtube.com/c/SLCHOW/featured"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton
          fontSize="lg"
          variant="outline"
          rounded="full"
          icon={<AiFillYoutube />}
        />
      </a>

      <IconButton
        fontSize="lg"
        variant="outline"
        rounded="full"
        icon={<AiTwotoneMail />}
      />
    </HStack>
  );
};

export default SocialLinks;
