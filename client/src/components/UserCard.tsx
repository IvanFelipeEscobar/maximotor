import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { UDProps } from "./UserInfo";

const UserCard = ({ userData }: UDProps) => {
  return (
    <div>
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
        <Button
          variant={"solid"}
          colorScheme={"red"}
          bg={"red.400"}
          _hover={{ bg: "red.500" }}
          size={"md"}
          mt={4}
          leftIcon={<PlusSquareIcon />}
        >
          add vehicle
        </Button>
      </Box>
    </div>
  );
};

export default UserCard;
