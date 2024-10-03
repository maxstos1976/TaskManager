import { useState } from "react";
import Input from "./Input";

// Componente para adicionar uma nova tarefa
export default function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Titulo da Tarefa."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Descriçao da Tarefa."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={() => {
          // Verificar se o titulo e a descricao estao preenchidos
          if (!title.trim() || !description.trim()) {
            return alert("Preencha todos os campos");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white p-2 rounded-md px-4 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}
