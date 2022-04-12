import { Box, Flex, Grid, GridItem, HStack, VStack } from "@chakra-ui/react";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <Flex justifyContent="center">
      <Flex maxW="1600px" justifyContent="space-between" w="full">
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
          <Flex w="full" position="sticky" top="0px" backdropFilter="blur(20px)">
            <Topbar />
          </Flex>
          <Flex p={4} w="85%">
            {children}
          </Flex>
        </Flex>
        <Box display={{ base: "none", lg: "flex" }}>
          <Rightbar />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
