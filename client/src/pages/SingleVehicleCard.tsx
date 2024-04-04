import {
  Button,
  Divider,
  Flex,
  HStack,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Auth } from "../utils/auth";
import { deleteVehicle, getSingleVehicle } from "../utils/api-requests";
import { Vehicle } from "../utils/types";

import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaWrench, FaTrash } from "react-icons/fa";
import RepairsCard from "../components/RepairsCard";
import RepairForm from "../components/RepairForm";
const SingleVehicleCard = () => {
  const [carData, setCarData] = useState<Vehicle | null>(null);
  const { vehicleId } = useParams();
  const [delVeh, setDelVeh] = useState("");
  const handleDelete = async (vehicleID: string) => {
    const token = Auth.isLoggedIn() ? Auth.getToken() : null;
    if (!token || Auth.isTokenExpired(token)) {
      Auth.logout();
      return;
    }
    try {
      const res =await deleteVehicle(vehicleID, token);
      if(res.ok) window.location.assign("/user-dashboard");
    } catch (error) {
      console.error(error);
    }
  };

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

          <Popover>
            <PopoverTrigger>
              <Button
                size={"sm"}
                marginLeft={8}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ rounded: "full", bg: "red.500" }}
              >
                <FaTrash />
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader color={"red"} textAlign={"center"}>
                  to delete vehicle please input "
                  {carData?.year + " " + carData?.make + " " + carData?.model}"
                </PopoverHeader>
                <PopoverBody>
                  <Input
                    type="text"
                    name="delVeh"
                    onChange={(e) => {
                      setDelVeh(e.target.value);
                    }}
                    value={delVeh}
                  />
                </PopoverBody>
                {carData && (
                  <PopoverFooter>
                    {delVeh ===
                      `${carData?.year} ${carData?.make} ${carData?.model}` && (
                      <Button
                        size={"xs"}
                        marginTop={2}
                        marginLeft={2}
                        colorScheme={"red"}
                        bg={"red.400"}
                        _hover={{ rounded: "full", bg: "red.500" }}
                        leftIcon={<FaTrash />}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent the click from propagating to the row
                          handleDelete(carData?._id.toString());
                        }}
                      >
                        Delete Vehicle
                      </Button>
                    )}
                  </PopoverFooter>
                )}
              </PopoverContent>
            </Portal>
          </Popover>
        </HStack>

        <Stack direction={"row"}>
          <Button
            _hover={{ rounded: "full", bg: "blue.500" }}
            bg={useColorModeValue("whiteAlpha.700", "gray.900")}
            leftIcon={<HiOutlineUserCircle />}
            onClick={() => window.location.assign("/user-dashboard")}
          >
            User dashboard
          </Button>

          <Popover>
            <PopoverTrigger>
              <Button
                leftIcon={<FaWrench />}
                bg={useColorModeValue("whiteAlpha.700", "gray.900")}
                _hover={{
                  rounded: "full",
                  bg: "red.500",
                }}
              >
                Add a repair
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader as={"b"} textAlign={"center"}>
                  Add a repair to this vehicle for your vehicle history
                </PopoverHeader>
                <PopoverBody>
                  {carData && <RepairForm vehId={carData?._id.toString()} />}
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        </Stack>
      </Stack>
      <Divider m={2} />

      {carData && carData.repairs && carData.repairs.length != 0  ? (
        <RepairsCard car={carData?.repairs} />
      ) : (
        <Flex
          boxShadow={"lg"}
          maxW={"640px"}
          direction={{ base: "column-reverse", sm: "row" }}
          width={"full"}
          rounded={"xl"}
          p={4}
          justifyContent={"center"}
          position={"relative"}
          bg={"gray.100"}
        >
          <Text>your repairs will appear here when you add them</Text>
        </Flex>
      )}
    </VStack>
  );
};

export default SingleVehicleCard;
