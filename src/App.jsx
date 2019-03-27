import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/shared/Form';
import Todo from './components/shared/Todo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Hello Hooks</h1>
      <Form addTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <Todo
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            index={index}
            deleteTodo={deleteTodo}
            text={todo.text}
          />
        ))}
      </div>
    </div>
  );
};

export default hot(module)(App);
