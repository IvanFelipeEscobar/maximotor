import { Card, CardBody, Heading, Text, VStack } from "@chakra-ui/react";
import { UDProps } from "./UserInfo";

const UserCard = ({ userData }: UDProps) => {
  const formatWord = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  const formatFullName = (firstName: string, lastName: string) =>
    formatWord(firstName) + " " + formatWord(lastName);

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
    <Card align="center" w={"xl"}>
      <CardBody>
        <VStack>
          <Heading size="md">{fullName}</Heading>

          <Text>{formatWord(userData.email)}</Text>
          <Text>{userData.userInformation?.phone}</Text>
          <Text>
            {address1}, {address2}
          </Text>
          <Text>
            {formatWord(city)}, {formatWord(state)} {zip}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default UserCard;
