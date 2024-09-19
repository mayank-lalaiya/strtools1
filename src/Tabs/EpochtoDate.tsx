import React from 'react';
import InputOutputBase from './InputOutputBase';

interface EpochtoDateProps {
  updateResults: (tab: string, input: string, result: string) => void;
}

const EpochtoDate: React.FC<EpochtoDateProps> = ({ updateResults }) => {
  const handleConvertClick = (input: string) => {
    try {
      const timestamp = require('unix-timestamp');
      const result = timestamp.toDate(parseInt(input)).toString(); 
      updateResults('Epoch to Date', input, result);
      return result;
    } catch (error) {
      return 'Invalid Epoch'; // Error handling
    } 
  };

  return (
    <InputOutputBase
      taskLabel="Generate Output (Epoch to Date)"
      onConvert={handleConvertClick}
    />
  );
};

export default EpochtoDate;
