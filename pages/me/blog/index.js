import {
  Button,
  Center,
  Flex,
  Spinner,
  Fade,
} from "@chakra-ui/react";
import SinglePostPreview from "../../../components/blog/SinglePost";
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
          <Fade key={i} in>
            <SinglePostPreview post={post} />
          </Fade>
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
