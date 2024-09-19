import React from 'react';
import InputOutputBase from './InputOutputBase';

interface UrlDecodeProps {
  updateResults: (tab: string,input: string,  result: string) => void;
}

const UrlDecode: React.FC<UrlDecodeProps> = ({ updateResults }) => {

  const handleConvertClick = (input : string) => {
    try{
      const result = decodeURIComponent(input); // URL Decode;
      updateResults('URL Decode', input, result);
      return result;
    }catch(error){
      return "Invalid Encoded Url"
    }
    
  };

  return (
    <InputOutputBase
      taskLabel="Generate Output (URL Decode)"
      onConvert={handleConvertClick}
    />
  );
};

export default UrlDecode;

