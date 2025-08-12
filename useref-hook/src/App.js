import React, { useState, useRef } from "react";
function App() {
  const [fruit, setFruit] = useState("Mango");
  const [animal, setAnimal] = useState("Cat");
  const counterRef = useRef(0);

  const fruitChangeHandler = () => {
    setFruit("Apple");
    console.log(counterRef);
  };

  const animalChangeHandler = () => {
    setAnimal("Dog");
    console.log(counterRef);
  };

  const countChangeHandler = () => {
    counterRef.current = counterRef.current + 1;
    console.log(counterRef);
  };

  return (
    <div>
      <h1>{fruit}</h1>
      <button onClick={fruitChangeHandler}>Change Fruit</button>
      <h1>{animal}</h1>
      <button onClick={animalChangeHandler}>Change Animal</button>
      <br></br>
      <button onClick={countChangeHandler}>Change Count</button>
    </div>
  );
}

export default App;
