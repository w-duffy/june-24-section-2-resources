import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // let spots = { id: 1 };
  // console.log("did I render");
  useEffect(() => {
    console.log("did I render");

    // spots.allSpots = [1, 2, 3]; // think of this as fetching your spots
  }, [count]);

  // if (spots.nums === undefined) return null;
  // console.log(spots.allSpots.map);

  return (
    <>
      <h1>Hello Vite + React!</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
    </>
  );
}

export default App;
