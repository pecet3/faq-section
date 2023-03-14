import React from "react";

export interface PersonalData {
  name: string;
  age?: number;
}

export interface TextInputProps {
  text: string;
  sayHello: boolean;
  // Zobacz, w app, jeżeli usuniesz text lub sayHello z propsów, wtedy jest błąd.
  // Aby jakaś zmienna była opcjonalna to musisz dać znak zapytania, jak poniżej.
  optionalString?: string;
  // tak funkcje sie deklaruje
  anyFunction?: () => void;
  // w tym interface dodałem interface PersonalData
  personalData?: PersonalData;
}

//                                                                    \/ musze podac nazwe w propsach tego interface personalData

const TestComponent: React.FC<TextInputProps> = ({
  text,
  sayHello,
  personalData,
}) => {
  return (
    <>
      <p>{text}</p>
      {sayHello && <h1>Hello</h1>}
      <div>
        imię: <b>{personalData.name}</b> <br />
        wiek: <i>{personalData.age}</i>
      </div>
    </>
  );
};

export default TestComponent;
