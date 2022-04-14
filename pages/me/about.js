import { Text, Flex, Avatar, Fade } from "@chakra-ui/react";
import Biography from "../../components/about/Biography";
import ReactCode from "../../components/home/ReactCode";

const PageAbout = () => {
  return (
    <Flex flexDir="column" py={6} maxW="800px">
      <Fade in>
        <Text fontWeight="bold" fontSize="4xl">
          Background Story
        </Text>
        <Biography />
      </Fade>
      <ReactCode />
    </Flex>
  );
};

export default PageAbout;
