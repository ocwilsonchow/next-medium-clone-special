import { useState, useEffect, useRef } from "react";
import {
  Flex,
  FormControl,
  HStack,
  IconButton,
  Input,
  InputRightElement,
  Switch,
  Text,
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
  const { data, error, mutate } = useSWR("/api/chat", session, fetcher);
  const [isPrivate, setIsPrivate] = useState(false)

  // const toggleIsPrivate = () => {
  //   setIsPrivate(prev => prev ==true ? false : true)
  // }


  const handleCreateRoom = async () => {
    setLoading(true);
    if (nameInput.length === 0) return setLoading(false);

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
    })
      .then((resp) => {
        mutate();
        setLoading(false);
        setNameInput("");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <Flex flexDir="column" py={4} rowGap={4}>
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
            disabled={!session || loading || nameInput.length === 0}
          />
        </InputRightElement>
        {/* <HStack p={2}>
          <Text>Private</Text>
          <Switch onChange={()=>toggleIsPrivate()} />
        </HStack> */}
      </FormControl>
    </Flex>
  );
};

export default CreateRoomBtn;
