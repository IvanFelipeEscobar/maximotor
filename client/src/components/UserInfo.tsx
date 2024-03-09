import {
  Center,
} from "@chakra-ui/react";
import NewUser from "./NewUser";
import UserCard from "./UserCard";
import { UDProps } from "../utils/types";
const UserInfo = ({userData} : UDProps)  => {
  return (
    <Center py={{ base: 2, md: 8 }}>
     { userData.userInformation ? <UserCard userData={userData}/> : <NewUser/> }
    </Center>
  );
};

export default UserInfo;
