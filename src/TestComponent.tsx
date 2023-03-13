import React from 'react';
export interface TextInputProps {
    text: string;
}

const TestComponent: React.FC<TextInputProps> = ({text}) =>{
  return (
    <p>
        {text}
    </p>
  );
}

export default TestComponent;