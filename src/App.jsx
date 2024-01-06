import { useState } from "react"
import Lista from "./components/ListaContainer"
import { GlobalStyle } from "./styles/Global/global"
import { HeaderContainer } from "./components/Header/style"

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
   <ContainerPai>
    <GlobalStyle/>
      <HeaderContainer>
        <h1>Todo List</h1>
      </HeaderContainer>
      <Tarefas>
        {tasks.map((task) => (
          <Lista task={task}/>
        ) )}
      </Tarefas>
    </ContainerPai>
  )}


export default App
