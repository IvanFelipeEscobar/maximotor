import {
  Heading,
  Box,
  Center,
  Text,
  // Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { User } from "../utils/types";
interface UDProps {
  userDataProp: User
}
const UserInfo = ({userDataProp} : UDProps)  => {
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
        >800 555 1234
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          1234 street name, city, STATE 30303
        </Text>
      </Box>
    </Center>
  );
};

export default UserInfo;
