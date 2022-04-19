import { useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Fade,
  Flex,
  SlideFade,
  Tag,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Slider from "../components/home/Slider";
import CallForContact from "../components/home/CallForContact";
import FeaturedProject from "../components/home/FeaturedProject";
import { motion } from "framer-motion";
import SocialLinks from "../components/about/SocialLinks";

const Typewritter = dynamic(() => import("../components/Typewritter"), {
  ssr: false,
});
const skills = [
  "React.js",
  "Next.js 🔥",
  "Blender ⚙️ ",
  "Framer Motion",
  "Chakra UI",
  "UI Design 👀",
  "Tailwind 💨",
];
const learnings = [
  "Three.js",
  "Redux",
  "RTK Query",
  "Graphql",
  "Typescript",
  "Motion Framer",
];

export default function Home() {
  return (
    <Fade in>
      <Flex flexDir="column" w="full" justifyContent="space-evenly">
        <SlideFade in offsetX="-100px">
          <Box py="16%" w="100%" minH="550px" pb={20}>
            <Flex>
              <Text fontWeight="bold" fontSize={["5xl", "6xl", "6xl", "7xl"]}>
                Hello
              </Text>
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: [20, 0, 20, 0, 20] }}
                className="inline-flex"
                transition={{ delay: 0.5 }}
              >
                <Text
                  ml={2}
                  fontWeight="bold"
                  fontSize={["5xl", "6xl", "6xl", "7xl"]}
                >
                  👋🏻
                </Text>
              </motion.div>
            </Flex>
            <Text
              fontWeight="bold"
              fontSize={["5xl", "6xl", "6xl", "7xl"]}
              mb={6}
            >
              I am Wilson
            </Text>
            <Typewritter />
          </Box>
        </SlideFade>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          className="my-10"
        >
          <Flex columnGap={3} rowGap={3} flexWrap="wrap">
            <Link href="/me/about">
              <Button colorScheme="twitter" size="lg">
                My Story 🌍
              </Button>
            </Link>
            <Link href="/me/contactWilson">
              <Button variant="outline" size="lg">
                Contact Me 💬
              </Button>
            </Link>
          </Flex>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          className="pb-20"
        >
          <SocialLinks />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
        >
          <Box pb={20}>
            <Text fontWeight="bold" fontSize="3xl" mb={4}>
              Skills
            </Text>
            <Flex flexWrap="wrap">
              {skills.map((skill, i) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={i}
                >
                  <Button p={4} mr={3} my={1} bg="none" variant="outline">
                    {skill}
                  </Button>
                </motion.div>
              ))}
            </Flex>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
        >
          <FeaturedProject />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
        >
          <Box pb={20}>
            <Text fontWeight="bold" fontSize="3xl" mb={4}>
              Libraries that I use
            </Text>
            <Slider />
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
        >
          <Box pb={20}>
            <Text fontWeight="bold" fontSize="3xl" mb={4}>
              Technologies that I am learning and practising
            </Text>
            <Flex flexWrap="wrap">
              {learnings.map((tech, i) => (
                <Button key={i} p={4} mr={3} my={1} bg="none" variant="outline">
                  {tech}
                </Button>
              ))}
            </Flex>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
        >
          <CallForContact />
        </motion.div>

        <Center p={20} mt={10} fontSize="sm" bottom="0%" textAlign="center">
          Built in 🇭🇰 by Wilson Chow
        </Center>
      </Flex>
    </Fade>
  );
}
