import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header/index.jsx';
import { GlobalStyle } from './styles/Global/global.jsx';
import FormContainer from './components/Form/index.jsx';
import TaskItem from './components/TaskItem/index.jsx';
import api from './service/api.js';


function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async () => {
    const response = await api.get('task');
    console.log(response.data);
    setTasks(response.data);
     
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

const editTask = async (id) => {
  const editedTask = prompt('Edite sua task');
  const filteredTaskIndex = tasks.findIndex((task) => task.id === id);
   await api.put(`/${id}`, {
    ...tasks[filteredTaskIndex],
    nome: editedTask,
    status: false,
  });

  setTasks((prevTasks) => {
    const updatedTasks = [...prevTasks];
    updatedTasks[filteredTaskIndex].nome = editedTask;
    return updatedTasks;
  });
  console.log(tasks);

};

  const removeTask = async (id) => {
    await api.delete(`/${id}`);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    console.log(tasks); 
    
  };

  
  return (
    <div>
      <GlobalStyle />
      <Header />
      <FormContainer tasks={tasks} setTasks={setTasks} fetchTasks={fetchTasks} />
      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} removeTask={removeTask} editTask={editTask} />
        ))}
      </div>
    </div>
  );
}

export default App;
