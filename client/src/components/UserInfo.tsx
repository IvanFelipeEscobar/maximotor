import {
  Heading,
  Box,
  Center,
  Text,
  // Link,
  useColorModeValue,
} from '@chakra-ui/react'
const UserInfo = () => {
  return (
    <Center py={{base: 20, md: 28}}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('gray.100', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Lindsey James
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @lindsey_jam3s
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Actress, musician, songwriter and artist. PM for work inquires or{' '}
          <Text color={'blue.400'}>#tag</Text> me in your posts
        </Text>

       
      </Box>
    </Center>
  )
}

export default UserInfo