'use client'
import cars from '/erik-mclean-ioEjMWHn2nY-unsplash.jpg'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image
} from '@chakra-ui/react'
import { FaCalendarDays } from "react-icons/fa6";

export default function Hero() {
  return (
    <Container maxW={'7xl'} id={"hero"}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 28, md: 20 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }} marginTop={{base:8, md: 16}}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
            color={'aliceblue'}
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
              Vehicle Repair & Maintenance
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
                made easy!
            </Text>
          </Heading>
          <Text color={'gray.400'}>
              Vehicles can be complicated, let us worry about that part. 
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}
              leftIcon={<FaCalendarDays/>}
              as={'a'}
              href='/appointments'>
              Schedule an Appointment 
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
        
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
           
            <Image
              alt={'two cars'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={cars}
            />
          </Box>
        </Flex> 
      </Stack>
    </Container>
  )
}

