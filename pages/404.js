import { Center, Circle, Flex, VStack, Text, Square } from "@chakra-ui/react";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <Center w="full" h="80vh">
      <Text py={20} fontWeight="bold" fontSize="2xl">
        Sorry, this Page Does Not Exist! 🙇🏻
      </Text>
    </Center>
  );
};

export default PageNotFound;
