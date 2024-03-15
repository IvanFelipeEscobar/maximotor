import {
  Button,
  Divider,
  HStack,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Auth } from "../utils/auth";
import { getSingleVehicle } from "../utils/api-requests";
import { Vehicle } from "../utils/types";

import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaWrench, FaTrash, FaEdit } from "react-icons/fa";
import RepairsCard from "../components/RepairsCard";
const SingleVehicleCard = () => {
  const [carData, setCarData] = useState<Vehicle | null>(null);
  const { vehicleId } = useParams();

  useEffect(() => {
    const getCar = async () => {
      if (!vehicleId) return;
      const token = Auth.isLoggedIn() ? Auth.getToken() : null; //token is saved in local storage when user signs in
      if (!token || Auth.isTokenExpired(token)) {
        Auth.logout();
        return;
      }
      try {
        const res = await getSingleVehicle(vehicleId, token);
        const car = await res.json();
        setCarData(car);
      } catch (error) {
        console.error(error);
      }
    };
    getCar();
  }, [vehicleId]);
  console.log(carData?.repairs);
  return (
    <VStack
      w={"full"}
      justify={"center"}
      px={useBreakpointValue({ base: 4, md: 8 })}
      py={20}
      bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
    >
      <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
        <HStack>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            {carData?.year + " " + carData?.make + " " + carData?.model}
          </Text>
          <Button rounded={"full"} size={"sm"} marginLeft={12}>
            <FaEdit />
          </Button>
        </HStack>
        <Stack direction={"row"}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{ rounded: "full", bg: "blue.500" }}
            leftIcon={<HiOutlineUserCircle />}
          >
            User dashboard
          </Button>
          <Button
            leftIcon={<FaWrench />}
            bg={"whiteAlpha.300"}
            _hover={{
              rounded: "full",
              bg: "whiteAlpha.500",
            }}
            display={["none", "inherit"]}
          >
            Add a repair
          </Button>
          <Button
            bg={"whiteAlpha.300"}
            _hover={{
              rounded: "full",
              bg: "whiteAlpha.500",
            }}
            display={["inherit", "none"]}
          >
            <FaWrench />
          </Button>

          <Button
            leftIcon={<FaTrash />}
            colorScheme={"red"}
            bg={"red.400"}
            _hover={{ rounded: "full", bg: "red.500" }}
            display={["none", "none", "inherit"]}
          >
            Delete Vehicle
          </Button>
          <Button
            colorScheme={"red"}
            bg={"red.400"}
            _hover={{ rounded: "full", bg: "red.500" }}
            display={["inherit", "inherit", "none"]}
          >
            <FaTrash />
          </Button>
        </Stack>
      </Stack>
      <Divider m={2} />
      <RepairsCard />
    </VStack>
  );
};

export default SingleVehicleCard;
