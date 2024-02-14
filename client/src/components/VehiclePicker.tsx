import React, { useState, useEffect } from 'react';
import { Select, Stack } from '@chakra-ui/react';

const VehiclePicker: React.FC = () => {
  const [years, setYears] = useState<number[]>([]);
  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | undefined>();
  const [selectedMake, setSelectedMake] = useState<string | undefined>();

  useEffect(() => {
    // Populate years from 1969 to current year
    const currentYear = new Date().getFullYear();
    const yearsArray = Array.from({ length: currentYear - 1969 + 1 }, (_, index) => currentYear - index);
    setYears(yearsArray);
  }, []);

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    // Fetch makes for the selected year (replace with your logic)
    // For now, let's just set some example makes
    setMakes(['Make1', 'Make2', 'Make3']);
  };

  const handleMakeChange = (make: string) => {
    setSelectedMake(make);
    // Fetch models for the selected year and make (replace with your logic)
    // For now, let's just set some example models
    setModels(['Model1', 'Model2', 'Model3']);
  };

  return (
    <Stack spacing={4}>
      <Select placeholder="Select Year" onChange={(e) => handleYearChange(parseInt(e.target.value))}>
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
      >
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
