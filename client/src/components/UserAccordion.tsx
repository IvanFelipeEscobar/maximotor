'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

import UserInfo from "../components/UserInfo";
import { useEffect, useState } from "react";
import { Auth } from "../utils/auth";
import { getUserInfo } from "../utils/api-requests";
import { User } from "../utils/types";
import VehicleCard from './VehicleCard';
// import VehiclePicker from './VehiclePicker';

export default function UserAccordion() {
    const [userData, setUserData] = useState<User | null>(null);
    useEffect(() => {
      const fetchData = async () => {
        const token = Auth.isLoggedIn() ? Auth.getToken() : null; //token is saved in local storage when user signs in
        if (!token || Auth.isTokenExpired(token)) {
          Auth.logout();
          return;
        } //handling expired tokens
        try {
          const res = await getUserInfo(token);
          const data: User = await res.json();
          setUserData(data as User); 
          console.log(data)
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);
  return (
    <Flex
    py={4}
      align={'center'}
      justify={'center'}>
      <Container>
        <Accordion color={useColorModeValue('gray.100', 'gray.900')} allowMultiple width="100%" maxW="lg" rounded="lg">
{/* USER   */}
          <AccordionItem>
            <AccordionButton
            fontWeight={'bold'}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Contact info</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
      {userData && <UserInfo userData={userData}/>}
            </AccordionPanel>
          </AccordionItem>
 {/* VEHICLES  */}
          <AccordionItem>
            <AccordionButton
            fontWeight={'bold'}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Vehicles</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>

              <VehicleCard/>
              {/* <VehiclePicker/> */}
            </AccordionPanel>
          </AccordionItem>
  {/* REPAIRS  */}
          <AccordionItem>
            <AccordionButton
            fontWeight={'bold'}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Repair History</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.400">
              add repair history here
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}