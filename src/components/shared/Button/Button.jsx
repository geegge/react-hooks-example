import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  return (
    <button type="button" name="button">
      Hello, {name}!
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string
};

export default Button;
