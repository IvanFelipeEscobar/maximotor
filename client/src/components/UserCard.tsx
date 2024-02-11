import {
  Box,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { UDProps } from "./UserInfo";

const UserCard = ({ userData }: UDProps) => {
  return (
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("gray.100", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Heading fontSize={"2xl"} color={'gray.800'} fontFamily={"body"}>
          {userData.userInformation?.firstName +
            " " +
            userData.userInformation?.lastName}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {userData.email}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {userData.userInformation?.phone}
        </Text>
      </Box>
  );
};

export default UserCard;
