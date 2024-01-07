import { useState } from 'react';
import Header from './components/Header/index.jsx';
import { GlobalStyle } from './styles/Global/global.jsx';
import FormContainer from './components/Form/index.jsx';
import TaskItem from './components/TaskItem/index.jsx';


function App() {
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

  const editTask = (id) => {
    const newTask = tasks.map((task) =>
      task.id === id ? { ...task, taskName: newTaskName } : task
    );
    setTasks(newTask);

    alert( id);
  };

  const removeTask = (id) => {
    const newTask = [...tasks];
    const filteredTasks = newTask.filter((task) => task.id !== id);
    setTasks(filteredTasks);
    alert(id)
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
