import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Text, Flex, useColorModeValue, Img } from "@chakra-ui/react";

const Slider = () => {
  const projects = [
    {
      name: "React.js",
      image: "",
    },
    {
      name: "Next.js",
      image: "",
    },
    {
      name: "SWR",
      image: "",
    },
    {
      name: "Tailwind",
      image: "",
    },
    {
      name: "Chakra",
      image: "",
    },
    {
      name: "Framer Motion",
      image: "",
    },
    {
      name: "Framer Motion",
      image: "",
    },
    {
      name: "Framer Motion",
      image: "",
    },
    {
      name: "Framer Motion",
      image: "",
    },
  ];

  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const boxBg = useColorModeValue("cyan.100", "gray.700");

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <motion.div
        ref={carousel}
        className="carousel cursor-grab overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex py-10"
        >
          {projects.map((project, i) => (
            <motion.div key={i} className="p-2 mr-2">
              <Box boxSize="120px" p={4}  borderRadius="lg">
                <Text fontSize="xl" fontWeight="bold">
                  {project.name}
                </Text>
                <Img src={project.image || ""}/>
              </Box>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Slider;
