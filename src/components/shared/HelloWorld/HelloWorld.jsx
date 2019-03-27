import React from 'react';
import PropTypes from 'prop-types';
import style from './HelloWorld.css';

const HelloWorld = ({ title }) => (
  <div className={style['hello-world']}>{title}</div>
);

HelloWorld.propTypes = {
  title: PropTypes.string
};

export default HelloWorld;
