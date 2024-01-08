import React from 'react';
import verificado from '../../assets/certo1.png';
import lapis from '../../assets/lapis.png';
import pending from '../../assets/false.png';
import lixeira from '../../assets/lixeira.png';
import {Container, ContainerList, ContainerListItem, Img, TaskElement, ContainerListElement } from "./style.jsx";


const TaskItem = ({task,removeTask, editTask}) => {
  return (
    <Container>
     <ContainerList>
        <ContainerListItem> 
          {task.status 
          
          ? <Img src={verificado} alt="" /> 
          : <Img src={pending} /> 
        }
          <TaskElement>{task.nome}</TaskElement> 
        </ContainerListItem>
      </ContainerList>
      <ContainerList>
        <ContainerListElement>
          <Img onClick={() => editTask(task.id)} src={lapis} alt="" />
          <Img onClick={() => removeTask(task.id)} src={lixeira} alt="" />
        </ContainerListElement>
      </ContainerList>

    </Container>
    
  )
}

export default TaskItem