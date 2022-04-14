import { Fade, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const PageContactWilson = () => {
  return (
    <Fade in>
      <Flex flexDir="column" py={6} maxW="800px" >
      <Text fontWeight="bold" fontSize="4xl">
        Leave a message to Wilson
      </Text>

    </Flex>
    </Fade>
  )
}

export default PageContactWilson
