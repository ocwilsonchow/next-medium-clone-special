import {
  Fade,
  Flex,
  FormLabel,
  FormControl,
  Input,
  Button,
  Text,
  Box,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { apiCreateInboxMessage } from "../api/contact/inbox";

const PageContactWilson = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const toast = useToast();

  const onSubmit = async (data) => {
    const inboxMessageDoc = {
      ...data,
      _type: "inboxMessage",
      createdAt: new Date().toISOString(),
    };

    try {
      await apiCreateInboxMessage(inboxMessageDoc);
      toast({
        title: "Message sent",
        description: "Wilson will get back to you very soon 😊",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: `${error}`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Fade in>
      <VStack>
        <Flex flexDir="column" py={6} maxW="800px">
          <Text fontWeight="bold" fontSize="4xl">
            Leave me a message
          </Text>
          <Box py={10}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex flexDir={{ base: "column", md: "row" }} columnGap={2}>
                <FormControl isInvalid={errors.name} mb={6}>
                  <FormLabel htmlFor="firstName">First name</FormLabel>
                  <Input
                    {...register("firstName", { required: true })}
                    placeholder="First Name"
                  />
                </FormControl>
                <FormControl isInvalid={errors.name} mb={6}>
                  <FormLabel htmlFor="lastName">Last name</FormLabel>
                  <Input
                    {...register("lastName", { required: true })}
                    placeholder="Last Name"
                  />
                </FormControl>
              </Flex>
              <FormControl isInvalid={errors.name} mb={6}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                />
              </FormControl>
              <Flex flexDir={{ base: "column", md: "row" }} columnGap={2}>
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
              <FormControl isInvalid={errors.name} mb={6}>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  placeholder="Your message"
                  {...register("message", { required: true })}
                />
              </FormControl>

              <Button
                mt={4}
                colorScheme="twitter"
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
