import React from 'react'
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";

export default function About() {
  return (
    <Box py={12} >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flex={{ base: "0", md: "1" }} order={{ base: 2, md: 1 }}>
          <Image
            src="/your-image.jpg" // Replace with your image URL
            alt="Automotive Repair Shop"
            rounded="lg"
          />
        </Box>
        <Box flex={{ base: "1", md: "1" }} pr={{ base: 0, md: 12 }} order={{ base: 1, md: 2 }}>
          <Heading as="h2" fontSize="3xl" color={'aliceblue'} mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg" color={'gray.400'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            eget justo nec urna feugiat vehicula. Aliquam erat volutpat.
            Suspendisse potenti. Sed auctor laoreet libero, nec porttitor dolor
            vulputate ac.
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
