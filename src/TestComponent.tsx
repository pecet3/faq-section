import React from 'react';

export interface TextInputProps {
    text: string;
    sayHello: boolean;
    // Zobacz, w app, jeżeli usuniesz text lub sayHello z propsów, wtedy jest błąd. 
    // Aby jakaś zmienna była opcjonalna to musisz dać znak zapytania, jak poniżej.
    optionalString?: string;
    // tak funkcje sie deklaruje
    anyFunction?: () => void;
}

const TestComponent: React.FC<TextInputProps> = ({text, sayHello}) =>{
  return (
    <>
    <p>
        {text}
    </p>
    {sayHello && <h1>Hello</h1>}
    </>
  );
}

export default TestComponent;