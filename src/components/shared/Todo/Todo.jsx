/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, index, deleteTodo }) => (
  <h4 onClick={() => deleteTodo(index)}>{text}</h4>
);

Todo.propTypes = {
  text: PropTypes.string,
  index: PropTypes.number,
  deleteTodo: PropTypes.func
};

export default Todo;
