"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Button,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Auth } from "../utils/auth";
import { addUserInfo } from "../utils/api-requests";
import { CheckIcon } from "@chakra-ui/icons";

interface State {
  name: string;
  code: string;
}

export default function NewUser() {
  const [states, setStates] = useState<State[]>([]);
  const [selectedState, setSelectedState] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    state: "",
    zip: "",
  });
const submitForm = async (e: React.FormEvent) => {
e.preventDefault()
const token = Auth.isLoggedIn() ? Auth.getToken() : null//token is saved in local storage when user signs in
if(!token || Auth.isTokenExpired(token)) {
  Auth.logout()
  return
} //handling expired tokens
try {
  const res = await addUserInfo(formData, token)
  if (res.ok) window.location.assign('/user-dashboard')
} catch (error) {
  console.error('Error submitting form data:', error);
}
}
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(
          "https://api.census.gov/data/2018/acs/acs5?get=NAME&for=state:*"
        );
        const data = await response.json();

        const stateData: State[] = data.slice(1).map((stateInfo: string[]) => ({
          name: stateInfo[0],
          code: stateInfo[1],
        }));

        stateData.sort((a, b) => a.name.localeCompare(b.name));
        setStates(stateData);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack  mx={"auto"} maxW={"2xl"}  px={6} >
       
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={submitForm}>
            <Stack spacing={4} color={'black'}>
              <HStack>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl isRequired>
                <FormLabel>Phone number</FormLabel>
                <InputGroup>
                  <Input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="adress-1">
                <FormLabel>Street Address</FormLabel>
                <InputGroup>
                  <Input
                    type={"text"}
                    id="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Street Adress 2</FormLabel>
                <InputGroup>
                  <Input
                    type={"text"}
                    id="streetAddress2"
                    value={formData.streetAddress2}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <HStack>
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <InputGroup>
                    <Input type={"text"} id="city" value={formData.city} onChange={handleChange} />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>State</FormLabel>
                  <InputGroup>
                    <Select
                      placeholder="choose state..."
                      id="state"
                      value={selectedState}
                      onChange={(e) => {
                        setSelectedState(e.target.value);
                        setFormData({
                          ...formData,
                          state: e.target.value
                        })
                      }}
                    >
                      {states.map((state) => (
                        <option key={state.code} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </Select>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Zip Code</FormLabel>
                  <InputGroup>
                    <Input type={"text"} id="zip" value={formData.zip} onChange={handleChange} />
                  </InputGroup>
                </FormControl>
              </HStack>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  leftIcon={<CheckIcon/>}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
