import { useState } from "react";
import { Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import moment from "moment";
import { useSession } from "next-auth/react";
import { apiCreateBlogComment } from "../../lib/blog";
import useSWR from "swr";
import { readClient } from "../../lib/sanity";
import groq from "groq";

const Comments = ({ postId, slug }) => {
  const { data: session, status } = useSession();
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState()

  const { data, error } = useSWR(
    groq`*[_type == "post" && slug.current == "${slug}"] {
     "relatedComments": *[_type=='comment' && references(^._id)] | order(publishedAt asc) {
      username,
      publishedAt,
      comment,
    }
  }`,
    (query) => readClient.fetch(query)
  );
  if (error) return <div>Failed</div>;
  if (!data) return <div>Loading...</div>;

  const handleSubmit = async () => {
    const commentDoc = {
      _type: "comment",
      username: session.user.name,
      userEmail: session.user.email,
      userImage: session.user.image,
      publishedAt: new Date().toISOString(),
      comment: commentInput,
      post: {
        _ref: postId,
        _type: "reference",
      },
    };
    await apiCreateBlogComment(commentDoc, slug);
    setCommentInput("");
  };

  return (
    <Flex flexDir="column" w="full">
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        Comments
      </Text>
      {data[0].relatedComments?.length == 0 && <Text>No comment on this post yet.</Text>}
      {data[0].relatedComments?.map((comment, i) => (
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
