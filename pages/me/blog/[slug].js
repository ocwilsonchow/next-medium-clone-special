import { useState } from "react";
import {
  Flex,
  Text,
  Img,
  useColorModeValue,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import {
  apiGetBlogPost,
  apiGetBlogPostIds,
  apiGetBlogPosts,
} from "../../../lib/blog";
import { useRouter } from "next/router";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

import moment from "moment";

const builder = imageUrlBuilder({
  projectId: "zmau43jq",
  dataset: "production",
});
function urlFor(source) {
  return builder.image(source);
}

export default function PageShowBlogPost({ post, posts }) {
  console.log(post)
  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;
  if (!post) return <div>This post does not exist.</div>;

  const components = {
    block: {
      h3: ({ children }) => (
        <Text fontWeight="bold" fontSize="2xl">
          {children}
        </Text>
      ),
    },
  };

  return (
    <VStack alignItems="start" spacing={4}>
      <Text fontWeight="bold" fontSize="4xl">
        {post?.title}
      </Text>
      <Text fontSize="xs" color="gray.500" mb={4}>
        {moment(post.publishedAt).calendar()}
      </Text>
      <PortableText value={post.body} components={components} />
    </VStack>
  );
}

export async function getStaticPaths() {
  const paths = await apiGetBlogPostIds();
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await apiGetBlogPost(params.slug);
  const posts = await apiGetBlogPosts();
  return {
    props: {
      post,
      posts,
    },
    revalidate: 1,
  };
}
