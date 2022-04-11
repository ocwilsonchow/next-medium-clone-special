import {
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Text,
  Alert,
} from "@chakra-ui/react";
import Link from "next/link";
import SinglePost from "../../../components/SinglePost";
import { apiGetBlogPosts } from "../../../lib/blog";

export default function PageBlogIndex({ posts }) {
  console.log(posts);
  return (
    <Flex flexDir="column" justifyContent="center">
      {!posts && (
        <Center p={6}>
          <Spinner />
        </Center>
      )}
      <Flex flexWrap="wrap" justifyContent="center">
        {posts?.map((post, i) => (
          <Flex key={i} m={1.5}>
            <SinglePost post={post} i={i} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export async function getStaticProps() {
  const posts = await apiGetBlogPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}
