"use client";

import {
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  Text
} from "@chakra-ui/react";
import Map from "./Map";

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
      gap={"1rem"}
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
        p={3}
        my={10}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Contact Us
        </Heading>
        <Text>
          Hours of operation
        </Text>
      </Stack>
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={3}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Where to find us
        </Heading>

        <Map apiKey={apiKey!} shopLocation={position} />
      </Stack>
    </Flex>
  );
}
