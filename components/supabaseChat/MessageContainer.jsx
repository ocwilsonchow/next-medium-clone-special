import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import moment from "moment";
import { motion } from "framer-motion";
import EditBtn from "./EditBtn";

const Message = ({ msg }) => {
  const { data: session } = useSession();

  if (!msg) return null;

  const isSender = session?.user?.email === msg?.sender.email;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      <Box py={2}>
        <Flex
          flexDir={(isSender && "row-reverse") || "row"}
          w="full"
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack flexDir={(isSender && "row-reverse") || "row"}>
            <Avatar src={msg?.sender?.image} alt="" boxSize="42px" mx={1} />
            <Box px={1}>
              <HStack mb={1}>
                <Text fontSize="xs" fontWeight="medium" isTruncated>
                  {msg?.sender.name}
                </Text>
                <Text fontSize="10px" isTruncated>
                  {moment(msg?.createdAt).calendar()}
                </Text>
              </HStack>
              <Flex
                w="full"
                justifyContent={(isSender && "flex-end") || "flex-start"}
              >
                <Flex
                  alignItems="center"
                  columnGap={2}
                  flexDir={(isSender && "row-reverse") || "row"}
                  position="relative"
                >
                  <Tag
                    colorScheme={(isSender && "green") || "twitter"}
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
                  {isSender && <EditBtn messageId={msg?.id} />}
                </Flex>
              </Flex>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Message;
