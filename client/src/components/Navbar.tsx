"use client";

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  Text,
  Stack,
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
        py={[5, 1]}
        px={[2, 5]}
        pos={"fixed"}
        top={'0'}
        w={"full"}
        zIndex={99}
      >
        <Flex h={16} alignItems={"center"} justifyContent={['space-between']} >
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


          <Flex alignItems={'center'}>

          <Stack direction={'row'} spacing={2}>
            <Menu>
              <MenuButton
                as={Button}
                variant={"solid"}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
                size={"sm"}
                leftIcon={<HiOutlineUserCircle />}
                display={['none', 'inherit']}
              >
                {Auth.isLoggedIn() ? "Log out" : "Sign up/Login"}
              </MenuButton>
              <MenuButton
                as={Button}
                variant={"solid"}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
                size={"sm"}
                display={['inherit','none']}
              ><HiOutlineUserCircle /></MenuButton>
              <MenuList>
                {Auth.isLoggedIn() ? (
                  <MenuItem as={'button'} onClick={() => Auth.logout()}>Logout
                  </MenuItem>
                ) : (
                  <>
                      <MenuItem as={'a'} href="/login">Login</MenuItem>
                      <MenuItem as={'a'} href="/signup">Sign up</MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>

            <Button
            bg={useColorModeValue( "gray.400", "inherit")}
              aria-label="Toggle Color Mode"
              size={'sm'}
              onClick={toggleColorMode}
              _focus={{ boxShadow: "none" }}
              w="fit-content"
            >
              {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
