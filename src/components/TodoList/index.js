import { Select, Input, Button, Box,Stack } from '@chakra-ui/react'
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
import { todosRemainingSelector } from '../../redux/selectors';
import todoSlice from './todoSlice';

export default function TodoList() {
  const [todoName, setTodoName] = useState()
  const [priority, setPriority] = useState('Medium')
  const todoList = useSelector(todosRemainingSelector)
  // const searchText=useSelector(searchTextSelector)
  const dispatch = useDispatch()
  const handleAddButtonClick = () => {
    // dispatch(addTodo({
    //   id: uuidv4(),
    //   name:todoName,
    //   priority: priority,
    //   completed: false,
    // }))
    dispatch(todoSlice.actions.addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false,
    }))
    setTodoName('')
    setPriority('Medium')
  }
  const handleInputChange = (e) => {
    // e.target.value
    console.log('handleInputChange', e.target.value)
    setTodoName(e.target.value)
  }

  const handleProrityChange = (e) => {
    setPriority(e.target.value)
  }
  return (
    <>
      <Box span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => <Todo key={todo.id} id={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} />)}
      </Box>
     
        <Stack direction='row' >
          <Input width='1200px' value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handleProrityChange}>
            <option value='High' label='High'>
              High
            </option>
            <option value='Medium' label='Medium'>
              Medium
            </option>
            <option value='Low' label='Low'>
              Low
            </option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Stack>
      </>
  );
}
