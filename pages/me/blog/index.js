import {
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Text,
  Alert,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import SinglePost from "../../../components/SinglePost";
import { apiGetBlogPosts } from "../../../lib/blog";

export default function PageBlogIndex({ posts }) {
  return (
    <Flex flexDir="column" justifyContent="center" w="full">
      {!posts && (
        <Center p={6}>
          <Spinner />
        </Center>
      )}
      <Flex flexDir="column" alignItems="center">
        {posts?.map((post, i) => (
          <SinglePost post={post} key={i} />
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
