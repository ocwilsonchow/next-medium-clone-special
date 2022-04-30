import { Box, Center, Flex, useColorModeValue } from "@chakra-ui/react";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  const bgColor = useColorModeValue("white", "#0D1220");

  return (
    <Flex
      justifyContent="center"
      backgroundImage="url('https://firebasestorage.googleapis.com/v0/b/react-ecommerce-app-48eb1.appspot.com/o/752854%20Large.jpeg?alt=media&token=2d22f653-57c2-4b84-921c-a36e1988e243')"
      backgroundPosition="center"
      bgSize="cover"
      backgroundRepeat="no-repeat"
      w="full"
    >
      <Flex w="full" justifyContent="center" backdropFilter="blur(20px)" >
        <Flex maxW="1500px" justifyContent="space-between" w="full">
          <Box display={{ base: "none", md: "flex" }}>
            <Leftbar />
          </Box>
          <Flex
            flexDir="column"
            w="full"
            alignItems="center"
            h="100vh"
            overflow="auto"
            position="relative"
          >
            <Flex w="full" position="sticky" top="0px" zIndex={2}>
              <Topbar />
            </Flex>
            <Flex
              flexDir="column"
              pt={4}
              px={[4, 6, 6, 12]}
              maxW="1000px"
              w="95%"
            >
              {children}
            </Flex>
          </Flex>
          <Box display={{ base: "none", lg: "flex" }}>
            <Rightbar />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;
