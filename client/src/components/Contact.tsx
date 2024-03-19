"use client";

import {
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  Text,
  Button
} from "@chakra-ui/react";
import Map from "./Map";

import {
  MdPhone,
  MdEmail,
  MdLocationOn,
} from 'react-icons/md'
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
         <Button
                        size="md"
                        height="48px"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        (770) 333 - 8280
                      </Button>
        <Text as={'b'}>Email:</Text>
        <Button
                        size="md"
                        height="48px"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        maximotor@bellsouth.net
                      </Button>
        <Text as={'b'}>Address:</Text>
        <Button
                        size="md" height={'64px'}

                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        <a href="https://www.google.com/maps/place/2548+Austell+Rd+SW,+Marietta,+GA+30008/@33.8912726,-84.5817381,17z/data=!3m1!4b1!4m6!3m5!1s0x88f517b0c5eb9eef:0xe5467f0ca5bb4138!8m2!3d33.8912726!4d-84.5791632!16s%2Fg%2F11bw4cysxs?entry=ttu" target="_blank">2548 Austell rd <br/>
                        Marietta, GA 30008</a>

                      </Button>
        <Map apiKey={apiKey!} shopLocation={position} />

      <ContactButton/>
      </Stack>
    </Flex>
  );
}
