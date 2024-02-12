"use client";

import {
  Box,
  Flex,
  HStack,
  Button,
  useColorModeValue,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { HiOutlineUserCircle } from "react-icons/hi2";
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
        py={[8, 1]}
        px={[2, 5]}
        pos={"fixed"}
        w={"full"}
        zIndex={99}
        boxSizing={'border-box'}
      >
        <Flex h={16} alignItems={"center"} flexWrap={'wrap'} justifyContent={["center", "space-between"]} gap={[4]} >
          {/* <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          <HStack alignItems={"center"}>
            <Box>
              <Link href={"/"}>
                <Text
                  as={"b"}
                  fontSize={{ base: "xl", md: "2xl" }}
                  letterSpacing={[2, 7]}
                  fontWeight={'extrabold'}
                  color={'red.500'}
                  bg={useColorModeValue('rgb(41, 63, 137)', 'rgba(71,90,127,0.6)')}
                  p={2}
                  rounded={'lg'}
                  shadow={'md'}>
                  Maximotor
                </Text>
              </Link>
            </Box>
            {/* <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "flex", md: "flex" }}
            >
              {Links.map((link) => (
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
              ))}
            </HStack> */}
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
                leftIcon={<HiOutlineUserCircle />}
                visibility={['hidden', 'inherit']}
              >
                {Auth.isLoggedIn() ? "Log out" : "Sign up / Login"}
              </MenuButton>
              <MenuButton
                as={Button}
                variant={"solid"}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
                size={"sm"}
                mr={[4, 0]}
                visibility={['inherit','hidden']}
              ><HiOutlineUserCircle /></MenuButton>
              <MenuList>
                {Auth.isLoggedIn() ? (
                  <MenuItem>
                    <Button onClick={() => Auth.logout()}>Logout</Button>
                  </MenuItem>
                ) : (
                  <>
                    <Link href={"/login"}>
                      <MenuItem>Login</MenuItem>
                    </Link>
                    <Link href={"/signup"}>
                      <MenuItem>Sign up</MenuItem>
                    </Link>
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
