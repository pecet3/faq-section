import React from 'react';
import './App.css';
import TestComponent from "./TestComponent";
import {TestComponent2} from "./TestComponent2";

function App() {
  return (
    <>
    <TestComponent 
    text="witaj ojcze, to jest testowy komponent, zobacz go jak dokładnie wygląda, posiada interface, gdzie określasz w nim typy zmiennych"
    sayHello={true}
    personalData={{name: "Jakub", age: 23}}
    />
    <TestComponent2
    title="Hello, this is TestComponent2"
    luckyNumber={888}
    />
  </>
  );
}

export default App;
