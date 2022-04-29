import { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import { useSession } from "next-auth/react";
import { apiCreateBlogComment, apiDeleteBlogComment } from "../../lib/blog";
import useSWR from "swr";
import { readClient } from "../../lib/sanity";
import groq from "groq";

const fetcher = (query) => readClient.fetch(query).then((r) => r[0].relatedComments);

const Comments = ({ postId, slug }) => {
  const { data: session } = useSession();
  const [commentInput, setCommentInput] = useState("");
  const [loading, setLoading] = useState(false);

  const key = groq`*[_type == "post" && slug.current == "${slug}"] {
     "relatedComments": *[_type=='comment' && references(^._id)] | order(publishedAt asc) {
      _id,
      username,
      userEmail,
      userImage,
      publishedAt,
      comment,
    }
  }`;

  const { data, error, mutate } = useSWR(key, fetcher);

  // Handle submit create comment
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
    const comments = [...data, commentDoc]
    const options = { optimisticData: comments, rollbackOnError: true}
    setCommentInput("");

    mutate(apiCreateBlogComment(data, commentDoc), options);
  };

  // Handle submit delete comment
  const handleDelete = async (id, i) => {
    const comments = data.filter((item, index) => index!==i)
    const options = { optimisticData: comments, rollbackOnError: true}
    mutate(apiDeleteBlogComment(comments, id), options);
  };

  // so for some reason, the data became null at some point and cause the loading...
  if (error) return <div>Failed</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Flex flexDir="column" w="full">
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        Comments
      </Text>
      {data.length == 0 && (
        <Text>No comment on this post yet.</Text>
      )}
      {data.map(
        (comment, i) =>
          comment?.comment && (
            <Flex
              justifyContent="space-between"
              alignItems="center"
              borderWidth="0.5px"
              borderRadius="md"
              p={2}
              my={1.5}
              key={i}
            >
              <HStack>
                <Image
                  src={comment?.userImage}
                  boxSize="35px"
                  borderRadius="full"
                />
                <Flex flexDir="column">
                  <Text fontSize={["md", "md", "md", "md"]} fontWeight="">
                    {comment?.comment}
                  </Text>
                  <Text fontSize="xs" color="gray.500" isTruncated minW="200px">
                    {comment?.username},{" "}
                    {moment(comment?.publishedAt).calendar()}
                  </Text>
                </Flex>
              </HStack>
              {session?.user.email === comment?.userEmail && (
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={() => handleDelete(comment._id, i)}
                >
                  Delete
                </Button>
              )}
            </Flex>
          )
      )}
      <FormControl py={4}>
        <Input
          borderWidth="0.5px"
          value={commentInput}
          placeholder="Comment"
          onChange={(e) => setCommentInput(e.target.value)}
        />
      </FormControl>

      <Button
        onClick={() => handleSubmit()}
        isDisabled={!session || commentInput == "" || loading}
      >
        {(!session && "Log in to comment") || "Comment"}
      </Button>
    </Flex>
  );
};

export default Comments;
