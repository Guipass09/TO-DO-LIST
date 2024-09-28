import React from "react";
import { useState } from "react";
import './TodoList.css';

function TodoList(){
    const[inputText, setInputText] = useState('');

    const[tasks, setTasks] = useState([]);

    const handleAddTaks = () => {
        if (inputText.trim() !== '') {
            setTasks([...taks, inputText]);
            setInputText('');
        }
    };

    const handleEditTask = (index) => {
        const newTask = prompt("Edite a tarefa:", tasks[index]);
        if (newTask !== null && newTask.trim() !== ''){
        setTasks(tasks.map((task, i) => i === index ? newTask : task));
        }
    };

   const handleDeleteTask = (index) => {
    if(window.confirm("tem certeza que deseja deletar esta tarefa?")) {
    setTasks(tasks.filter((_, i) => i !== index));
    }
   };

    return (
        <div>
        <h1>Lista de Tarefas</h1>
        <input 
        type="text" 
        placeholder="Adicione a tarefassssssssssssssssss" 
        value={inputText} 
        onChange={(e)=> setInputText(e.target.value)}
        />
        <button
        onClick={() => {
            setTasks([...tasks,inputText]);
            setInputText('');
        }}
        
        >
        Adicionar
        </button>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}
                <button onClick={() => handleEditTask(index)}>Editar</button>
                <button onClick={() => handleDeleteTask(index)}>Deletar</button>
                </li>
            ))}
        </ul>
        </div>
    );
        
    
}

export default TodoList
