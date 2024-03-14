import { Box, Heading, Text, Button } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6} bg={"rgb(41, 63, 137)"} h={'100vh'} m={'auto'}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, red.400, red.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2} color={"aliceblue"}>
        Page Not Found
      </Text>
      <Text color={"gray.300"} mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>

      <Button
        colorScheme="red"
        bgGradient="linear(to-r, red.400, red.500, red.600)"
        color="white"
        variant="solid"
        onClick={() => window.location.assign("/")}
      >
        Go to Home
      </Button>
    </Box>
  );
}
