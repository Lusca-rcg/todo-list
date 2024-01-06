import React from "react"
import verificado from '../../assets/certo.png'
import lapis from '../../assets/lapis.png'
import lixeira from '../../assets/lixeira.png'
import { ContainerPai, ContainerLista, ContainerListaItem, Img, Texto, ContainerListafuncoes } from "./style"


// import React from 'react'
// import verificado from '../../assets/certo.png'
// import lapis from '../../assets/lapis.png'
// import lixeira from '../../assets/lixeira.png'
// import { ContainerListaItem, ContainerPai, Img, ContainerListafuncoes, Texto  } from './styles'
// import { ContainerLista } from './styles'



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
        <ContainerListafuncoes>
          <Img onClick={() => editTask(task.id)} src={lapis} alt="" />
          <Img onClick={() => removeTask(task.id)} src={lixeira} alt="" />
        </ContainerListafuncoes>
      </ContainerLista>

    </ContainerPai>
    
  )
}

export default TaskItem