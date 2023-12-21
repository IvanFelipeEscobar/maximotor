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
} from '@chakra-ui/react'

export default function NewUser() {

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} my={10}>
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
                <FormControl id="lastName">
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
                <Input type={'text'}/>
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