import React from 'react';
import xmlFormat from 'xml-formatter';
import InputOutputBase from './InputOutputBase';

interface XmlFormatterProps {
  updateResults: (tab: string, input: string, result: string) => void;
}

const XmlFormatter: React.FC<XmlFormatterProps> = ({ updateResults }) => {
  const handleConvertClick = (input: string) => {
    try {
      const result = xmlFormat(input); // formatting XML
      updateResults('XML Formatting', input, result);
      return result;
    } catch (error) {
      return 'Invalid XML Format'; // Error handling
    } 
  };

  return (
    <InputOutputBase
      taskLabel="Generate Output (XML Formatting)"
      onConvert={handleConvertClick}
    />
  );
};

export default XmlFormatter;

/**
<root>
    <content>
        <p xml:space="preserve">This is <b>some</b> content.</p>
    </content>
</root>

********************************** MINIFIED ********************************************************************
<root><content><p xml:space="preserve">This is <b>some</b> content.</content></p>
****************************************************************************************************************
**/

