import React from 'react';
import InputOutputBase from './InputOutputBase';

interface HtmlFormatterProps {
  updateResults: (tab: string, input: string, result: string) => void;
}

const HtmlFormatter: React.FC<HtmlFormatterProps> = ({ updateResults }) => {
  const handleConvertClick = (input: string) => {
    try {
      const beautify = require('simply-beautiful');
      const result = beautify.html(input); // formatting HTML
      updateResults('HTML Formatting', input, result);
      return result;
    } catch (error) {
      return 'Invalid HTML'; // Error handling
    } 
  };

  return (
    <InputOutputBase
      taskLabel="Generate Output (HTML Formatting)"
      onConvert={handleConvertClick}
    />
  );
};

export default HtmlFormatter;

/**
  <html>

  <body>
    <h1>Thisisheading1</h1>
    <h2>Thisisheading2</h2>
    <h3>Thisisheading3</h3>
    <p>Myfirstparagraph.</p>
    <ahref="https: //www.w3schools.com">Thisisalink</a>
      <imgsrc="w3schools.jpg"alt="W3Schools.com"width="104"height="142">
  </body>

  </html>

********************************** MINIFIED ********************************************************************
  
<html><body><h1>Thisisheading1</h1><h2>Thisisheading2</h2><h3>Thisisheading3</h3><p>Myfirstparagraph.</p><ahref="https://www.w3schools.com">Thisisalink</a><imgsrc="w3schools.jpg"alt="W3Schools.com"width="104"height="142"></body></html>

****************************************************************************************************************
**/

