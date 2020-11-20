import styled from 'styled-components';
import React from 'react';

const StyledH2 = styled.h2`
  color: ${props => props.textLength < 5 ? 'red' : 'green'};
  font-weight: ${props => props.textLength < 5 ? 'bold' : 'normal'};
`;

const validationComponent = (props) => {
  return (
  <StyledH2 textLength={props.textLength}>
    {props.textLength < 5 ? 'Text too short' : 'Text long enough'}
  </StyledH2>
  )
};

export default validationComponent;