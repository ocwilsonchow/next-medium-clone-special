import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Img,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { apiGetGalleryImages } from "../../lib/gallery";
import imageUrlBuilder from "@sanity/image-url";

const PageAlbum = ({ images }) => {
  const boxColor = useColorModeValue("gray.50", "#0A0E19");

  const builder = imageUrlBuilder({
    projectId: "zmau43jq",
    dataset: "production",
  });
  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <>
      <Box py={4}>
        <Text fontWeight="bold" fontSize="2xl">
          My Album
        </Text>
      </Box>

      <Flex flexWrap="wrap" justifyContent="center" pb={6}>
        {images.map((img, i) => (
          <motion.div key={i} className="mr-1 p-1">
            <Flex
              flexDir="column"
              p={2}
              borderWidth="0.5px"
              borderRadius="base"
              bgColor={boxColor}
            >
              <Tooltip fontSize="md" label={img.description}>
                <Img
                  borderRadius="base"
                  src={urlFor(img?.mainImage)}
                  boxSize={{ base: "full", md: "250px" }}
                  objectFit="cover"
                  draggable="false"
                />
              </Tooltip>
            </Flex>
          </motion.div>
        ))}
      </Flex>
    </>
  );
};

export default PageAlbum;

export async function getStaticProps() {
  const images = await apiGetGalleryImages();
  return {
    props: {
      images,
    },
    revalidate: 60*60*12,
  };
}
