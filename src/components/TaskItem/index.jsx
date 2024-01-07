import React from 'react';
import verificado from '../../assets/certo1.png';
import lapis from '../../assets/lapis.png';
import lixeira from '../../assets/lixeira.png';
import {ContainerPai, ContainerLista, ContainerListaItem, Img, Texto, ContainerListaFuncoes } from "./style.jsx";


const TaskItem = ({task,removeTask, editTask}) => {
  return (
    <ContainerPai>
     <ContainerLista>
        <ContainerListaItem> 
          <Img src={verificado} alt="" /> 
          <Texto>{task.taskName}</Texto> 
        </ContainerListaItem>
      </ContainerLista>
      <ContainerLista>
        <ContainerListaFuncoes>
          <Img onClick={() => editTask(task.id)} src={lapis} alt="" />
          <Img onClick={() => removeTask(task.id)} src={lixeira} alt="" />
        </ContainerListaFuncoes>
      </ContainerLista>

    </ContainerPai>
    
  )
}

export default TaskItem