import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useChat } from "../../context/ChatContext";
import { useSession } from "next-auth/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import moment from "moment";
import { motion } from "framer-motion";

const Message = ({ msg }) => {
  const { data: session } = useSession();
  const { anonymousId } = useChat();

  const isSender = session?.user?.email === msg?.userEmail;
  const isAnonymousSender = anonymousId === msg?.userEmail;

  if (!msg) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}

    >
      <Box py={2} cursor={isSender && "pointer"}>
        <Flex
          flexDir={
            (isSender && "row-reverse") ||
            (isAnonymousSender && "row-reverse") ||
            "row"
          }
          w="full"
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack
            flexDir={
              (isSender && "row-reverse") ||
              (isAnonymousSender && "row-reverse") ||
              "row"
            }
          >
            <Avatar src={msg?.userImage} alt="" boxSize="42px" />
            <Box px={1}>
              <HStack
                mb={1}
                justifyContent={
                  (isSender && "flex-end") ||
                  (isAnonymousSender && "flex-end") ||
                  "flex-start"
                }
              >
                <Text fontSize="xs" fontWeight="medium">
                  {msg?.username}
                </Text>
                <Text fontSize="10px">{moment(msg?.createdAt).calendar()}</Text>
              </HStack>
              <Flex
                w="full"
                justifyContent={
                  (isSender && "flex-end") ||
                  (isAnonymousSender && "flex-end") ||
                  "flex-start"
                }
              >
                <Tag
                  colorScheme={
                    (isSender && "green") ||
                    (isAnonymousSender && "green") ||
                    "twitter"
                  }
                  _hover={{ color: "teal.500" }}
                  px={3}
                  py={2}
                  borderRadius="xl"
                  fontSize="sm"
                  display="flex"
                  flexWrap="wrap"
                  transition="all ease 0.1s"
                >
                  {msg?.message}
                </Tag>
              </Flex>
            </Box>
          </HStack>
          <IconButton
            hidden={!isSender || !isAnonymousSender}
            size="xs"
            icon={<BiDotsHorizontalRounded size="20px" />}
            m={1}
          />
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Message;
