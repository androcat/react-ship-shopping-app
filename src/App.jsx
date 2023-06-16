import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShipList from "./ShipList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShipList />
    </>
  );
}

export default App;
