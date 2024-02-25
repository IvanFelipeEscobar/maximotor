import React, { useState, useEffect } from "react";
import { Select, Stack } from "@chakra-ui/react";
const apiKey = import.meta.env.CAR_API_KEY
const VehiclePicker: React.FC = () => {
  const [years, setYears] = useState<number[]>([]);
  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | undefined>();
  const [selectedMake, setSelectedMake] = useState<string | undefined>();
  // const [selectedModel, setSelectedModel] = useState< string | undefined>()

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
      name: string;
    }
    setSelectedMake(make);
    const url = `https://car-data.p.rapidapi.com/cars?limit=50&page=0&year=${selectedYear}&make=${make}`
    const options = {
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
      const formattedResult = result.data.map((el: ModelData) => el.name);
      const sortedResult = formattedResult.sort();
      console.log(sortedResult)
      setModels(sortedResult);
    } catch (error) {
      console.error(error);
    }
  };

  return (
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

      <Select placeholder="Select Model" isDisabled={!selectedMake}>
        {models.map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </Select>
    </Stack>
  );
};

export default VehiclePicker;
