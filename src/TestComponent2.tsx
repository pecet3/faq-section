import { useState, useEffect } from "react";

interface PropsInterface {
  title: string;
  luckyNumber: number;
}

interface Button {
  counter: number;
}

export const TestComponent2 = ({ title, luckyNumber }: PropsInterface) => {
  const [counter, setCounter] = useState<Button>({
    counter: 0,
  });

  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>Your lucky number is: {luckyNumber}</p>
        <h1>{}</h1>
      </div>
    </>
  );
};
