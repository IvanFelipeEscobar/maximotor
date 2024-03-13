import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Portal,
  Input,
  PopoverFooter,
} from "@chakra-ui/react";
import { UDProps } from "../utils/types";
import { FaTrash, FaWrench } from "react-icons/fa";
import RepairForm from "./RepairForm";
import { useState } from "react";
import { deleteVehicle } from "../utils/api-requests";
const VehicleCard = ({ userData }: UDProps) => {
  const [delVeh, setDelVeh] = useState('')
  const handleDelete = async(vehicleID: string)  => {

    try {
      await deleteVehicle(vehicleID)
    } catch (error) {
      console.error(error)
    }
    
  }

  return (
    userData.cars && (
      <Table variant="simple" size={["sm", "md"]}>
        <Thead>
          <Tr>
            <Th>year</Th>
            <Th>make</Th>
            <Th>model</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {userData.cars.map((car) => (
            <Tr key={car._id} id={car._id.toString()}>
              <Td>{car.year}</Td>
              <Td>{car.make}</Td>
              <Td>{car.model}</Td>
              <Td>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      marginLeft={2}
                      marginTop={2}
                      size={["xs"]}
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      <FaWrench />
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
                        <RepairForm vehId={car._id.toString()} />
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      size={"xs"}
                      marginTop={2}
                      marginLeft={2}
                      colorScheme={"red"}
                      bg={"red.400"}
                      _hover={{ bg: "red.500" }}
                    >
                      <FaTrash />
                    </Button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader color={'red'} textAlign={'center'}>
                        to delete vehicle please input "{car.year + " " + car.make + " " + car.model}"
                      </PopoverHeader>
                      <PopoverBody>
                        
                        <Input
                        type="text"
                        name="delVeh"
                        onChange={(e=>setDelVeh(e.target.value))}
                        value={delVeh}
                        />
                      </PopoverBody>
                      <PopoverFooter>
                    {( delVeh === `${car.year} ${car.make} ${car.model}`) &&  <Button
                      size={"xs"}
                      marginTop={2}
                      marginLeft={2}
                      colorScheme={"red"}
                      bg={"red.400"}
                      _hover={{ bg: "red.500" }}
                      leftIcon={
                        <FaTrash />}
                        onClick={()=> handleDelete(car._id.toString())}
                    >Delete Vehicle
                    </Button>}
                      </PopoverFooter>
                    </PopoverContent>
                  </Portal>
                </Popover>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    )
  );
};

export default VehicleCard;
