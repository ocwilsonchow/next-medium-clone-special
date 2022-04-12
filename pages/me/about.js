import { Text, Flex, Center } from "@chakra-ui/react";
import Biography from "../../components/about/Biography";
import dynamic from "next/dynamic";
import Slider from "../../components/home/Slider"

const TerminalCode = dynamic(() => import("../../components/home/ReactCode"), {
  ssr: false,
});


const PageAbout = () => {
  return (
    <Flex flexDir="column" py={6} maxW="800px" >
      <Text fontWeight="bold" fontSize="4xl">
        Wilson's Story
      </Text>
      <Biography />
      <TerminalCode/>
    </Flex>
  );
};

export default PageAbout;
