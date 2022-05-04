import { Box, Center, Flex, useColorModeValue } from "@chakra-ui/react";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  const bgColor = useColorModeValue("white", "#0D1220");

  return (
    <Flex
      justifyContent="center"
      backgroundImage="url('https://firebasestorage.googleapis.com/v0/b/react-ecommerce-app-48eb1.appspot.com/o/752854%20Medium.jpeg?alt=media&token=65f04299-2573-467d-a2ec-0f77f64877ba')"
      backgroundPosition="center"
      bgSize="cover"
      backgroundRepeat="no-repeat"
      w="full"
      transition="all ease 0.2s"

    >
      <Flex w="full" justifyContent="center" backdropFilter="blur(15px)">
        <Flex maxW="1450px" justifyContent="space-between" w="full" >
          <Box display={{ base: "none", md: "flex" }} ml={{lg: 0, xl:20}}>
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
            <Flex w="full"  top="0px" zIndex={2}>
              <Topbar />
            </Flex>
            <Flex
              flexDir="column"
              pt={4}
              px={[4, 6, 6, 12]}

              w="95%"
              zIndex={0}
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
