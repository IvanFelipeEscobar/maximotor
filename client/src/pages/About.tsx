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
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }} order={{ base: 2, md: 1 }}>
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
          <Text color={"gray.400"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            justo nec urna feugiat vehicula. Aliquam erat volutpat. Suspendisse
            potenti. Sed auctor laoreet libero, nec porttitor dolor vulputate
            ac.
          </Text>
          <Stack
          order={{ base: 1, md: 2 }}
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          ></Stack>
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
