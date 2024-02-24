import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  VStack,
  Menu,
  MenuButton,
  Button,
  MenuList,
} from "@chakra-ui/react";
import { UDProps } from "./UserInfo";
import { FaCarSide } from "react-icons/fa";

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
      <CardHeader>
        <Heading size="md">{fullName}</Heading>
      </CardHeader>
      <CardBody>
      <Menu>
              <MenuButton
                as={Button}
                variant={"solid"}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
                size={"sm"}
                // leftIcon={<HiOutlineUserCircle />}
                visibility={['hidden', 'inherit']}
              >
                Show user info
              </MenuButton>
              <MenuButton
                as={Button}
                variant={"solid"}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
                size={"sm"}
                visibility={['inherit','hidden']}
              ><FaCarSide /></MenuButton>
              <MenuList>

              </MenuList>
            </Menu>
        <VStack>
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
