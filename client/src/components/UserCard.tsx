import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { UDProps } from "./UserInfo";

const UserCard = ({ userData }: UDProps) => {
  function formatFullName(firstName: string, lastName: string): string {
    // Capitalize the first character of the first name and make the rest lowercase
    const formattedFirstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

    // Capitalize the first character of the last name and make the rest lowercase
    const formattedLastName =
      lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    // Concatenate the formatted first name and last name with a space in between

    return `${formattedFirstName} ${formattedLastName}`;
  }
  const firstName = userData.userInformation?.firstName || "";
  const lastName = userData.userInformation?.lastName || "";
  const fullName = formatFullName(firstName, lastName);
  return (
    <Card align="center">
      <CardHeader>
        <Heading size="md"> {fullName}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{userData.email}</Text>
        <Text>{userData.userInformation?.phone}</Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue">View here</Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
