import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => fetch(url).then((res) => res.json());

const EditBtn = ({ messageId }) => {
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { room } = router.query;
  const { data: thisRoom, mutate } = useSWR(`/api/chat/${room}`, fetcher, {
    refreshInterval: 500,
  });

  const handleDelete = async () => {
    setLoading(true);
    await axios({
      method: "DELETE",
      url: `/api/chat/message/${messageId}`,
    })
      .then((resp) => {
        mutate();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <Menu>
        <MenuButton
          size="xs"
          variant="ghost"
          as={Button}
          rightIcon={<BsThreeDots />}
          color="gray.500"
          _focus={{ outline: 0 }}
        />
        <MenuList boxShadow="none" p={0}>
          <>
            <MenuItem onClick={onOpen}>Delete</MenuItem>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Are You Sure?</ModalHeader>
                <ModalCloseButton />
                <ModalFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleDelete}
                    isLoading={loading}
                    colorScheme="red"
                  >
                    Delete
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        </MenuList>
      </Menu>
    </>
  );
};

export default EditBtn;
