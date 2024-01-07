import React from 'react';
import { useState, useEffect } from 'react';
import { Form } from './style.jsx';
import { Input } from './style.jsx';
import { Button } from './style.jsx';

const FormContainer = ({tasks, setTasks}) => {

  const [taskTitle,setTaskTitle] = useState('') 

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!taskTitle) return
      AddTask(taskTitle)
  }

   useEffect(() => {
    console.log(taskTitle)
   }, [taskTitle]) 

  const handleClick = () => {
    setTasks([...tasks, {id: Math.random() ,taskName: taskTitle}]);
    setTaskTitle('');
    console.log(tasks);
  }

  return (
    <Form onSubmit = {handleSubmit}>
      <Input value={taskTitle} 
      type="text"
      placeholder ='Tarefas...'
      onChange = {(e) => setTaskTitle(e.target.value)}  />
      <Button onClick ={handleClick}>ADD</Button>
    </Form>
  )
}

export default FormContainer 