import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TitleH1 from "./components/TitleH1";
// import Test from "./components/Test";

import "./index.css";
import { v4 } from "uuid";

export default function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // USANDO API --------------------------------------------
  // MUITO IMPORTANTE - Sempre que passarmos uma lista vazia [], ao criar o useEffect,
  // ele vai executar apenas uma vez, e essa uma vez é quando o usuario acessa a aplicacao.
  useEffect(() => {
    // PODE SER function ou como esta abaixo em arrow function  "async function fetchTasks() { "
    const fetchTasks = async () => {
      // Chamar a API (Axios ou o proprio fetch do javascript)
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        { method: "GET" }
      );

      // Pegar os dados que a API retorna
      const data = await response.json();
      console.log(data);

      // Armazenar/persistir os dados no State
      setTasks(data);
    };
    fetchTasks();
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // PRECISO ATUALIZAR ESTA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      // NAO PRECISO ATUALIZAR ESTA TAREFA
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => {
      console.log(task);
      if (task.id !== taskId) {
        return task;
      }
    });
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTasks = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        {/* <Test /> */}
        <TitleH1>Gerenciador de Tarefas</TitleH1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}
