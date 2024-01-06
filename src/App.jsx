import { useState } from "react"
import Lista from "./components/ListaContainer"
import { GlobalStyle } from "./styles/Global/global"
import { HeaderContainer } from "./components/Header/style"

function App() {
  const AddTask = (descricao) => {
    const newTask = [...tasks,
      {
        "id":Math.floor(Math.random() *10000),
        "descricao": descricao,
        "status": pendente
      }
    ]
    setTask(newTask)
  }
  
  const editTask = (id, newDescricao) => {
    const newTask = todos.map((task) => 
    task.id === id ? {...task, descricao: newDescricao} : task
    ) ;
    setTask(newTask) 
  }





  const [tasks,setTask] = useState([
    {
      id:1,
      taskName:'estudar react'
    },
    {
      id:2,
      taskName:'malhar'
    },
    {
      id:3,
      taskName:'dormir'
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
