import { useState } from 'react';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/style/index.css'

import { List } from './components/List'
import { Item } from './components/Item'

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  const text = useRef()

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setTodos([
      ...todos,
      {
        id: todos.at(-1)?.id + 1 || 1,
        isCompleated: false,
        text: text.current.value
      }
    ])

    console.log(todos.length);

    text.current.value = '';

    toast('Todo added!')
  }
  console.log();

  localStorage.setItem('todos', JSON.stringify(todos));

  return (
    <div className="App">
      <h1 className='text-center fw-bold my-5'>Todo...</h1>
      <form className='w-50 mx-auto' onSubmit={handleSubmit}>
        <div className='btn-group w-100'>
          <input required className='form-control' type="text" placeholder='What you have to do?' ref={text} />
          <button className='btn btn-success' type="submit">Add</button>
        </div>
      </form>
      {
        todos.length ? (
        <List>
          {
            todos.map(item =>
              <Item
                key={item.id}
                id={item.id}
                todos={todos}
                setTodos={setTodos}
                text={item.text}
                isCompleated={item.isCompleated} />
            )
          }
        </List>
        ) : (
          <h2 className='text-center mt-5'>No todos.</h2>
        )
      }
      
      <ToastContainer />
    </div>
  );
}

export default App;
