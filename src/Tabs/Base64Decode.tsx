import React from 'react';
import InputOutputBase from './InputOutputBase';

interface Base64DecodeProps {
  updateResults: (tab: string, input: string, result: string) => void;
}

const Base64Decode: React.FC<Base64DecodeProps> = ({ updateResults }) => {
  const handleConvertClick = (input: string) => {
    try {
      const result = atob(input); // Base64 decode logic
      updateResults('Base64 Decode', input, result);
      return result;
    } catch (error) {
      return 'Invalid Base64 string'; // Error handling
    } 
  };

  return (
    <InputOutputBase
      taskLabel="Generate Output (Base64 Decode)"
      onConvert={handleConvertClick}
    />
  );
};

export default Base64Decode;
