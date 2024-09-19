import React from 'react';
import  { jwtDecode, JwtPayload } from 'jwt-decode';
import InputOutputBase from './InputOutputBase';
interface JwtDecodeProps {
    updateResults: (tab: string, input: string, result: string) => void;
  }

const JWTDecoder: React.FC<JwtDecodeProps> = ({ updateResults }) => {

  const handleConvertClick = (input : string) => {
    try {
        const payload = jwtDecode<JwtPayload>(input); // Decode the JWT
        const result = JSON.stringify(payload, null, 2)
        updateResults('Jwt Decode',input,result);
        return result;
    } catch (error) {
      return "Invalid Token";
    }
  };

  return (
    <InputOutputBase
      taskLabel="Generate Output (Jwt Decode)"
      onConvert={handleConvertClick}
      language='json'
    />
  );
};

export default JWTDecoder;
