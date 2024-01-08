import React from 'react';
import { useState, useEffect } from 'react';
import { Form } from './style.jsx';
import { Input } from './style.jsx';
import { Button } from './style.jsx';
import api from '../../service/api.js';
import { v4 as uuid } from 'uuid';

const FormContainer = ({ tasks, setTasks, fetchTasks }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle) return;
    AddTask(taskTitle);
  };

  useEffect(() => {
    console.log(taskTitle);
  }, [taskTitle]);

  const handleClick = async () => {
    const response = await api.post('task', {
      id: uuid(),
      nome: taskTitle,
      status: false,
    });

    setTasks((prevTasks) => [...prevTasks, response.data]);
    setTaskTitle('');
    console.log(tasks);
    fetchTasks();
   
  };

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