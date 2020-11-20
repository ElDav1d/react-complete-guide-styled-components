import styled from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  margin: 1rem auto;
`;

export const StyledHeading = styled.div`
  color: ${props => props.textLength < 5 ? 'red' : 'green'};
  font-weight: ${props => props.textLength < 5 ? 'bold' : 'normal'};
`;
