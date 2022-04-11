import { Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Flex>
      <Text fontWeight="bold" fontSize="4xl">Home Page</Text>
    </Flex>
  )
}
