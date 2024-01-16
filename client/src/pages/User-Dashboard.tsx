import { Box } from "@chakra-ui/react";
import UserInfo from "../components/UserInfo";
import { useEffect, useState } from "react";
import { Auth } from "../utils/auth";
import { getUserInfo } from "../utils/api-requests";

const UserDashboard = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    // const fetchData =  async ( ) => {
const token = Auth.isLoggedIn() ? Auth.getToken() : null //token is saved in local storage when user signs in
if(!token || Auth.isTokenExpired(token)) return Auth.logout //handling expired tokens
try {
  getUserInfo(token)

} catch (error) {
  console.error(error)
}

    // }
    // fetchData()
  }, []);
  return (
    <Box height={"100vh"}>
      <UserInfo userData={userData}/>
    </Box>
  );
};

export default UserDashboard;
