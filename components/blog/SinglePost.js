import {
  Img,
  Flex,
  Text,
  LinkBox,
  HStack,
  Tag,
  Box,
  Fade,
  Button,
  IconButton,
} from "@chakra-ui/react";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import moment from "moment";
import { PortableText } from "@portabletext/react";
import { StarIcon } from "@chakra-ui/icons";

const builder = imageUrlBuilder({
  projectId: "zmau43jq",
  dataset: "production",
});
function urlFor(source) {
  return builder.image(source);
}

const SinglePostPreview = ({ post }) => {
  return (
    <Fade in>
      <LinkBox
        my={2}
        borderBottomWidth="1px"
        maxW="800px"
        py={10}
        alignItems="center"
        cursor="pointer"
        _hover={{ color: "blue.400" }}
      >
        <Link href={`blog/${post.slug.current}`}>
          <HStack spacing={6}>
            <Flex flexDir="column">
              <HStack>
                <Img
                  src={urlFor(post?.authorImage)}
                  boxSize="25px"
                  borderRadius="full"
                  objectFit="cover"
                  alt=""
                />
                <Text fontSize="sm" isTruncated>
                  {post?.author}
                </Text>
                <Text fontSize="xs" color="gray.500" isTruncated>
                  {moment(post.publishedAt).calendar()}
                </Text>
              </HStack>
              <Text
                fontWeight="bold"
                fontSize={["xl", "2xl", "4xl", "4xl"]}
                my={2}
              >
                {post.title}
              </Text>
              <Box
                my={2}
                fontWeight="light"
                fontSize={["sm", "sm", "md", "md"]}
                noOfLines="3"
              >
                <PortableText value={post.body[0]} />
              </Box>
              <Flex flexWrap="wrap" mt={3}>
                {post.tags?.map((tag, i) => (
                  <Tag
                    my={1}
                    key={i}
                    borderRadius="full"
                    fontWeight="light"
                    fontSize="xs"
                    mr={2.5}
                  >
                    {tag.label}
                  </Tag>
                ))}
                <Tag
                  my={1}
                  borderRadius="full"
                  fontSize="xs"
                   fontWeight="light"
                  mr={2.5}
                  variant="subtle"

                >
                 Like
                </Tag>
              </Flex>
            </Flex>
            <Img
              src={post?.mainImage?.asset?.url}
              boxSize={["0px", "100px", "130px", "150px"]}
              objectFit="cover"
              alt=""
              borderRadius="md"
            />
          </HStack>
        </Link>
      </LinkBox>
    </Fade>
  );
};

export default SinglePostPreview;
