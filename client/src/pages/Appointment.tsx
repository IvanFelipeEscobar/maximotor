import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Textarea,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";

import "react-datepicker/dist/react-datepicker.css";

export default function Appointment() {
  return (
    <Box position={"relative"} paddingTop={16}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Superior service{" "}
            <Text as={"span"} bg="red.500" bgClip="text">
              &
            </Text>{" "}
            Quality repairs
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text
              fontFamily={"heading"}
              color={useColorModeValue("black", "white")}
              fontSize={"3xl"}
            >
              schedule your appointment today
            </Text>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.100"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Thanks for choosing us,
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              at Maximotor, we treat every vehicle with the utmost care, as if
              it were our own. Our team is dedicated to providing honest and
              reliable service, ensuring that your car receives the attention it
              deserves. From routine maintenance to complex repairs, we strive
              to deliver excellence in every aspect of our work. Trust us to
              keep your vehicle running smoothly and safely on the road!
            </Text>
          </Stack>
          <Box
            as={"form"}
            action="https://formsubmit.co/ivnescbr1989@gmail.com"
            method="POST"
            mt={10}
          >
            <Stack spacing={4}>
              <Input
                type="text"
                placeholder="name"
                name="name"
                bg={"gray.100"}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                required
                type="email"
                placeholder="email"
                name="email"
                bg={"gray.100"}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="phone number"
                name="phone_number"
                bg={"gray.100"}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Textarea
                placeholder="what can we help you with?"
                bg={"gray.100"}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                name="repairs_requested"
                required
              />
              <HStack>
                <Input
                type="date"
                name="appointment_date"
                bg={"gray.100"}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                required/>
              </HStack>
            </Stack>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              variant={"solid"}
              colorScheme={"red"}
              bg={"red.400"}
              _hover={{ bg: "red.500" }}
              type="submit"
            >
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  );
}
