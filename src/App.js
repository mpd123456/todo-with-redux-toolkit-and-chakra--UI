import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import store from './redux/store';
 import { Divider, Heading,Center } from '@chakra-ui/react'
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Heading style={{ textAlign: 'center' }}>TODO APP with REDUX && REDUX-TOOLKIT</Heading>
      <Filters />
      <Center height='70px'>
      <Divider orientation='vertical' />
      </Center>
     
      <TodoList />
    </div>
    </Provider>
  );
}

export default App;
