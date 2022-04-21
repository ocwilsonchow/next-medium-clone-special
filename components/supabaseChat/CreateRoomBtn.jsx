import { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  IconButton,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import axios from "axios";
import useSWR from "swr";
import { useSession, signIn, signOut } from "next-auth/react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const CreateRoomBtn = () => {
  const [nameInput, setNameInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  const { data, error, mutate } = useSWR("/api/chat", fetcher);

  const handleCreateRoom = async () => {
    setLoading(true);
    if (nameInput.length === 0) return;

    await axios({
      method: "POST",
      url: "/api/chat",
      data: {
        name: nameInput.charAt(0).toUpperCase() + nameInput.slice(1),
        users: {
          connect: {
            id: session.user.id,
          },
        },
      },
    }).then((resp) => {
      mutate();
      setLoading(false);
    });
  };

  console.log(nameInput);

  return (
    <Flex flexDir="column" py={4}>
      <FormControl>
        <Input
          placeholder={(!session && "Sign in first") || "Enter new room name"}
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          disabled={!session}
        />
        <InputRightElement>
          <IconButton
            icon={<AddIcon />}
            variant="ghost"
            onClick={handleCreateRoom}
            disabled={!session || loading}
          />
        </InputRightElement>
      </FormControl>
    </Flex>
  );
};

export default CreateRoomBtn;
