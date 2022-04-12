import { Alert, Code, HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Topbar = () => {
  return (
    <HStack borderBottomWidth="1px" w="full" p={4}>
      <Code bg="none" fontWeight="black" fontSize="xl">wilson_dev</Code>

    </HStack>
  )
}

export default Topbar
