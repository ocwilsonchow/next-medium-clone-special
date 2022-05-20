import React, { useRef, useEffect, useState } from "react";
import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "./projects"

const FeaturedProject = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);



  return (
    <Box mb={20}>
      <Text p={2} fontSize="3xl" fontWeight="bold" mb={2}>
        Featured
      </Text>
      <Flex w="full">
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
            {projects.map((item, i) => (
              <motion.div
                key={i}
                className="mr-1 p-1"
                whileHover={{ scale: 0.99 }}
              >
                <Flex
                  flexDir="column"
                  p={5}
                  borderWidth="1px"
                  w="350px"
                  h="100%"
                  borderRadius="xl"
                  justifyContent="space-between"
                  backdropFilter="blur(100px)"
                >
                  <Text p={2} fontWeight="bold" fontSize="2xl" mb={2}>
                    {item.title}
                  </Text>

                  <Flex
                    flexDir="column"
                    h="100%"
                    mb={4}
                    justifyContent="space-between"
                  >
                    <Text p={2} mb={2}>
                      {item.description}
                    </Text>
                    <Image
                      src={item.image}
                      width={310}
                      height={210}
                      objectFit="cover"
                      draggable="false"
                    />
                  </Flex>
                  <Link href={item.link}>
                    <Button mt={2} p={4} variant="outline">
                      <Text>
                        {(item.remark && item.remark) || "Check it out"}
                      </Text>
                    </Button>
                  </Link>
                </Flex>
              </motion.div>
            ))}
          </motion.div>
          <Text p={2} fontSize="xs">
            *It may take longer to load on Heroku server
          </Text>
        </motion.div>
      </Flex>
    </Box>
  );
};

export default FeaturedProject;
