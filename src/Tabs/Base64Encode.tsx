// src/components/Base64Encode/Base64Encode.tsx

import React from 'react';
import InputOutputBase from './InputOutputBase';

interface Base64EncodeProps {
  updateResults: (tab: string, input: string, result: string) => void;
}

const Base64Encode: React.FC<Base64EncodeProps> = ({ updateResults }) => {

  const handleConvertClick = (input: string) => {
    const result = btoa(input);
    updateResults('Base64 Encode', input, result);
    return result;
  };

  return (
    <InputOutputBase
      taskLabel="Generate Output (Base64 Encode)"
      onConvert={handleConvertClick}
    />
  );
};

export default Base64Encode;
