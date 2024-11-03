//* AddTaskForm.jsx: Crearemos un input que recoja el valor y añada las tarea al resto de tareas.
import {useState} from 'react';

const AddTaskForm = ({addTask}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //verifica q no este vacio,cuando tiene contenid elimina los vacios para llamr a `addTask`
    if (inputValue.trim()) {
      addTask(inputValue);
      //despues de agregar; vacia el cmpo dspues que agrega la tarea
      setInputValue(''); 
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Agregar nueva tarea" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button type="submit">Agregar</button>
    </form>
    </>
  );
};
export default AddTaskForm;
