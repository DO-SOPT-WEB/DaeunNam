import styled from 'styled-components';

export const Container = styled.div`
    width: 23rem;
    height: 18rem;
    line-height: 40px;
    background-color: var(--color-bg);
    border-radius: 1rem;
    display: inline-block;
    flex-direction: column;
    -webkit-box-shadow: 0px 0px 17px 1px rgba(93,93,93,0.72); 
    box-shadow: 0px 0px 17px 1px rgba(93,93,93,0.72);
`;

export const PageTitle = styled.h3`
    text-align: center;
    font-size: 1.5rem;
    padding: 2rem;
    font-weight: bold;
`;

export const TextArea = styled.div`
    text-align: center;
    background-color: var(--color-light-pink);
    font-size: 1rem;
    font-weight: bold;
    padding: 0.2rem;
`;

export const Button = styled.button`
    display: block;
    width: 70%;
    margin-left: 3.5rem;
    margin-top: 1.5rem;
    padding: 0.4rem;
    border-radius: 0.5rem;
    border: solid;
    &:hover {
        background-color: var(--color-button-bg);
        color: var(--color-light-pink);
        font-weight: bold;
    }
`;
