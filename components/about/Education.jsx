import { Box, Center, Fade, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const Education = () => {
  const educations = [
    {
      image:
        "https://cdn.sanity.io/images/i3xzrnz1/production/2e0cc02ac8039c7ca311292f28db4011fe31b99e-936x518.png",
      title: "Student Full Stack Developer",
      name: "Full-stack Web Development Immersive Bootcamp",
      organization: "H Academy",
      place: "Hong Kong",
      description: [""],
      year: "2022 January to May",
    },
    {
      image:
        "https://cdn.sanity.io/images/i3xzrnz1/production/9658e2cae60ae5b87f5443b7ab3ff821a009c1bf-1775x1775.png",
      title: "Registered Pharmacist",
      name: "",
      organization: "General Pharmaceutical Council",
      place: "United Kingdom",
      description: [""],
      year: "2022 January",
    },
    {
      image:
        "https://cdn.sanity.io/images/i3xzrnz1/production/cdc1e20e2fafd14e7a3b4a1bf7dc5dd9168024e1-825x825.png",
      title: "Trainee Pharmacist",
      name: "",
      organization: "Boots",
      place: "United Kingdom",
      description: [""],
      year: "2021 to 2022",
    },
    {
      image:
        "https://cdn.sanity.io/images/i3xzrnz1/production/5cecdc0832d5f5bd976d6a323fdc3fa1c26f8f30-1000x1000.jpg",
      title: "",
      name: "MPharm Master of Pharmacy (undergraduate)",
      organization: "University College London",
      place: "United Kingdom",
      description: ["First Class Honours (GPA = ~3.9)"],
      year: "2016 to 2020",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      <Flex flexDir="column">
        {educations?.map((education, i) => (
          <Flex

            borderWidth="1px"
            borderRadius="md"
            mb={3}
            p={3}
            key={i}
          >
            <Box
              w={100}
              h={100}
              mr={4}
              borderWidth="0.5px"
              display={{ base: "none", md: "flex" }}
            >
              <Image
                src={education.image}
                width={100}
                height={100}
                objectFit="cover"
                alt=""
              />
            </Box>
            <Flex flexDir="column" h="full">
              <Text>{education.year}</Text>
              <Text fontWeight="extrabold">{education.name}</Text>
              <Text fontWeight="extrabold" color='blue.400'>{education.title}</Text>
              <Text fontWeight="light">
                {education.organization}, {education.place}
              </Text>
              <Flex>
                {education?.description?.map((item, i) => (
                  <Text key={i} fontWeight="light" fontStyle="italic">
                    {item}
                  </Text>
                ))}
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </motion.div>
  );
};

export default Education;
