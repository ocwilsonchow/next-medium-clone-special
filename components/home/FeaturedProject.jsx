import {
  Box,
  Button,
  Flex,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import ecom from "../../images/react_ecom.png";
import anothergram from "../../images/anothergram.png";

const FeaturedProject = () => {
  return (
    <Flex w="full" my={20}>
      <Flex flexDir="column"  w='full'>
        <Text fontWeight="bold" fontSize="3xl" mb={4}>
          Featured
        </Text>
        <Flex columnGap={4} rowGap={4} flexWrap='wrap' >
          <Flex flexDir='column'
            p={4}
            borderWidth="1px"
            maxW="300px"
            borderRadius="xl"
            _hover={{ color: "cyan.500" }}
            justifyContent='space-between'
          >
            <Text p={1} fontWeight="bold" fontSize="xl" mb={2}>
              React E-Commerce 🛒
            </Text>
            <Box>
              <Text p={1} mb={2}>
              Built with React, Firestore, Firebase Authentication, Algolia,
              Stripe Checkout, PayPal and Chakra UI.
            </Text>
            <LinkOverlay
              href="https://react-ecommerce-app-tan.vercel.app/"
              isExternal
            >
              <Image src={ecom} width={300} height={200} objectFit="contain" />
            </LinkOverlay>
            </Box>
          </Flex>

          <Flex flexDir='column'
            p={4}
            borderWidth="1px"
            w='300px'
            borderRadius="xl"
            _hover={{ color: "cyan.500" }}
          >
            <Text p={1} fontWeight="bold" fontSize="xl" mb={2}>
              Full Stack Social Media App 💬
            </Text>
            <Box>
              <Text p={1} mb={2}>
              Built with React, Firestore, Firebase Authentication, Algolia,
              Stripe Checkout, PayPal and Chakra UI.
            </Text>
            <LinkOverlay
              href="https://serene-garden-37851.herokuapp.com/"
              isExternal
            >
              <Image
                src={anothergram}
                width={300}
                height={200}
                objectFit="contain"
              />
            </LinkOverlay>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FeaturedProject;
