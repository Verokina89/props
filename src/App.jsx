import {useState} from 'react'
// import AddTaskForm from './components/AddTaskForm'
// import Task from './components/Task'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  //agregar tarea
  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text: text,
      complete:false
    };
    setTasks([...tasks,newTask])
  };

  //eliminar tarea
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => 
      task.id !== taskId
    ))
  };

  //marcar tarea realizada
  const toggleComplete = (taskId) => {
    setTasks(task.map(task =>
      task.id === taskId ? {...task, completed: !task.completed} : task
    ))
  }

  return (
    <>
    <h1>Lista de Tareas</h1>

    </>
  );
};

export default App;
