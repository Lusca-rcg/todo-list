import { useState } from "react"
import Lista from "./components/ListaContainer"
import { GlobalStyle } from "./styles/Global/global"
import { HeaderContainer } from "./components/Header/style"
import styled from "styled-components"

// export const Tarefas = styled.div`
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `
// export const ContainerPai = styled.div`
//   display: flex;
//   align-content: center;
//   flex-direction: column;
//   justify-content: center;
//   border: solid 1px;

// `

function App() {
  const AddTask = (descricao) => {
    const newTask = [...tasks,
      {
        "id":Math.floor(Math.random() *10000),
        "descricao": descricao,
        "status": pendente
      }
    ]
    setTask(newTask);
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
