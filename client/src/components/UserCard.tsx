import {
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { UDProps } from "../utils/types";
import { FaPhoneAlt, FaEdit } from "react-icons/fa";
import { MdEmail, MdDelete } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const UserCard = ({ userData }: UDProps) => {
  const formatWord = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  const formatFullName = (firstName: string, lastName: string) =>
    formatWord(firstName) + " " + formatWord(lastName);

  const firstName = userData.userInformation?.firstName || "";
  const lastName = userData.userInformation?.lastName || "";
  const fullName = formatFullName(firstName, lastName);
  // Address fields
  const pNumber = userData.userInformation?.phone || "";
  const formatPhone = (phoneNumber: string) =>
    `(${phoneNumber.slice(0, 3)}) - ${phoneNumber.slice(
      3,
      6
    )} ${phoneNumber.slice(6)}`;
  const formattedPhone = formatPhone(pNumber);
  const address1 = userData.userInformation?.streetAddress || "";
  const address2 = userData.userInformation?.streetAddress2 || "";
  const city = userData.userInformation?.city || "";
  const state = userData.userInformation?.state || "";
  const zip = userData.userInformation?.zip || "";
  return (
    <Card align="center" w={"xl"}>
      <CardBody>
        <VStack>
          <Heading size="md">{fullName}</Heading>
          <HStack>
            <MdEmail />
            <Text>{formatWord(userData.email)}</Text>
          </HStack>
          <HStack>
            <FaPhoneAlt />
            <Text>{formattedPhone}</Text>
          </HStack>
          <HStack>
            <FaLocationDot />
            <Text>
              {address1}, {address2}
            </Text>
          </HStack>
          <Text>
            {formatWord(city)}, {formatWord(state)} {zip}
          </Text>
        </VStack>
      </CardBody>
      <CardFooter>
        <Button
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          leftIcon={<FaEdit />}
          marginRight={2}
        >
          Edit Info
        </Button>
        <Button
          leftIcon={<MdDelete />}
          colorScheme={"red"}
          bg={"red.400"}
          _hover={{ bg: "red.500" }}
        >
          Delete{" "}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
