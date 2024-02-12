"use client";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Text,
  Link,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { signIn } from "../utils/api-requests";
import { Auth } from "../utils/auth";

export default function Login() {
  const [formSubmit, setFormSubmit] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: ``,
    password: ``,
  });
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmit(true)
    if (!userData.email || !userData.password) {
      console.error("Email and password are required.");
      return;
    }
    try {
      const response = await signIn(userData);
      if (!response.ok)
        throw new Error("something went wrong in the sign up process");
      const newUser = await response.json();
      Auth.login(newUser.token)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} mt={8} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} color={"aliceblue"}>
            Sign in to your account
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={formSubmit && userData.email === ""}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={handleInput}
                value={userData.email}
              />
              <FormErrorMessage>Please enter a valid email</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={formSubmit && userData.password === ""}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleInput}
                  value={userData.password}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>please enter valid passsword</FormErrorMessage>
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={"center"}>
                First time here?{" "}
                <Link color={"blue.400"} href={"/signup"}>
                  create an account here!
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
