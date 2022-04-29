import {
  Text,
  Flex,
  Fade,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import Biography from "../../components/about/Biography";
import SocialLinks from "../../components/about/SocialLinks";
import me from "../../images/meWithBike.JPG";

const PageAbout = () => {
  return (
    <Box py={6} maxW="800px">
      <Fade in>
        <Flex justifyContent="space-between" alignItems="center" flexWrap='wrap' >
          <Box mr={10} pb={10}>
            <Text bg="none" fontWeight="bold" fontSize={["4xl","4xl","5xl","5xl"]} my={5}>
              Wilson Chow
            </Text>

            <Text mb={2} fontWeight="bold" fontSize={["md","lg","xl","2xl"]}>
              Full Stack Developer
            </Text>
            <Text mb={5} fontSize={["sm","md","lg","lg"]}>sinlongchow@gmail.com</Text>
            <SocialLinks />
          </Box>
          <Box boxSize={{ base: "100%", md: "250px" }} pb={10}>
            <Image src={me} width={250} height={250} objectFit="cover" />
          </Box>
        </Flex>

        <Biography />
      </Fade>
    </Box>
  );
};

export default PageAbout;
