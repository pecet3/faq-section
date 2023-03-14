import { useState, useEffect } from "react";

interface PropsInterface {
  title: string;
  luckyNumber: number;
}

interface Button {
  counter: number;
}
const data: { name: string; age: number; note?: string }[] = [
  {
    name: "Jakub",
    age: 23,
  },
  {
    name: "Grzegorz",
    age: 49,
    note: "Great Philosopher",
  },
];

export const TestComponent2 = ({ title, luckyNumber }: PropsInterface) => {
  const [counter, setCounter] = useState<Button>({
    counter: 0,
  });

  const renderList = () => {
    return data.map((person) => {
      return (
        <li key={person.name}>
          <h2>{person.name}</h2>
          <h3>{person.age} years old</h3>
          <h4>{person.note}</h4>
        </li>
      );
    });
  };

  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>Your lucky number is: {luckyNumber}</p>
        <ul>{renderList()}</ul>
      </div>
    </>
  );
};
