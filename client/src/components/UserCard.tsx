import {
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
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
  // Address fields
  const address1 = userData.userInformation?.streetAddress || "";
  const address2 = userData.userInformation?.streetAddress2 || "";
  const city = userData.userInformation?.city || "";
  const state = userData.userInformation?.state || "";
  const zip = userData.userInformation?.zip || "";
  return (
    <Card align="center" w={'xl'}>
      <CardBody>
    
        <VStack>
        <Heading size="md">{fullName}</Heading>

          <Text>{userData.email}</Text>
          <Text>{userData.userInformation?.phone}</Text>
          <Text>
            {address1}, {address2}
          </Text>
          <Text>
            {city}, {state} {zip}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default UserCard;
