import React, { useState } from "react"

import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";

import "./App.css" 
 
function App() {

  const [min, setMin] = useState(550)
  const [max, setMax] = useState(1020)

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo min={min} max={max} onMinChanged={setMin} onMaxChanged={setMax}/> 
      </div> 
      <div className="linha"> 
        <Media min={min} max={max}/>
        <Soma min={min} max={max}/>
        <Sorteio min={min} max={max}/>   
      </div> 
    </div>
  );
}

export default App;
