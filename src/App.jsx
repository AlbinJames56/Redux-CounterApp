import { useState } from "react";

import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <Counter />
      </div>
    </>
  );
}

export default App;
