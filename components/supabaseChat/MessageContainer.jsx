import { useState, useEffect } from "react";
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
import axios from "axios";

const Message = ({ msg }) => {
  const { data: session } = useSession();
  const isSender = session?.user?.email === msg?.sender?.email;

  // Handle Like || Unlike
  const handleClick = async (e, msgId) => {
    if (!session) return;
    switch (e.detail) {
      case 2:
        console.log('double click')
        if (msg.likedUsers.some((user)=> user.userId===session?.user?.id)==false) {
          await axios({
            method: "POST",
            url: `/api/chat/message/like/${msgId}`,
          }).catch((err) => {
            console.log(err);
          });
        } else if (msg.likedUsers.some((user)=> user.userId===session?.user?.id)) {

          await axios({
            method: "DELETE",
            url: `/api/chat/message/like/${msgId}`,
          }).catch((err) => {
            console.log(err);
          });
        }
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
                    cursor="pointer"
                    onClick={(e) => handleClick(e, msg.id)}
                  >
                    {msg?.text}
                  </Tag>
                  {isSender && <EditBtn messageId={msg?.id} />}
                </Flex>
              </Flex>
              {msg?._count?.likedUsers !== 0 && (
                <Flex justifyContent={(isSender && "flex-end") || "flex-start"}>
                  <Tag fontSize="xs">👍 {msg?._count?.likedUsers}</Tag>
                </Flex>
              )}
            </Box>
          </HStack>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Message;
