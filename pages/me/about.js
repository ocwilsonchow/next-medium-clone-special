import {
  Text,
  Flex,
  Fade,
  Box,
  HStack,
  VStack,
  Avatar,
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
            <Text fontWeight="bold" fontSize={["2xl","2xl","4xl","4xl"]} my={10}>
              About Wilson
            </Text>

            <Text mb={2} fontWeight="bold" fontSize={["sm","md","lg","lg"]}>
              Full Stack Developer
            </Text>
            <Text mb={5} fontSize={["sm","md","lg","lg"]}>sinlongchow@gmail.com</Text>
            <SocialLinks />
          </Box>
          <Box boxSize={{ base: "150px", md: "200px" }} pb={10}>
            <Image src={me} width={250} height={250} objectFit="cover" />
          </Box>
        </Flex>

        <Biography />
      </Fade>
    </Box>
  );
};

export default PageAbout;
