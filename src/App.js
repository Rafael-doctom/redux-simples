import React from "react"
import Card from "./components/Card";
import "./App.css"

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Card title="Card 1" red>
          X
        </Card>  
        <Card title="Card 2" green>
          Y
        </Card>  
      </div> 
      <div className="linha">
      <Card title="Card 1" blue>
          X
        </Card> 
        <Card title="Card 2" purple>
          Y
        </Card>     
      </div> 
    </div>
  );
}

export default App;
