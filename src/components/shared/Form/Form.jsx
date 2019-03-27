import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        onChange={e => setValue(e.target.value)}
        placeholder="Add a todo"
      />
    </form>
  );
};

Form.propTypes = {
  addTodo: PropTypes.func
};

export default Form;
