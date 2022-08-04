import React from "react";
import { Futter } from "./layout/Futter";
import { Navbar } from "./layout/Navbar";
import { Main } from './layout/Main';
import "./index.css"


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Main/> 
      <Futter/>
    </div>
  );
}

export default App;
