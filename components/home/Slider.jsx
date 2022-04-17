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

const Slider = () => {
  const libraries = [
    "Chakra UI",
    "Firebase",
    "Supabase",
    "Algolia",
    "Prisma",
    "Tailwind",
    "Motion Framer",

    "SWR",
    "Sanity",
    "NextAuth",
    "Socket.io",
    "GraphCMS",
    "Mapbox",
    "JQuery",
    "Yup",
    "PayPal",
    "Stripe",
  ];

  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const boxBg = useColorModeValue("cyan.100", "gray.700");

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
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
          {libraries.map((lib, i) => (
            <motion.div key={i} className="mr-1 p-1">
              <Button p={4} bg="none" variant="outline">
                {lib}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Slider;
