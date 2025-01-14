import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-2 m-auto text-center">
      <div className="flex justify-center ">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-52 h-52 p-1.5" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React logo" className="w-52 h-52 p-1.5" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="p-2 h-">
        <Button
          className="bg-black"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        {/* <button></button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
