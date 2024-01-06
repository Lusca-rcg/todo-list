import React from 'react'
import { useState } from 'react'
import { Form } from './styles.jsx/'
import { Input } from './styles/'
import { Button } from './styles/'

const FormContainer = ({AddTask}) => {

  const [taskName,setTask] = useState('') 

  const handlySubmit = (e) => {
    e.preventDefault()
    if(!taskName) return
      
      AddTodo(taskName)
      setTask('')
    
  }
  const handlyClick = () => {
    AddTodo(taskName)
  }
  return (

    <Form onSubmit = {handlySubmit}>
      <Input value={taskName} 
      type="text"
      placeholder ='Enter title'
      onChange = {(e) => setTask(e.target.value)}  />
      <Button onClick ={handlyClick}>ADD</Button>
    </Form>
  )
}

export default FormContainer 