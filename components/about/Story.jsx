import { Center, Fade, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      <Text mb={6} fontSize="md">
        Since I was a child, I started{" "}
        <strong className="text-blue-400">building</strong> things. At first I
        built all sort of toys and models with legos. Then I started learning
        drawing, I particularly liked drawing architecture. After I entered high
        school, I became the captain of our video and photography team. I made a
        lot of videos and album for a variety of school events.
      </Text>
      <Text mb={6} fontSize="md">
        Because I like science, in particular, medicine and pharmacology, I went
        into one of the top pharmacy school and the world and studied an
        integrated master degree of{" "}
        <strong className="text-blue-400">pharmacy</strong>. I graduated with a
        first class honour, and worked as a trainee pharmacist. After 5 years of
        education, I finally became a{" "}
        <strong className="text-blue-400">registered pharmacist</strong>.
      </Text>
      <Text mb={6} fontSize="md">
        My working experience in pharmacy sparked my interest in software
        development. I worked at one of the largest healthcare companies in the
        UK, only to discovered many of their software applications were fairly
        out-of-date. It was slow and lack UI and UX design. It inspired me to
        build applications one day, which could effectively improve patient
        treatment journey, and empower more efficient provision of healthcare
        services.
      </Text>
      <Text mb={6} fontSize="md">
        During my full-time job as a{" "}
        <strong className="text-blue-400">trainee pharmacist</strong>, I spent
        most of my spare time and weekends learning coding. I began with taking
        a full stack <strong className="text-blue-400">Udemy</strong> course
        taught by Angela Yu. Then I started to build projects following Youtube
        tutorials.
      </Text>
      <Text mb={6} fontSize="md">
        In summer 2021, I officially completed my five-year pharmacy education.
        I decided to come back to Hong Kong to learn web development. I joined H
        Academy{" "}
        <strong className="text-blue-400">
          full stack web development bootcamp
        </strong>
        . Since then I started becoming more familiar with Javascript and a wide
        variety of web technologies and libraries.
      </Text>
      <Text mb={20} fontSize="md">
        I would say, I was born to be a builder,{" "}
        <strong className="text-blue-400">a creator</strong>. I like building
        things, beautiful things. I am glad that I am heading in the right
        direction of my career path. I hope one day I could engineer my own product
        that could help millions of users access better healthcare with the help
        of   <strong className="text-blue-400">software technologies</strong>.
      </Text>
    </motion.div>
  );
};

export default Story;
