import { Img, Flex, Text, LinkBox } from "@chakra-ui/react";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import moment from "moment";

const builder = imageUrlBuilder({
  projectId: "zmau43jq",
  dataset: "production",
});
function urlFor(source) {
  return builder.image(source);
}

const SinglePost = ({ post }) => {
  console.log(post);

  return (
    <LinkBox
      my={2}
      borderWidth="1px"
      borderRadius="md"
      maxW="xs"
      p={4}
      alignItems="center"
      cursor="pointer"
      _hover={{ color: "blue.500" }}
    >
      <Link href={`blog/${post.slug.current}`}>
        <Flex flexDir="column" h="100%">
          <Img
            src={post?.mainImage?.asset?.url}
            objectFit="cover"
            mb={3}
            alt=""
          />
          <Flex alignItems="center">
            <Img
              src={urlFor(post?.authorImage).url()}
              boxSize="40px"
              objectFit="cover"
              mr={2}
              borderRadius="full"
              alt=""
            />

            <Flex flexDir="column" justifyContent="center">
              <Text fontWeight="bold" fontSize="lg">
                {post?.title}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {moment(post.publishedAt).calendar()}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Link>
    </LinkBox>
  );
};

export default SinglePost;
