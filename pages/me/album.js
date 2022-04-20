import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Img,
  Button,
} from "@chakra-ui/react";
import { apiGetGalleryImages } from "../../lib/gallery";
import imageUrlBuilder from "@sanity/image-url";

const PageAlbum = ({ images }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const boxColor = useColorModeValue("gray.50", 'gray.900')


  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const builder = imageUrlBuilder({
    projectId: "zmau43jq",
    dataset: "production",
  });
  function urlFor(source) {
    return builder.image(source);
  }

  console.log(images);

  return (
    <>
      <Box py={4}>
        <Text fontWeight="bold" fontSize="2xl">
          My Album
        </Text>
      </Box>
      <motion.div
        ref={carousel}
        className="carousel cursor-grab overflow-hidden pb-2"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex"
        >
          {images.map((img, i) => (
            <motion.div key={i} className="mr-1 p-1">
              <Flex
                flexDir="column"
                p={6}
                borderWidth="0.5px"
                w={["300px","350px","400px","400px"]}
                borderRadius="base"
                justifyContent="space-between"
                bgColor={boxColor}
              >
                <Img
                  borderRadius="base"
                  src={urlFor(img?.mainImage)}
                  width="full"
                  h={["3500px","400px","500px","500px"]}
                  objectFit="cover"
                  draggable="false"
                />
                <Text pt={4} fontWeight="bold">{img.title}</Text>
                <Text py={4}>{img.description}</Text>
              </Flex>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
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
