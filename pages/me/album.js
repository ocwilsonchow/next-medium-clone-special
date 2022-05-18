import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Text,
  Img,
  Button,
  Tooltip,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { apiGetGalleryImages } from "../../lib/gallery";
import imageUrlBuilder from "@sanity/image-url";

const PageAlbum = ({ images }) => {
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

      <Grid templateColumns="repeat(6, 1fr)" templateRows="repeat(1, 1fr)" pb={6}>
        {images.map((img, i) => (
          <GridItem
            colSpan={{ base: 3, sm: 3, md: 2 }}
            rowSpan={1}
            flexDir="column"
            p={2}
            borderWidth="0.5px"
            borderRadius="base"
            key={i}
          >
            <Tooltip fontSize="md" label={img.description}>
              <Img
                borderRadius="base"
                src={urlFor(img?.mainImage)}
                boxSize="full"

                objectFit="cover"
                draggable="false"
              />
            </Tooltip>
          </GridItem>
        ))}
      </Grid>
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
  };
}
