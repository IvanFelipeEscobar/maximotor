import { Box } from "@chakra-ui/react";
import UserInfo from "../components/UserInfo";
import { useEffect, useState } from "react";
import { Auth } from "../utils/auth";
import { getUserInfo } from "../utils/api-requests";
import { User } from "../utils/types"; 
const UserDashboard = () => {

  
  const [userData, setUserData] = useState<User | null>(null);
  useEffect(() => {
    const fetchData =  async ( ) => {
const token = Auth.isLoggedIn() ? Auth.getToken() : null //token is saved in local storage when user signs in
if(!token || Auth.isTokenExpired(token)) return Auth.logout //handling expired tokens
try {
  const res = await getUserInfo(token)
  const data : User = await res.json()
  setUserData(data as User)
} catch (error) {
  console.error(error)
}

    }
    fetchData()
  }, []);
  return (
    <Box height={"100%"}>
      {userData && <UserInfo userDataProp={userData}/>}
    </Box>
  );
};

export default UserDashboard;
