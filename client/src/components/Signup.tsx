"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({username:``, email: ``, phone: ``, password:``})
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
         const { name, value } = e.target
         setUserData({...userData, [name]: value})
     }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} color={"aliceblue"}>
            Let's create a new account
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl
             id="username" 
             isRequired>
              <FormLabel>User Name</FormLabel>
              <Input type="text" name='username'
                    onChange={handleInput}
                    value={userData.username}/>
            </FormControl>

            <FormControl id="phone"
             isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input type="text" name='phone'
                    onChange={handleInput}
                    value={userData.phone}/>
            </FormControl>

            <FormControl id="email" 
             isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email'
                    onChange={handleInput}
                    value={userData.email}/>
            </FormControl>

            <FormControl id="password"
            isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"}  name='password'
                    onChange={handleInput}
                    value={userData.password}/>
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
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already have an account? <Link color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      
    </Flex>
  );
}
