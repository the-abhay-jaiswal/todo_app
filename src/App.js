import { useEffect, useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel } from '@mui/material';
import { Todo } from './Todo';
import db from './firebase';
import firebase from 'firebase/compat/app';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, []);
  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Hello 😃</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Add a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}></Input>
        </FormControl>
        <Button disabled={!input} variant="contained" type='submit' onClick={addTodo}>Add</Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
