import React from 'react';
import InputOutputBase from './InputOutputBase';

interface StringEscapeProps {
  updateResults: (tab: string, input: string, result: string) => void;
}

const StringEscape: React.FC<StringEscapeProps> = ({ updateResults }) => {
  const handleConvertClick = (input: string) => {
    try {
      var jsesc = require('jsesc');
      const result = jsesc(input)
      updateResults('String Escape', input, result);
      return result;
    } catch (error) {
      return 'Invalid String'; // Error handling
    } 
  };

  return (
    <InputOutputBase
      taskLabel="Generate Output (String Escape)"
      onConvert={handleConvertClick}
    />
  );
};

export default StringEscape;

/**

********************************** CODED STRING ********************************************************************
Lorem ipsum "dolor" sit \'amet\' etc.
********************************** DECODED STRING ******************************************************************
Lorem ipsum "dolor" sit \\\'amet\\\' etc.
********************************************************************************************************************

**/

