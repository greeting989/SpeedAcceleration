import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import style from './Calculator.css';

const Button = style.button`
  background-color: ${props => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${props => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;
Button.defaultProps = {
    theme: "blue"
  };
  
  function clickMe() {
    alert("You clicked me!");
  }

  export default clickMe;