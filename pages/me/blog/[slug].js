import { useState } from "react";
import { Flex, Text, Img, HStack, VStack, Fade } from "@chakra-ui/react";
import {
  apiGetBlogPost,
  apiGetBlogPostIds,
  apiGetBlogPosts,
} from "../../../lib/blog";
import { useRouter } from "next/router";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

import moment from "moment";
import Comments from "../../../components/blog/Comment";

const builder = imageUrlBuilder({
  projectId: "zmau43jq",
  dataset: "production",
});
function urlFor(source) {
  return builder.image(source);
}

export default function PageShowBlogPost({ post, posts }) {
  console.log(post);
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
    <Flex justifyContent="center" w="full">
      <Fade in>
        <VStack alignItems="start" maxW="800px" py={8} px={[0,0,6,12]}>
        <HStack>
          <Img
            src={urlFor(post?.authorImage)}
            boxSize="40px"
            borderRadius="full"
            objectFit="cover"
            alt=""
            mr={1}
          />
          <Flex flexDir="column">
            <Text fontSize="sm" fontWeight="bold">
              {post?.author}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {moment(post.publishedAt).calendar()}
            </Text>
          </Flex>
        </HStack>
        <Text fontWeight="bold" fontSize="4xl">
          {post?.title}
        </Text>
        <Img
          src={post?.mainImage?.asset?.url}
          maxH="500px"
          w="100%"
          objectFit="cover"
          alt=""
          py={4}
        />
        <VStack spacing={6}>
          <PortableText value={post.body} components={components} />
        </VStack>
        <Comments comments={post.relatedComments} slug={post.slug.current}/>
      </VStack>
      </Fade>
    </Flex>
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
