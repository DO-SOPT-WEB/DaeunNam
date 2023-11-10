import styled from 'styled-components';
import '../../index.css';

export const RandomSection = styled.div`
    background-color: var(--section-background-color);
`;

export const CountDown = styled.h2`
  text-align: center;
  font-size: 3rem;
`;

export const ReturnMenu = styled.h3`
  font-size: 2rem;
`;

export const SelectOptionText = styled.div`
    font-size: 1.5rem;
    padding: 2rem;
    font-weight: bold;
`;

export const SelectedOption = styled.h3`
    display: inline-block;
    background-color: var(--entire-background-color);
    color: var(--section-background-color);
    border-radius: 1rem;
    padding: 6.5rem;
    margin: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    border: 2px solid transparent;
`;

export const Start = styled.div`

`;

export const button = styled.div`
    display: inline-block;
    background-color: var(--entire-background-color);
    color: var(--section-background-color);
    border-radius: 1rem;
    padding: 5rem;
    margin: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    border: 2px solid transparent;

  &:hover {
    background-color: var(--header-background-color);
    color: var(--font-color);
    border: 2px solid var(--font-color);
  }
`;
