import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, useToast } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface AppointmentFormProps {
  onSubmit: (formData: { name: string; email: string; date: Date; time: string }) => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState('');
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !date || !time) {
      alert('Please fill out all fields');
      return;
    }

    onSubmit({ name, email, date, time });

    // Clear form fields after submission
    setName('');
    setEmail('');
    setDate(null);
    setTime('');

    alert('Appointment scheduled successfully!');
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <DatePicker selected={date} onChange={(newDate) => setDate(newDate)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Time</FormLabel>
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">Schedule Appointment</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AppointmentForm;
