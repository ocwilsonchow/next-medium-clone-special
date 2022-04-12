import { Img, Flex, Text, LinkBox, HStack } from "@chakra-ui/react";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import moment from "moment";
import { PortableText } from "@portabletext/react";

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
      borderBottomWidth="1px"
      maxW="800px"
      py={8}
      alignItems="center"
      cursor="pointer"
      _hover={{ color: "blue.500" }}
    >
      <Link href={`blog/${post.slug.current}`}>
        <HStack spacing={6}>
          <Flex flexDir="column" >
            <HStack>
              <Img
                src={urlFor(post?.authorImage)}
                boxSize="25px"
                borderRadius="full"
                objectFit="cover"
                alt=""
              />
              <Text fontSize="sm">{post?.author}</Text>
              <Text fontSize="xs" color="gray.500">
                {moment(post.publishedAt).calendar()}
              </Text>
            </HStack>
            <Text fontWeight="bold" fontSize={["xl","xl","2xl","2xl"]} my={2}>
              {post.title}
            </Text>
            <Text noOfLines="3" my={2} fontWeight="light" fontSize={["sm","sm","md","md"]}>
              <PortableText value={post.body} />
            </Text>
          </Flex>
          <Img
            src={post?.mainImage?.asset?.url}
            boxSize={["100px","100px","130px","150px"]}
            objectFit="cover"
            alt=""
            borderRadius="md"
          />
        </HStack>
      </Link>
    </LinkBox>
  );
};

export default SinglePost;
