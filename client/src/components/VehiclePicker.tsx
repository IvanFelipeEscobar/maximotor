import React, { useState, useEffect } from "react";
import { Button, Select, Stack, Text } from "@chakra-ui/react";
import { FaCarSide } from "react-icons/fa";
import { Auth } from "../utils/auth";
import { addNewVehicle } from "../utils/api-requests";
const VehiclePicker: React.FC = () => {
  const apiKey = import.meta.env.VITE_CAR_API;
  const [years, setYears] = useState<number[]>([]);
  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | undefined>();
  const [selectedMake, setSelectedMake] = useState<string | undefined>();
  const [selectedModel, setSelectedModel] = useState<string | undefined>();

  useEffect(() => {
    // Populate years from 1990 to current year
    const currentYear = new Date().getFullYear();
    const yearsArray = Array.from(
      { length: currentYear - 1990 + 1 },
      (_, index) => currentYear - index
    );
    setYears(yearsArray);
  }, []);

  const handleYearChange = async (year: number) => {
    setSelectedYear(year);
    interface CarData {
      id: number;
      name: string;
    }
    const url = `https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=id&year=${year}`;
    const options: RequestInit = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "car-api2.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      const formattedResult = result.data.map((el: CarData) => el.name);

      const sortedResult = formattedResult.sort();
      setMakes(sortedResult);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMakeChange = async (make: string) => {
    interface ModelData {
      id: number;
      make_id: number;
      make: string;
      model: string;
      type: string;
    }
    setSelectedMake(make);
    const url = `https://car-data.p.rapidapi.com/cars?limit=50&page=0&year=${selectedYear}&make=${make}`;
    const options: RequestInit = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "car-data.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      const formattedResult = result.map((el: ModelData) => el.model);
      const sortedResult = formattedResult.sort();
      setModels(sortedResult);
    } catch (error) {
      console.error(error);
    }
  };
  const submitVehicle = async () => {
    const token = Auth.isLoggedIn() ? Auth.getToken() : null;
    if (!token || Auth.isTokenExpired(token)) {
      Auth.logout();
      return;
    }
    if (!selectedYear || !selectedMake || !selectedModel) {
      console.error('Please select a year, make, and model');
      return;
    }
    const data = {
      year: selectedYear,
      make: selectedMake,
      model: selectedModel
    }
try {
  const response =  await addNewVehicle(data, token)
  if (response.ok) window.location.assign('/user-dashboard')
} catch (error) {
  console.error('Error submitting form data:', error);
}

  };
  return (<form onSubmit={submitVehicle}>

<Stack spacing={4}>
      <Select
        placeholder="Select Year"
        onChange={(e) => handleYearChange(parseInt(e.target.value))}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>

      <Select
        placeholder="Select Make"
        onChange={(e) => handleMakeChange(e.target.value)}
        isDisabled={!selectedYear}
      >
        {makes.map((make) => (
          <option key={make} value={make}>
            {make}
          </option>
        ))}
      </Select>

      <Select
        placeholder="Select Model"
        isDisabled={!selectedMake}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        {models.map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </Select>
      <Button
      type="submit"
        variant={"solid"}
        colorScheme={"red"}
        bg={"red.400"}
        _hover={{ bg: "red.500" }}
        onClick={submitVehicle}
      >
        <Text paddingRight={2}>Add vehicle</Text>
        <FaCarSide />
      </Button>
    </Stack>
  </form>
  );
};

export default VehiclePicker;
