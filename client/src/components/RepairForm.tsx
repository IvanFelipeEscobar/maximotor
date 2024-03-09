"use client";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaWrench } from "react-icons/fa";
import { addRepair } from "../utils/api-requests";
export default function RepairForm({vehId}) {
  const [repairData, setRepairData] = useState({
    parts: "",
    repairs: "",
    mileage: "",
    dateOfRepair: "",
  });
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRepairData({ ...repairData, [name]: value });
    console.log(repairData)
  };
  const addRepairFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const vehicleId:string = vehId;
    try {
      const res = await addRepair(repairData, vehicleId)
      if (!res.ok) throw new Error('Problem occured while adding repairs')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form>
      <FormControl isRequired paddingBottom={2}>
        <InputGroup>
          <Input
            type="text"
            name="parts"
            value={repairData.parts}
            onChange={handleInput}
            placeholder="Parts Replaced"
          />
        </InputGroup>
      </FormControl>

      <FormControl isRequired paddingBottom={2}>
        <InputGroup>
          <Input
            type="text"
            name="repairs"
            value={repairData.repairs}
            onChange={handleInput}
            placeholder="Repairs Performed"
          />
        </InputGroup>
      </FormControl>

      <FormControl paddingBottom={2}>
        <InputGroup>
          <Input
            type="text"
            name="mileage"
            value={repairData.mileage}
            onChange={handleInput}
            placeholder="Mileage"
          />
        </InputGroup>
      </FormControl>

      <FormControl paddingBottom={2}>
        <FormLabel fontSize={14} paddingLeft={2}>
          Date of repairs
        </FormLabel>
        <InputGroup>
          <Input
            type="date"
            name="dateOfRepair"
            value={repairData.dateOfRepair}
            onChange={handleInput}
          />
        </InputGroup>
      </FormControl>

      <Button
      marginLeft={12}
        fontFamily={"heading"}
        variant={"solid"}
        colorScheme={"red"}
        bg={"red.400"}
        _hover={{ bg: "red.500" }}
        type="submit"
        leftIcon={<FaWrench />}
      >
        Add Repair
      </Button>
    </form>
  );
}
