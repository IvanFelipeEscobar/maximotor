import {
  Flex,
  Stack,
  Text,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Button,
  Input,
} from "@chakra-ui/react";
import { RepairInfo } from "../utils/types";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { deleteRepair } from "../utils/api-requests";
interface CarProp {
  car?: RepairInfo[];
}
const RepairsCard = ({ car }: CarProp) => {
  const { vehicleId } = useParams();
  const [delVeh, setDelVeh] = useState("");

  const handleDelete = async (vehicleID: string, repairID: string) => {
    try {
      const res = await deleteRepair(vehicleID, repairID);
      if (res) window.location.assign(`/vehicles/${vehicleID}`)
    } catch (error) {
      console.error(error);
    }
  };
  return car!.map((repair) => (
    <Flex
      key={repair._id}
      boxShadow={"lg"}
      maxW={"640px"}
      direction={{ base: "column", sm: "row" }}
      width={"full"}
      rounded={"xl"}
      p={5}
      justifyContent={"space-evenly"}
      position={"relative"}
      bg={"gray.100"}
      flexWrap={"wrap"}
    >
      <Stack m={2}>
        <Text as={"b"}>Repair:</Text>
        <Text>{repair.repair}</Text>
      </Stack>
      <Stack m={2}>
        <Text as={"b"}>Parts:</Text>
        <Text>{repair.parts}</Text>
      </Stack>
      <Stack m={2}>
        <Text as={"b"}>Mileage:</Text>
        <Text>{repair.mileage}</Text>
      </Stack>
      <Stack m={2}>
        <Text as={"b"}>Date:</Text>
        <Text>{repair.dateOfRepair}</Text>
      </Stack>
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
              to delete vehicle please input "delete repair"
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
            <PopoverFooter>
              {delVeh === `delete repair` && (
                <Button
                  size={"xs"}
                  marginTop={2}
                  marginLeft={2}
                  colorScheme={"red"}
                  bg={"red.400"}
                  _hover={{ rounded: "full", bg: "red.500" }}
                  leftIcon={<FaTrash />}
                  onClick={() => {
                    handleDelete(vehicleId!, repair._id!.toString());
                  }}
                >
                  Delete Vehicle
                </Button>
              )}
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </Flex>
  ));
};

export default RepairsCard;
