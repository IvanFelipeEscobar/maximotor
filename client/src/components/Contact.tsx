"use client";

import {
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  Text
} from "@chakra-ui/react";
import Map from "./Map";
import ContactButton from "./ContactButton";

export default function Contact() {
  const position = {
    latitude: 33.89122772216797,
    longitude: -84.57917022705078,
  };
  const apiKey = "AIzaSyDircAD-OcyRUXzkdq5DRpGGcbjMG1OwkQ";
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      id={"contact"}
      m={"2rem"}
      flexWrap={"wrap"}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        minHeight={'489px'}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={5}
        my={10}
        align={'center'}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Contact Us
        </Heading>
        <Text as={'b'}>
          Hours of Operation:
        </Text>
        <Text>
          Monday - Friday 
        </Text>
        <Text marginTop={'-4'}>8 am - 5 pm</Text>
        <Text as={'b'}>Phone Number:</Text>
        <Text> (770) 333 - 8280</Text>
        <Text as={'b'}>Email:</Text>
        <Text> Maximotor@bellsouth.net</Text>
        <Text as={'b'}>Adress:</Text>
        <Text> 2548 Austell Rd <br/>
        Marietta, GA 30008</Text>
        <Map apiKey={apiKey!} shopLocation={position} />

      <ContactButton/>
      </Stack>
    </Flex>
  );
}
