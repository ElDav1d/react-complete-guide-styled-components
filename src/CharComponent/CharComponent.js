import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  display: inline-block;
  padding: 1rem;
  text-align: center;
  margin: 1rem;
  border: 1px solid black;
`;

const charComponent = (props) => {
  return (
    <StyledLi onClick={props.click}>
       {props.char}
    </StyledLi>
  )
};

export default charComponent;