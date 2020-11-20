import React from 'react';
import { StyledHeading } from '../styles/styles'; 

const validationComponent = (props) => {
  return (
  <StyledHeading as="h2" textLength={props.textLength}>
    {props.textLength < 5 ? 'Text too short' : 'Text long enough'}
  </StyledHeading>
  )
};

export default validationComponent;