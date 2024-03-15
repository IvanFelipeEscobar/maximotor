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
  MenuDivider,
} from "@chakra-ui/react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Auth } from "../utils/auth";

import { BsSun, BsMoonStarsFill } from "react-icons/bs";

const navLinks = [
  { a: "About us", b: "#about" },
  { a: "Contact us", b: "#contact" },
  { a: "Services", b: "#services" },
];
const isHomePage = window.location.pathname === "/";
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={[2, 5]}
        pos={"fixed"}
        top={"0"}
        w={"full"}
        zIndex={99}
      >
        <Flex h={16} alignItems={"center"} justifyContent={["space-between"]}>
          <Box>
            <Link href={"/"}>
              <Text
                as={"b"}
                fontSize={{ base: "xl", md: "2xl" }}
                letterSpacing={[2, 7]}
                fontWeight={"extrabold"}
                color={"red.500"}
                bg={useColorModeValue(
                  "rgb(41, 63, 137)",
                  "rgba(71,90,127,0.6)"
                )}
                p={2}
                rounded={"lg"}
                shadow={"md"}
              >
                Maximotor
              </Text>
            </Link>
          </Box>

          <Flex alignItems={"center"}>
            <Button
              marginLeft={[28, 14]}
              bg={useColorModeValue("gray.400", "inherit")}
              aria-label="Toggle Color Mode"
              size={"sm"}
              onClick={toggleColorMode}
              _focus={{ boxShadow: "none" }}
              w="fit-content"
            >
              {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
            <Menu>
              <MenuButton
                aria-label="sign in/log out"
                as={Button}
                variant={"solid"}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
                size={"sm"}
                visibility={["inherit", "collapse"]}
                marginLeft={3}
              >
                <HiOutlineUserCircle />
              </MenuButton>
              <MenuButton
                as={Button}
                variant={"solid"}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
                size={"sm"}
                leftIcon={<HiOutlineUserCircle />}
                visibility={["collapse", "inherit"]}
              >
                {Auth.isLoggedIn() ? "Menu" : "Sign up/Login"}
              </MenuButton>
              <MenuList alignItems={"center"}>
                {isHomePage &&
                  navLinks.map((link) => (
                    <MenuItem as={"a"} href={link.b} key={link.a}>
                      {link.a}
                    </MenuItem>
                  ))}
                <MenuDivider />
                <MenuItem as={"a"} href="/appointments">
                  Make an appointment
                </MenuItem>
                {Auth.isLoggedIn() && (
                  <MenuItem as={"a"} href="/user-dashboard">
                    User dashboard
                  </MenuItem>
                )}
                <MenuDivider />

                {Auth.isLoggedIn() ? (
                  <MenuItem as={"button"} onClick={() => Auth.logout()}>
                    Logout
                  </MenuItem>
                ) : (
                  <>
                    <MenuItem as={"a"} href="/login">
                      Login
                    </MenuItem>
                    <MenuItem as={"a"} href="/signup">
                      Sign up
                    </MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
