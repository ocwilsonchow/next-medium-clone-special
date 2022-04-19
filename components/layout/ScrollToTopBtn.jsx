import { Center, Button} from "@chakra-ui/react"

const ScrollToTopBtn = () => {
  return (
    <Center w="full" py={20}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => dummyRef.current.scrollIntoView({ behavior: "smooth" })}
      >
        Scroll to top
      </Button>
    </Center>
  );
};

export default ScrollToTopBtn;
