import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useDisclosure,
  Box,
  CloseButton,
  Button,
  Flex,
} from "@chakra-ui/react";

const AlertComponent = () => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  return isVisible ? (
    <Alert status="info" justifyContent="space-between" alignItems="center">
      <Flex alignItems="center">
        <AlertIcon />
        <Box>
          <AlertTitle>Dear Managers,</AlertTitle>
          <AlertDescription>
            I am looking for an opportunity to work as a developer!
          </AlertDescription>
        </Box>
      </Flex>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <Button onClick={onOpen}>👀</Button>
  );
};

export default AlertComponent;
