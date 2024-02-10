import {
  Heading,
  Box,
  Center,
  Text,
  // Link,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { User } from "../utils/types";
import { PlusSquareIcon } from "@chakra-ui/icons";
interface UDProps {
  userDataProp: User
}
const UserInfo = ({userDataProp} : UDProps)  => {
  console.table(userDataProp.userInformation)
  return (
    <Center py={{ base: 20, md: 28 }}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("gray.100", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          Name
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {userDataProp.email}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >{userDataProp.userInformation?.phone}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {userDataProp.userInformation?.streetAddress}
        </Text>
        <Button
        variant={'solid'}
        colorScheme={'red'}
        bg={'red.400'}
        _hover={{bg:'red.500'}}
        size={'md'}
        mt={4}

        leftIcon={<PlusSquareIcon />}
        >add vehicle</Button>
      </Box>
    </Center>
  );
};

export default UserInfo;
