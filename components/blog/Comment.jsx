import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Input,
  InputRightElement,
  Text,
  InputGroup,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import moment from "moment";
import { useSession } from "next-auth/react";

import { AiOutlineSend } from "react-icons/ai";

const Comments = ({ comments, rev }) => {
  const { data: session, status } = useSession();
  const [commentInput, setCommentInput] = useState("");

  const handleSubmit = () => {
    const commentDoc = {
      username: session,
      userEmail: session.user.email,
      userImage: session.user.image,
      publishedAt: new Date().toISOString(),
      comment: commentInput,
      post: {
        _ref: rev,
        _type: "reference",
      },
    }

    console.log(commentDoc)
  };

  return (
    <Flex flexDir="column" w="full">
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        Comments
      </Text>
      {comments?.length == 0 && <Text>No comment on this post yet.</Text>}
      {comments?.map((comment, i) => (
        <Flex
          key={i}
          flexDir="column"
          borderWidth="0.5px"
          borderRadius="md"
          p={4}
          my={1}
        >
          <Text fontSize="md" fontWeight="medium">
            {comment.comment}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {moment(comment.publishedAt).calendar()} by {comment.username}
          </Text>
        </Flex>
      ))}
      <FormControl py={4} onSubmit={() => handleSubmit()}>
        <Input
          borderWidth="0.5px"
          value={commentInput}
          placeholder="Comment"
          onChange={(e) => setCommentInput(e.target.value)}
        />
      </FormControl>

      <Button
        onClick={() => handleSubmit()}
        isDisabled={!session || commentInput == ""}
      >
        {(!session && "Log in to comment") || "Comment"}
      </Button>
    </Flex>
  );
};

export default Comments;
