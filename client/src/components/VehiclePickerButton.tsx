import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";

import { FaCarSide } from "react-icons/fa";
import VehiclePicker from "./VehiclePicker";

const VehiclePickerButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        variant={"solid"}
        bg={"blue.400"}
        color={"white"}
        _hover={{rounded: 'full',
          bg: "blue.500",
        }}
        onClick={onOpen}
      >
        <Text paddingRight={2}>Add vehicle</Text>
        <FaCarSide />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <VehiclePicker/>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VehiclePickerButton;
