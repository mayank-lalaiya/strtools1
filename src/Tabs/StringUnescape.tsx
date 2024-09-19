import React from 'react';
import InputOutputBase from './InputOutputBase';

interface StringUnescapeProps {
  updateResults: (tab: string, input: string, result: string) => void;
}

const StringUnescape: React.FC<StringUnescapeProps> = ({ updateResults }) => {
  const handleConvertClick = (input: string) => {
    try {
      var decode = require('unescape');
      const result = decode(input)
      updateResults('String Unescape', input, result);
      return result;
    } catch (error) {
      return 'Invalid String'; // Error handling
    } 
  };

  return (
    <InputOutputBase
      taskLabel="Generate Output (String Unescape)"
      onConvert={handleConvertClick}
    />
  );
};

export default StringUnescape;

/**

********************************** Unescaped STRING ********************************************************************
&lt;div&gt;abc&lt;/div&gt;
********************************** Escaped STRING ******************************************************************
<div>abc</div>
********************************************************************************************************************

**/

