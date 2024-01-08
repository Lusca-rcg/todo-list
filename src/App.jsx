import { useState, useEffect } from 'react';
import Header from './components/Header/index.jsx';
import { GlobalStyle } from './styles/Global/global.jsx';
import FormContainer from './components/Form/index.jsx';
import TaskItem from './components/TaskItem/index.jsx';
import api from './service/api.js';
import { v4 as uuid } from 'uuid';


function App() {
  
  useEffect(() => {
    api.post('task', {
      id: uuid(),
      nome: 'Pedro',
      status: false,
      descricao: 'dormindo'
    })
    //api.get('task')
  }, []); 

  
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskName: 'estudar react',
      status: false,
    },
    {
      id: 2,
      taskName: 'malhar',
      status: false,
    },
    {
      id: 3,
      taskName: 'dormir',
      status: true,
    },
  ]);
  
const editTask = (id) => {
  const newTasks = [...tasks];
  const editedTask = prompt('Edite sua task');

  const editedTaskIndex = newTasks.findIndex((task) => task.id === id);

  if (editedTaskIndex !== -1) {
      newTasks[editedTaskIndex] = {
          ...newTasks[editedTaskIndex],
          taskName: editedTask,
      };

      setTasks(newTasks);
      console.log(newTasks);
  }
};


  const removeTask = (id) => {
    const newTask = [...tasks];
    const filteredTasks = newTask.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };


  return (
    <div>
      <GlobalStyle />
      <Header />
      <FormContainer tasks={tasks} setTasks={setTasks} />
      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} removeTask={removeTask} editTask={editTask} />
        ))}
      </div>
    </div>
  );
}

export default App;
