import React, { useRef, useEffect, useState } from "react";
import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import ecom from "../../images/react_ecom.png";
import anothergram from "../../images/anothergram.png";
import oxygen from "../../images/oxygen.png";
import personal from "../../images/personal.png";
import uber from "../../images/uberclone.png";
import tie from "../../images/tie.png"
import { motion } from "framer-motion";
import Link from "next/link";

const FeaturedProject = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const boxColor = useColorModeValue("gray.50", "#0A0E19");

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const projects = [
     {
      title: "Doctor Booking App",
      description:
        "An UI-focused doctor booking system built with Next.js and Chakra UI. This project was completed in 12 hours. ",
      image: tie,
      link: "/",
      remark: "PM for demo link",
    },
    {
      title: " Next.js Blog",
      description:
        "A blog and portfolio website built with Next, NextAuth, Sanity, Supabase, SWR, Prisma, Framer Motion, and Chakra UI.",
      image: personal,
      link: "/",
      remark: "See it on Vercel",
    },
    {
      title: " React E-Commerce",
      description:
        "An interactive online store built with React, Firestore, Firebase Authentication, Algolia, Stripe Checkout, PayPal and Chakra UI.",
      image: ecom,
      link: "https://react-ecommerce-app-tan.vercel.app",
      remark: "See it on Vercel",
    },
    {
      title: "Uber Blockchain Clone",
      description:
        "A Next.js clone of the Uber app, built with Mapbox, Ethers and Tailwind.",
      image: uber,
      link: "https://next-uber-clone-blockchain.vercel.app/",
      remark: "See it on Vercel",
    },
    {
      title: "Medicine Library",
      description:
        "A responsive Next.js static generation website built with Chakra UI and GraphCMS.",
      image: oxygen,
      link: "https://oxygen-pro.vercel.app/",
      remark: "See it on Vercel",
    },
    {
      title: "Full Stack Social Media",
      description:
        "A full stack CRUD project built with Node, Express, EJS, JQuery, Socket.io and Prisma. Features included: realtime chat, comment and post creation.",
      image: anothergram,
      link: "https://serene-garden-37851.herokuapp.com/",
      remark: "See it on Heroku*",
    },
  ];

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
                  bg={boxColor}
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
                      height={200}
                      objectFit="contain"
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
