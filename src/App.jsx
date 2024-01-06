import { useState } from 'react';
import Header from './components/Header/index';
import { HeaderConteiner } from './components/Header/styles';
import GlobalStyle from './styles/global';
import FormContainer from './components/form/index';
import TaskItem from './components/TaskItem';

function App() {
  const AddTask = (taskName) => {
    const newTask = [...tasks,
      {
        "id":Math.floor(Math.random() *10000),
        "task": taskName,
        "status": pendente
      }
    ]
    setTask(newTask)
  }
  
  const editTask = (id, newTaskName) => {
    const newTask = todos.map((task) => 
    task.id === id ? {...task, taskName: newTaskName} : task
    ) ;
    setTask(newTask) 
  }

  const removeTask = (id) => {
    const newTask = [...task]
    const filter = newTask.filter((task) => task.id !== id)
    setTask(filter)
  }

  const [tasks,setTask] = useState([
    {
      id:1,
      taskName:'estudar react',
      status: 'concluido'
    },
    {
      id:2,
      taskName:'malhar',
      status: 'em andamento'
    },
    {
      id:3,
      taskName:'dormir',
      status: 'pendente'
    }
  ])

  return (
    <div>
    <GlobalStyle/>
    <Header/>
    <FormContainer AddTask={AddTask}/>
  <div>
    {tasks.map((task) => (
    <TaskItem key={task.id} task={task} removeTask={removeTask} editTask={editTask}/>
    )
    )}
  </div>
  </div>
  )
}


export default App
