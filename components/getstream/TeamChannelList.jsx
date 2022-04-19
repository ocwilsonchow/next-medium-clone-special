import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react'



const TeamChannelList = ({children, error = false, loading, type }) => {
  if(error) {
    return type === 'team' ? (
      <Box p={2}>
        <Text>Connection error, please wait and try again</Text>
      </Box>
    ) : null;
  }

  if(loading) {
    return (
       <Box p={2}>
        <Text>{type === 'team' ? 'Channels' : 'Messages'  } loading...</Text>
      </Box>
    )
  }
  return (
    <Box p={2}>
      <Text>{type === 'team' ? 'Channels' : 'Direct Messages'  }</Text>
      <Button>Add Chanel</Button>
      {children}
    </Box>
  )
}

export default TeamChannelList
