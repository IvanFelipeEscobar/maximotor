import {
  Center,
} from "@chakra-ui/react";
import { User } from "../utils/types";
import NewUser from "./NewUser";
import UserCard from "./UserCard";
export interface UDProps {
  userData: User
}
const UserInfo = ({userData} : UDProps)  => {
  console.table(userData.userInformation)
  return (
    <Center py={{ base: 20, md: 28 }}>
     { userData.userInformation ? <UserCard userData={userData}/> : <NewUser/> }
    </Center>
  );
};

export default UserInfo;
