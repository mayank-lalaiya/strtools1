import React from 'react';
import InputOutputBase from './InputOutputBase';

interface DatetoEpochProps {
  updateResults: (tab: string, input: string, result: string) => void;
}

const DatetoEpoch: React.FC<DatetoEpochProps> = ({ updateResults }) => {
  const handleConvertClick = (input: string) => {
    try {
      const timestamp = require('unix-timestamp');
      const result = timestamp.fromDate(input);
      updateResults('Date to Epoch', input, result);
      return result;
    } catch (error) {
      return 'Invalid Date'; // Error handling
    } 
  };

  return (
    <InputOutputBase
      taskLabel="Generate Output (Date to Epoch)"
      onConvert={handleConvertClick}
    />
  );
};

export default DatetoEpoch;
