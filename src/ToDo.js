import React, { useState } from 'react';
import './App.css';
import Tooltip from '@mui/material/Tooltip';
import {Form,Button} from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';

function ToDo() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo,index) => index !== row));
  }

  return (
    <div className='App'>
    <div className='container'>
    <div id='todolist'>
    <Form>
    <h1 style={{textAlign:'left'}}>TODO LIST</h1>
    <Form.Group className="mb-3">
    <Form.Control placeholder="Please write here" name="description" value={todo.description} onChange={inputChanged} />
    <Form.Text className="text-muted">
    </Form.Text>
    </Form.Group>
    <h1 style={{textAlign:'left'}}>
    <Button variant="warning"  onClick={addTodo}>
    SAVE
    </Button>
    </h1>
      <table>
        <tbody>
       {
          todos.map((todo, index) => 
            <tr key={index}>
              <td>{index+1 + " . "}</td>
              <td>{todo.description }</td>
              <td>{ todo.date}</td>
            <Tooltip title="Delete">
             <td>
               {<DeleteIcon color="error" onClick={() => deleteTodo(index)} />}
             </td>
             </Tooltip>
            </tr>)
        }
        </tbody>
      </table>
      </Form>
      </div>
      </div>
      </div>
  );
}

export default ToDo;