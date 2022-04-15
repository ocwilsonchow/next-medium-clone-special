import {
  Box,
  Button,
  Center,
  Code,
  Collapse,
  Fade,
  Flex,
  HStack,
  IconButton,
  SlideFade,
  Tag,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  AiOutlineGithub,
  AiFillFacebook,
  AiFillYoutube,
  AiTwotoneMail,
  AiFillInstagram,
} from "react-icons/ai";
import Slider from "../components/home/Slider";
import CallForContact from "../components/home/CallForContact";
import Backhand from "../images/Backhand.png";
import FeaturedProject from "../components/home/FeaturedProject";
import { motion } from "framer-motion";

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
const learnings = ["Three.js 🌟", "Redux", "RTK Query", "Graphql"];

export default function Home() {
  return (
    <Fade in>
      <Flex flexDir="column" w="full" justifyContent="space-evenly">
        <Center p={2}>
          <Code bg="none" fontSize="sm" textAlign="center">
            Bear with me, web development still in progress!
          </Code>
        </Center>

        <SlideFade in offsetX="-100px">
          <Box py="12%" w="100%" h="450px">
            <Text fontWeight="bold" fontSize={["5xl", "5xl", "5xl", "7xl"]}>
              Hello{" "}
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: [20, 0, 20, 0, 20] }}
                className="inline-flex"
                transition={{ delay: 0.5 }}
              >
                👋🏻
              </motion.div>
            </Text>
            <Text
              fontWeight="bold"
              fontSize={["5xl", "5xl", "5xl", "7xl"]}
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
        >
          <SlideFade in offsetX="100px">
            <Box py="50px" w="full" h="300px">
              <Link href="/me/about">
                <Button mb={2} colorScheme="twitter" size="lg">
                  My Story 🌍
                </Button>
              </Link>

              <HStack py={20} spacing={3}>
                <a
                  href="https://github.com/ocwilsonchow/next-medium-clone-special"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconButton
                    icon={<AiOutlineGithub />}
                    fontSize="lg"
                    variant="outline"
                    borderRadius="full"
                  />
                </a>
                <a
                  href="https://www.facebook.com/ocwilsonchow/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconButton
                    fontSize="lg"
                    variant="outline"
                    rounded="full"
                    icon={<AiFillFacebook />}
                  />
                </a>

                <a
                  href="https://www.instagram.com/ocwilsonchow/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconButton
                    fontSize="lg"
                    variant="outline"
                    rounded="full"
                    icon={<AiFillInstagram />}
                  />
                </a>
                <a
                  href="https://www.youtube.com/c/SLCHOW/featured"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconButton
                    fontSize="lg"
                    variant="outline"
                    rounded="full"
                    icon={<AiFillYoutube />}
                  />
                </a>

                <IconButton
                  fontSize="lg"
                  variant="outline"
                  rounded="full"
                  icon={<AiTwotoneMail />}
                />
              </HStack>
            </Box>
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
          </SlideFade>
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
              My favorite libraries
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
          {" "}
          <CallForContact />
        </motion.div>

        <Center p={20} mt={10} fontSize="sm" bottom="0%">
          Built in 🇭🇰 by Wilson Chow
        </Center>
      </Flex>
    </Fade>
  );
}
