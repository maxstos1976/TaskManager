import React, { useState } from "react";
import "./App.css";

export default function App() {
  // Cria um estado para o texto do input
  const [texto, setTexto] = useState("");

  // Função para lidar com a mudança no input
  const handleChange = () => {
    const textoInput = document.getElementById("inputTexto");
    setTexto(textoInput.value);
  };

  return (
    <div className="card">
      <p>Digite algo para modificar State:</p>
      <input id="inputTexto" type="text" placeholder="Digite algo" />
      <button onClick={handleChange}>Modificar State</button>
      <p>{texto || "Texto original do parágrafo."}</p>
    </div>
  );
}
