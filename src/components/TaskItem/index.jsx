import React from 'react';
import verificado from '../../assets/certo1.png';
import lapis from '../../assets/lapis.png';
import pending from '../../assets/false.png';
import lixeira from '../../assets/lixeira.png';
import {Container, ContainerList, ContainerListItem, Img, TaskElement, ContainerListElement } from "./style.jsx";


const TaskItem = ({task, removeTask, editTask, changeStatus}) => {
  return (
    <Container>
     <ContainerList>
        <ContainerListItem> 
         
          <TaskElement>{task.nome}</TaskElement> 
        </ContainerListItem>
      </ContainerList>
      <ContainerList>
        <ContainerListElement>
          <Img onClick={() => editTask(task.id)} src={lapis} alt="Imagem de um lapis" />
          <Img onClick={() => removeTask(task.id)} src={lixeira} alt="Imagem de uma lixeira " />
           {task.status 
            ? <Img onClick={() => changeStatus(task.id) } src={verificado} alt="Imagem de um 'certo' " /> 
            : <Img onClick={() => changeStatus(task.id) } src={pending} alt="Imagem de um 'X' "/> 
          }
        </ContainerListElement>
      </ContainerList>

    </Container>
    
  )
}

export default TaskItem