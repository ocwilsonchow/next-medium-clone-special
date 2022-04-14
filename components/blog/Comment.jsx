import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import moment from "moment";

const Comments = ({ comments }) => {
  return (
    <Flex flexDir="column" w="full">
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        Comments
      </Text>
      {comments?.length == 0 && (
        <Text>No comment on this post yet.</Text>
      )}
      {comments?.map((comment, i) => (
        <Flex key={i} flexDir="column" borderWidth="0.5px" borderRadius="md" p={4} my={1}>
          <Text fontSize="md" fontWeight="medium">{comment.comment}</Text>
          <Text fontSize="xs" color="gray.500">
            {moment(comment.publishedAt).calendar()} by {comment.username}
          </Text>
        </Flex>
      ))}
      <FormControl py={4}>
        <Textarea borderWidth="0.5px"/>
      </FormControl>
      <Button>Comment</Button>
    </Flex>
  );
};

export default Comments;
