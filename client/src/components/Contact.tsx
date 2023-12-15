"use client";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";
import Map from "./Map";

export default function Contact() {
  const position = {
    latitude: 33.89122772216797,
    longitude: 84.57917022705078,
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
        p={6}
        my={10}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Contact Us
        </Heading>
        <FormControl id="name" isRequired>
          <FormLabel>What is your name?</FormLabel>
          <Input
            placeholder="UserName"
            _placeholder={{ color: "gray.500" }}
            type="text"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <FormControl id="contact-text">
          <FormLabel>What can we assist you with?</FormLabel>
          <Textarea
            placeholder=""
            resize={"vertical"}
            _placeholder={{ color: "gray.500" }}
          />
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
          >
            Cancel
          </Button>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
          >
            Submit
          </Button>
        </Stack>
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
