import React from 'react';

const style = {
  display: 'inline-block',
  padding: '1rem',
  textAlign: 'center',
  margin: '1rem',
  border: '1px solid black'
}

const charComponent = (props) => {
  return (
    <li
      onClick={props.click}
      style={style}>{props.char}</li>
  )
};

export default charComponent;