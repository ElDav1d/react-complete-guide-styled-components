import React from 'react';
import { StyledHeading } from '../styles/styles'; 

const validationComponent = (props) => {
  let text = 'Text too short';
  if (props.textLength > 5) { text = 'Text long enough'; }

  return (
    <StyledHeading
      as="h2"
      textLength={props.textLength}>
        {text}
    </StyledHeading>
  )
};

export default validationComponent;