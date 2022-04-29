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
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import moment from "moment";
import { motion } from "framer-motion";

const Message = ({ msg }) => {
  const { data: session } = useSession();
  const { anonymousId, likeAMessage } = useChat();

  const isSender = session?.user?.email === msg?.userEmail;
  const isAnonymousSender = anonymousId === msg?.userEmail;

  // console.log(msg)
  const handleClick = (e, msgId) => {
    switch (e.detail) {
      case 1:
        console.log("click");
        break;
      case 2:
        console.log("double click", msgId);

        break;
      case 3:
        console.log("triple click");
        break;
      default:
        return;
    }
  };

  if (!msg) return null;

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
                <Text fontSize="xs" fontWeight="medium" isTruncated>
                  {msg?.username}
                </Text>
                <Text fontSize="10px" isTruncated>
                  {moment(msg?.createdAt).calendar()}
                </Text>
              </HStack>
              <Flex
                w="full"
                alignItems="flex-end"
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
                    "gray"
                  }
                  _hover={{ color: "blue.500" }}
                  px={3}
                  py={2}
                  borderRadius="xl"
                  fontWeight="regular"
                  fontSize="sm"
                  display="flex"
                  flexWrap="wrap"
                  transition="all ease 0.1s"
                  cursor="pointer"
                  onClick={(e) => handleClick(e, msg._id)}
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
