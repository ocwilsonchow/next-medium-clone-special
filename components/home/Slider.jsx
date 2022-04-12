import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Text, Flex } from "@chakra-ui/react";

const Slider = () => {
  const projects = [
    {
      name: "React.js",
    },
    {
      name: "Next.js",
    },
    {
      name: "SWR",
    },
    {
      name: "Tailwind",
    },
    {
      name: "Chakra",
    },
    {
      name: "Framer Motion",
    },
    {
      name: "Medium Clone",
    },
    {
      name: "Medium Clone",
    },
    {
      name: "Medium Clone",
    },
    {
      name: "Medium Clone",
    },
    {
      name: "Medium Clone",
    },
    {
      name: "Medium Clone",
    },
  ];

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <motion.div
        ref={carousel}
        className="carousel cursor-grab overflow-hidden"
        whileTap={{cursor: "grabbing"}}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex py-10"
        >
          {projects.map((project, i) => (
            <motion.div key={i} className="p-4 mr-3 border rounded-md">
              <Box boxSize="100px" borderRadius="lg">
                <Text fontWeight="bold">{project.name}</Text>
              </Box>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Slider;
