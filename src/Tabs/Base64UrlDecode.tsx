import React from 'react';
import InputOutputBase from './InputOutputBase';
interface Base64UrlDecodeProps {
  updateResults: (tab: string, input: string, result: string) => void;
}

const Base64UrlDecode: React.FC<Base64UrlDecodeProps> = ({ updateResults }) => {
  const handleConvertClick = (input : string) => {
    try{
      let base64 = input.replace(/-/g, '+').replace(/_/g, '/');
      // Add padding if necessary
      while (base64.length % 4 !== 0) {
        base64 += '=';
      }
      const result = atob(base64); // Base64 UrlDecode
      updateResults('Base64 URL Decode', input, result);
      return result;
    }catch(error){
      return 'Invalid Base64 Url'; // Error handling
    }
    
  };

  return (
    <InputOutputBase
      taskLabel="Generate Output (Base64 URL Decode)"
      onConvert={handleConvertClick}
    />
  );
};

export default Base64UrlDecode;
