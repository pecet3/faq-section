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
  personalData: PersonalData;
}

//                                                                    \/ musze podac nazwe w propsach tego interface personalData

const data: { name: string; age: number; note?: string }[] = [
  {
    name: "Reksio",
    age: 6,
    note: "a dog",
  },
  {
    name: "Arystoteles",
    age: 15,
    note: "a cat and Great Philosopher",
  },
];

const TestComponent: React.FC<TextInputProps> = ({
  text,
  sayHello,
  personalData,
}) => {
  const renderList = (): JSX.Element[] => {
    return data.map((person) => {
      return (
        <li key={person.name}>
          <h2>{person.name}</h2>
          <h3>{person.age} years old</h3>
          {person.note && <h4>{person.note}</h4>}
        </li>
      );
    });
  };
  return (
    <>
      <p>{text}</p>
      {sayHello && <h1>Hello</h1>}
      <div>
        imię: <b>{personalData.name}</b> <br />
        wiek: <i>{personalData.age}</i>
      </div>
      <ul>{renderList()}</ul>
    </>
  );
};

export default TestComponent;
