// Task.jsx:Aquí tendremos cada una de las tareas con las funcionalidades de borrar y marcar como completada.
const Task = ({task, deleteTask, toggleComplete}) => {
  return (
    <>
    <li>
        <span 
            onClick={() => toggleComplete(task.id)} 
            style={{
                textDecoration: task.complete ? 'line-through' : 'none', 
                cursor:'pointer'
            }}
        >
            {task.text}
        </span>

      <button onClick={() => deleteTask(task.id)}>Borrar</button>
    </li>
    </>
  );
};

export default Task;
