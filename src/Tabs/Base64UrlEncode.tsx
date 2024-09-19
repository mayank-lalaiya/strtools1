import React from 'react';
import InputOutputBase from './InputOutputBase';

interface Base64UrlEncodeProps {
  updateResults: (tab: string, input: string, result: string) => void;
}

const Base64UrlEncode: React.FC<Base64UrlEncodeProps> = ({ updateResults }) => {
  const handleConvertClick = (input : string) => {
    const base64 = btoa(input);
    const result = base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); // Base64 UrlEncode
    updateResults('Base64 URL Encode', input, result);
    return result;
  };

  return (
    <InputOutputBase
      taskLabel="Generate Output (Base64 URL Encode)"
      onConvert={handleConvertClick}
    />
  );
};

export default Base64UrlEncode;
