import React, { useState } from "react";
import "./Contador.css";

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="wrapper">
      <div className="card">
        <h1 className="title">Contador de Cliques</h1>

        <div className="countDisplay">
          <span className="countNumber">{count}</span>
          <span className="countLabel">cliques</span>
        </div>

        <button className="button" onClick={incrementarContador}>
          Clique aqui
        </button>
      </div>
    </div>
  );
};

export default Contador;