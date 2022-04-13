import { useContext, useState } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { useChat } from '../../context/ChatContext'

const PublicChat = () => {
const { publicMessages } = useChat()

console.log(publicMessages)

  return (
    <Flex flexDir="column" py={4}>
        <Text>Public Chat</Text>
    </Flex>
  )
}

export default PublicChat
