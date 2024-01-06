import { useState } from 'react';
import Header from './components/Header/index.jsx';
import { GlobalStyle } from './styles/Global/global.jsx';
import FormContainer from './components/Form/index.jsx';
import TaskItem from './components/TaskItem/index.jsx';


function App() {
  const addTask = (taskName) => {
    const newTask = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000),
        taskName: taskName,
        status: 'pendente', // Corrigido a variável de status
      },
    ];
    setTasks(newTask);
  };

  const editTask = (id, newTaskName) => {
    const newTask = tasks.map((task) =>
      task.id === id ? { ...task, taskName: newTaskName } : task
    );
    setTasks(newTask);
  };

  const removeTask = (id) => {
    const newTask = [...tasks];
    const filteredTasks = newTask.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskName: 'estudar react',
      status: 'concluido',
    },
    {
      id: 2,
      taskName: 'malhar',
      status: 'em andamento',
    },
    {
      id: 3,
      taskName: 'dormir',
      status: 'pendente',
    },
  ]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <FormContainer addTask={addTask} />
      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} removeTask={removeTask} editTask={editTask} />
        ))}
      </div>
    </div>
  );
}

export default App;
