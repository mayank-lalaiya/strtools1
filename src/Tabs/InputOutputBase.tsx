import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import './InputOutputBase.css'; // CSS file for the component

interface InputOutputBaseProps {
  taskLabel: string; // The label for the button
  onConvert: (input: string) => string; // The conversion logic specific to each task
  initialOutput?: string; // Optional initial output
  initialInput?: string; // Optional initial input
  language?: string; // Optional programming language
}

const InputOutputBase: React.FC<InputOutputBaseProps> = ({
  taskLabel,
  onConvert,
  initialInput = '',
  initialOutput = '// Output will appear here',
  language = 'javascript'
}) => {
  const [inputCode, setInputCode] = useState(initialInput);
  const [outputCode, setOutputCode] = useState(initialOutput);

  const handleConvertClick = () => {
    const result = onConvert(inputCode);
    setOutputCode(result);
  };
  return (
    <div style={{height : "100%"}}>
      <div className='editor-wrapper'>
        <div className="editor-container">
          <h3>Input</h3>
          <Editor
            height="100%"
            defaultLanguage={language}
            defaultValue={inputCode}
            theme="vs-light"  // Use light theme
            onChange={(value) => setInputCode(value || '')}
            options={{
              lineNumbers: 'on',
              readOnly: false,
              wordWrap: 'on',
              minimap: {enabled: false},
              scrollbar: {verticalScrollbarSize: 10}
            }}
            className='editor-input'
          />
        </div>
        <div className="editor-container">
          <h3>Output</h3>
          <Editor
            height="100%"
            defaultLanguage={language}
            value={outputCode}
            theme="vs-light"  // Use light theme
            options={{
              lineNumbers: 'on',
              readOnly: true,
              wordWrap: 'on',
              minimap: {enabled: false},
              scrollbar: {verticalScrollbarSize: 10}
            }}
            className='editor-output'
          />
        </div>
      </div>
      <button className="button" onClick={handleConvertClick}>
        {taskLabel}
      </button>
    </div>
  );
};

export default InputOutputBase;