import React from 'react';
import InputOutputBase from './InputOutputBase';
interface PrettifyJsonProps {
  updateResults: (tab: string, input: string, result: string) => void;
}

const PrettifyJson: React.FC<PrettifyJsonProps> = ({ updateResults }) => {
  const handleConvertClick = (input : string) => {
    try{
      const parsedJson = JSON.parse(input);
      const prettyString = JSON.stringify(parsedJson, null, 2);
      updateResults('Prettify Json', input, prettyString);
      return prettyString;
    }catch(error){
      return "Invalid JSON"
    }
    
  };

  return (
    <InputOutputBase
      taskLabel="Generate Output (Prettify Json)"
      onConvert={handleConvertClick}
      language="json"
    />
  );
};

export default PrettifyJson;
