import { Avatar, Box, Center, Flex, HStack, Tag, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

import moment from "moment";
import { motion } from "framer-motion";

const Message = ({ msg }) => {
  const { data: session } = useSession();

  if (!msg) return <Text p={4}>Loading</Text>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      <Box py={2}>
        <Flex w="full" alignItems="center" justifyContent="space-between">
          <HStack>
            <Avatar src={msg?.sender?.image} alt="" boxSize="42px" />
            <Box px={1}>
              <HStack mb={1}>
                <Text fontSize="xs" fontWeight="medium" isTruncated>
                  {msg?.sender.name}
                </Text>
                <Text fontSize="10px" isTruncated>
                  {moment(msg?.createdAt).calendar()}
                </Text>
              </HStack>
              <Flex w="full">
                <Tag
                  _hover={{ color: "teal.500" }}
                  px={3}
                  py={2}
                  borderRadius="xl"
                  fontSize="sm"
                  display="flex"
                  flexWrap="wrap"
                  transition="all ease 0.1s"
                >
                  {msg?.text}
                </Tag>
              </Flex>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Message;
