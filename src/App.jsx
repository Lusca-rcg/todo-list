import { useState, useEffect } from 'react';
import Header from './components/Header/index.jsx';
import { GlobalStyle } from './styles/Global/global.jsx';
import FormContainer from './components/Form/index.jsx';
import TaskItem from './components/TaskItem/index.jsx';
import api from './service/api.js';


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getData(){
      const res = await api.get('task')
      console.log(res.data)
      setTasks(res.data)
    }
    getData()
  },[tasks])
  
  const editTask = (id) => {
  const editedTask = prompt('Edite sua task');
  const filteredTask = tasks.findIndex((task) => task.id === id )
    api.put(`${id}`, {
      ...tasks[filteredTask],
      nome: editedTask,
      status: false
    })
};

  const removeTask = (id) => {
   api.delete(`/${id}`)
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
