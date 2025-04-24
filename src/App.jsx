import { useState } from "react";
import "./App.css";

// =========================================================================== Task 1 ====================================
// const App = () => {
//   const handleClick = () => {
//     alert("I'm a button!");
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Click me!</button>
//       <button onClick={() => alert("Ja - knopka!")}>Tycjaj!</button>
//     </>
//   );
// };

// ====================================================================== Task 2: Об'єкт події ====================================
// function App() {
//   const handleClick = (evt) => {
//     console.log(evt);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>First button</button>
//       <button onClick={(evt) => console.log(evt)}>Second button</button>
//     </>
//   );
// }

// =========================================================================== Task 3: Reading props ====================================
// const CustomButton = ({ message, children }) => {
//   return <button onClick={() => alert(message)}>{children}</button>;
// };

// const App = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </>
//   );
// };

// =========================================================================== Task 4: State ====================================

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// =========================================================================== Task 5: Several States ====================================
// function App() {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// }

// =========================================================================== Task 6: States are Isolated: Examples ====================================
// const ClickCounter = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// const App = () => {
//   return (
//     <>
//       <ClickCounter />
//       <ClickCounter />
//     </>
//   );
// };

// =========================================================================== Task 7: Synchronised States ====================================
// ClickCounter отримує функцію onUpdate (ім'я пропа),
// яка викликається під час події onClick

// const ClickCounter = ({ value, onUpdate }) => {
//   return <button onClick={onUpdate}>Current: {value}</button>;
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Функція, яку будемо передавати в ClickCounter для виклику під час кліку
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };

// =========================================================================== Task 8: Updating Objects ====================================
const App = () => {
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>

      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    </div>
  );
};

export default App;
