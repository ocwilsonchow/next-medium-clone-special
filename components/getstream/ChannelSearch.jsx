import React, { useState, useEffect } from 'react'
import { Flex, InputGroup, Input, InputLeftElement } from '@chakra-ui/react'
import { useChatContext } from 'stream-chat-react'

import { SearchIcon } from "@chakra-ui/icons"


const ChannelSearch = () => {
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')

  const getChannels = async (text) => {
      try {
        // TODO: fetch channels
      } catch (error) {
        setQuery('')
      }
  }

  const onSearch = (e) => {
    e.preventDefault()
    setLoading(true)
    setQuery(e.target.value)
    getChannels(e.target.value)
  }


  return (
    <Flex>
      <InputGroup>
      <InputLeftElement><SearchIcon /></InputLeftElement>
        <Input placeholder="Search" type="text" value={query} onChange={onSearch} />
      </InputGroup>
    </Flex>
  )
}

export default ChannelSearch
