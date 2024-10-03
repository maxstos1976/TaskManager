import { useState } from "react";
import "./App.css";

export default function App() {
  // Cria um estado para o texto do input
  const [message, setmessage] = useState("Olá Mundo");

  return (
    <div className="card">
      <h1>{message}</h1>
      <button
        onClick={() => {
          setmessage("Fui clicado!");
        }}
      >
        Mudar Mensagem
      </button>
    </div>
  );
}
