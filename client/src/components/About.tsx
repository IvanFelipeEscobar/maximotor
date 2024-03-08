"use client";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Container,
  Stack,
} from "@chakra-ui/react";
import belt from "/chad-kirchoff-xe-e69j6-Ds-unsplash.jpg";
export default function About() {
  return (
    <Container maxW={"7xl"} id="about">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 4, md: 8 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack
          flex={1}
          spacing={{ base: 5, md: 10 }}
          order={{ base: 0, md: 1 }}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              color={"aliceblue"}
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              About us
            </Text>
          </Heading>
          <Text color={"gray.400"} fontSize={"lg"}>
            Welcome to our family-operated automotive repair shop, where
            community is at the heart of everything we do. With a passion for
            cars and a commitment to excellence, we provide reliable and
            trustworthy service to keep your vehicle running smoothly. Whether
            it's routine maintenance or complex repairs, our experienced team is
            dedicated to delivering top-notch service with a personal touch. At
            our shop, you're not just a customer – you're part of our automotive
            family. Join us today and experience the difference of a
            community-oriented repair shop where your satisfaction is our
            priority.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
            display={['none', null, 'inherit']}
          >
            <Image
              alt={"serpentine belt"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={belt}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
