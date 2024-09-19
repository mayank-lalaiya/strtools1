import React from 'react';
import InputOutputBase from './InputOutputBase';
interface UrlEncodeProps {
  updateResults: (tab: string,input: string,  result: string) => void;
}

const UrlEncode: React.FC<UrlEncodeProps> = ({ updateResults }) => {

  const handleConvertClick = (input : string) => {
    const result = encodeURIComponent(input); // URL encode;
    updateResults('URL Encode', input, result);
    return result;
  };

  return (
    <InputOutputBase
      taskLabel="Generate Output (URL Encode)"
      onConvert={handleConvertClick}
    />
  );
};

export default UrlEncode;
