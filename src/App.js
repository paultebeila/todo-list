import React, { useState} from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/todoList';

function App() {

  const [plan, setPlan] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
       <Form plan={plan} todo={todos} setTodo={setTodos} setPlan={setPlan} />
       <TodoList todos={todos} setTodos={setTodos} />
      </header>

      
    </div>
  );
}

export default App;
