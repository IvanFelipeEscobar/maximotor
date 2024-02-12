import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCalendarDays } from "react-icons/fa6";
import UserAccordion from "../components/UserAccordion";
const UserDashboard = () => {
 
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={['center']}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 16, md: 20 }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }} marginTop={{base:8, md: 16}} align={['center']}>
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
              User Dashboard
            </Text>
          </Heading>
          <Text color={'gray.200'} fontSize={'lg'} align={'center'}>  welcome to the user dashboard! from here you can edit your contact information, add/edit your saved vehicles and keep track of your repair history
       
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
              leftIcon={<FaCalendarDays/>}>
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
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}>
           
            <UserAccordion/>
          </Box>
        </Flex> 
      </Stack>
    </Container>
  );
};

export default UserDashboard;
