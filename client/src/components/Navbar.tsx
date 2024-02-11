"use client";

import {
  Box,
  Flex,
  HStack,
  // IconButton,
  Button,
  // useDisclosure,
  useColorModeValue,
  // Stack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import {
  //  HamburgerIcon,
  // CloseIcon,
  AddIcon,
} from "@chakra-ui/icons";
import { Auth } from "../utils/auth";

import { BsSun, BsMoonStarsFill } from "react-icons/bs";

// const Links = [
//   {a: "About us", b: "/#about"},
//   {a:"Contact us", b:'#contact'},
//   {a:"Services", b:'#services'}
// ]

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={3}
        pos={"fixed"}
        w={"full"}
        zIndex={99}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          <HStack spacing={8} alignItems={"center"} >
            <Box>
              <Link href={"/"}><Text as={'b'} fontSize={'2xl'} letterSpacing={4}>Maximotor</Text></Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {/* {Links.map((link) => (
                  <Link   as="a"
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: 
                    // useColorModeValue(
                      "gray.200", 
                      // "gray.700"),
                  }}key={link.a} href={link.b}>{link.a}</Link>
                  // </NavLink>
              ))} */}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                variant={"solid"}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
                size={"sm"}
                mr={4}
                leftIcon={<AddIcon />}
              >
                {Auth.isLoggedIn() ? "Log out" : "Sign up / Login"}
              </MenuButton>
              <MenuList>
                {Auth.isLoggedIn() ? (
                  <MenuItem>
                    <Button onClick={() => Auth.logout()}>Logout</Button>
                  </MenuItem>
                ) : (
                  <>
                    <Link href={"/login"}><MenuItem>
                      Login
                    </MenuItem></Link>
                    <Link href={"/signup"}><MenuItem>
                     Sign up
                    </MenuItem></Link>
                  </>
                )}
              </MenuList>
            </Menu>

            <Button
              aria-label="Toggle Color Mode"
              onClick={toggleColorMode}
              _focus={{ boxShadow: "none" }}
              w="fit-content"
            >
              {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
          </Flex>
        </Flex>

        {/* {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                  <Link key={link.a} href={link.b}>{link.a}</Link>
              ))}
            </Stack>
          </Box>
        ) } */}
      </Box>
    </>
  );
}
