import {
  Fade,
  Flex,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Text,
  Box,
  Textarea,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { apiCreateInboxMessage } from '../pages/api/inbox'

const PageContactWilson = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const inboxMessageDoc = {
      ...data,
      _type: "inboxMessage",
      createdAt: new Date().toISOString(),
    }

    try {
      const response = await apiCreateInboxMessage(inboxMessageDoc)
      console.log(response)
    } catch (error) {
      console.error(error)
    }

  };

  return (
    <Fade in>
      <VStack>
        <Flex flexDir="column" py={6} maxW="800px">
          <Text fontWeight="bold" fontSize="4xl">
            Leave a message to Wilson
          </Text>
          <Box py={8}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex flexDir={{base: 'column', md: 'row'}} columnGap={2}>
                <FormControl isInvalid={errors.name} mb={6}   >
                  <FormLabel htmlFor="firstName">First name</FormLabel>
                  <Input {...register("firstName")} placeholder="First Name" />
                </FormControl>
                <FormControl isInvalid={errors.name} mb={6}   >
                  <FormLabel htmlFor="lastName">Last name</FormLabel>
                  <Input {...register("lastName")} placeholder="Last Name" />
                </FormControl>
              </Flex>
              <FormControl isInvalid={errors.name} mb={6} >
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input type="email" placeholder="email" {...register("email")} />
              </FormControl>
              <Flex flexDir={{base: 'column', md: 'row'}} columnGap={2}>
                <FormControl isInvalid={errors.name} mb={6}>
                <FormLabel htmlFor="topic">Topic</FormLabel>
                <Input
                  type="topic"
                  placeholder="Topic"
                  {...register("topic")}
                />
              </FormControl>
               <FormControl isInvalid={errors.name} mb={6}>
                <FormLabel htmlFor="contact">Contact</FormLabel>
                <Input
                  type="number"
                  placeholder="contact number"
                  {...register("contact")}
                />
              </FormControl>
              </Flex>
              <FormControl isInvalid={errors.name} mb={6} >
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea placeholder="Your message" {...register("message")} />
              </FormControl>

              <Button
                mt={4}
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Box>
        </Flex>
      </VStack>
    </Fade>
  );
};

export default PageContactWilson;
