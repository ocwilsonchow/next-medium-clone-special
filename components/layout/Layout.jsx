import { Box, Flex, Grid, GridItem, HStack, VStack } from "@chakra-ui/react";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <Flex justifyContent="center">
      <Flex maxW="1600px" justifyContent="space-between" w="full">
        <Box display={{base: "none", md: "flex"}}>
          <Leftbar />
        </Box>
        <Flex flexDir="column" w="full" alignItems="center"  px="4">
          <Topbar />
          <Flex p={4} w="85%" >{children}</Flex>
        </Flex>
        <Box display={{base: "none", lg: "flex"}} >
          <Rightbar />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
