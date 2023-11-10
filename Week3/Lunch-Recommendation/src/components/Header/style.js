import styled from 'styled-components';
import '../../style/GlobalStyle'

export const Header = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  background-color: var(--header-background-color);
  padding: 1.3rem;
`;

export const Title = styled.h1`
  display: block;
  flex-grow: 1; 
  text-align: center; 
  font-size: 2.5rem;
  padding: 0.8;
  color: var(--font-color);
  background-color: var(--background-color);
`;

export const Contents = styled.div`
  display: block;
  color: var(--font-color);
  display: block;
  text-align: center;
  background-color: var(--section-background-color);
  height: 20rem;
  padding: 5rem 10rem 15rem 10rem;
  margin: 5rem 10em;
  border-radius: 3rem;
`;

export const ResetButton = styled.button`
  right: 10em;
  background-color: var(--button-background-color);
  transition: background-color 0.2s;
  padding: 0.5rem;

  &:hover {
    border-color: var(--button-background-color);
    background-color: var(--hover-color);
    color: white;
  }
`;
