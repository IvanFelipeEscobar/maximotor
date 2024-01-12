'use client'

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
  Heading,
  Text,
  useColorModeValue,
  Select,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

interface State {
  name: string;
  code: string;
}

export default function NewUser() {
  const [states, setStates] = useState<State[]>([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch('https://api.census.gov/data/2018/acs/acs5?get=NAME&for=state:*');
        const data = await response.json();

        const stateData : State[]= data.slice(1).map((stateInfo: string[]) => ({
          name: stateInfo[0],
          code: stateInfo[1],
        }));
        
        stateData.sort((a, b) => a.name.localeCompare(b.name))
        setStates(stateData);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchStates();
  }, []);
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'2xl'} py={12} px={6} my={10}>
        <Stack align={'center'}>
          <Heading lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
           >
            <Text as={'span'}  color={'aliceblue'}>Welcome to our online family! </Text>
            </Heading>
          <Text as={'span'} color={'red.400'} fontSize={'xl'} fontWeight={600}>
            to beter serve you, please provide some basic contact information ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone number</FormLabel>
              <InputGroup>
                <Input type={'text'}/>
              </InputGroup>
            </FormControl>
            <FormControl id="adress-1">
              <FormLabel>Street Address</FormLabel>
              <InputGroup>
                <Input type={'text'}/>
              </InputGroup>
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Street Adress 2</FormLabel>
              <InputGroup>
                <Input type={'text'}/>
              </InputGroup>
            </FormControl>
            <HStack>
            <FormControl id="city">
              <FormLabel>City</FormLabel>
              <InputGroup>
                <Input type={'text'}/>
              </InputGroup>
            </FormControl>
            <FormControl id="state">
              <FormLabel>State</FormLabel>
              <InputGroup>
                {/* <Input type={'text'}/> */}
                <Select placeholder='choose state...'
                name="state"
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)} >
 {states.map((state) => (
          <option key={state.code} value={state.code}>
            {state.name}
          </option>
        ))}
                </Select>
              </InputGroup>
            </FormControl>
            <FormControl id="zip">
              <FormLabel>Zip Code</FormLabel>
              <InputGroup>
                <Input type={'text'}/>
              </InputGroup>
            </FormControl>
            </HStack>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}