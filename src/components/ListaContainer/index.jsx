import React from 'react'
import { ListaItem } from './style'


const Lista = ({task}) => {
  return (
    <div>
        <ul>
            <ListaItem>{task.taskName}</ListaItem>
        </ul>
      
    </div>
  )
}

export default Lista
