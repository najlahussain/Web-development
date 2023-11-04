import { useState } from "react";

const MyComponent = () => {
  const [color, setColor] = useState("red");
  return (
    <div>
      <h1>My favorite color is {color}!</h1>
      <button onClick={() => setColor((color==="blue")?"red":"blue")}>
        Toggle Color
      </button>
    </div>
  );
};

export default MyComponent;
