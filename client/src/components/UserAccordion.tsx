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
              {/* <Text color="gray.400">
                Chakra UI is a simple and modular component library that gives developers
                the building blocks they need to create web applications.
              </Text> */}
      {userData && <UserInfo userData={userData}/>}
            </AccordionPanel>
          </AccordionItem>
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
              <Text color="gray.400">
                Chakra UI offers a variety of advantages including ease of use,
                accessibility, and customization options. It also provides a comprehensive
                set of UI components and is fully compatible with React.
              </Text>
            </AccordionPanel>
          </AccordionItem>
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
                To get started with Chakra UI, you can install it via npm or yarn, and
                then import the components you need in your project. The Chakra UI
                documentation is also a great resource for getting started and learning
                more about the library.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}