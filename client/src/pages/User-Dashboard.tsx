import { Box } from "@chakra-ui/react";
import UserInfo from "../components/UserInfo";
import { useEffect, useState } from "react";
import { Auth } from "../utils/auth";
import { getUserInfo } from "../utils/api-requests";
export interface UserData {
  email: string,
}
const UserDashboard = () => {

  
  const [userData, setUserData] = useState({email: ""});
  useEffect(() => {
    const fetchData =  async ( ) => {
const token = Auth.isLoggedIn() ? Auth.getToken() : null //token is saved in local storage when user signs in
if(!token || Auth.isTokenExpired(token)) return Auth.logout //handling expired tokens
try {
  const res = await getUserInfo(token)
  const data : UserData = await res.json()
  setUserData(data)
} catch (error) {
  console.error(error)
}

    }
    fetchData()
  }, []);
  console.table(userData)
  return (
    <Box height={"100vh"}>
      <UserInfo userDataProp={userData}/>
    </Box>
  );
};

export default UserDashboard;
