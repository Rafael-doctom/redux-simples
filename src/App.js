import React from "react"
import Intervalo from "./components/Intervalo";
import Card from "./components/Card";
import "./App.css"

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo/> 
      </div> 
      <div className="linha"> 
        <Card title="Card 1" green>
          Y
        </Card>  
        <Card title="Card 2" blue>
          X
        </Card> 
        <Card title="Card 3" purple>
          Y
        </Card>     
      </div> 
    </div>
  );
}

export default App;
