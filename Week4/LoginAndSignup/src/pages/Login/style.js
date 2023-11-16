import styled from 'styled-components';

export const Container = styled.div`
    width: 23rem;
    height: 25rem;
    background-color: var(--color-bg);
    border-radius: 1rem;
    display: inline-block;
    flex-direction: column;
    box-shadow: 12px 15px 63px -1px rgba(0,0,0,0.81);
    -webkit-box-shadow: 12px 15px 63px -1px rgba(0,0,0,0.81);
    -moz-box-shadow: 12px 15px 63px -1px rgba(0,0,0,0.81);
`;

export const PageTitle = styled.h3`
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 2rem;
    margin-bottom: 1rem;
    color: var(--color-accent);
`;

export const InputContainer = styled.div`
    line-height: 40px;  
`;

export const ButtonContainer = styled.div`
    display: block;
    margin-left: 4rem;
    margin-top: 3rem;
`;

export const Field = styled.div`
    display: inline;
    margin-right: 1.5rem;
    margin-left: 2rem;
    &.id-field {
        margin-right: 6rem;
    }
    &.pwd-field {
        margin-right: 3.5rem;
    }
`;

export const Button = styled.button`
    display: block;
    width: 70%;
    margin: 1rem;
    padding: 0.4rem;
    border-radius: 0.5rem;
    font-weight: bold;
    border: solid;
    background-color: var(--color-button-bg);
    color: var(--color-accent);
    &:hover {
        background-color: var(--color-accent);
        color: var(--color-button-bg);
        font-weight: bold;
    }
`;

export const SignUpBtn = styled.button`
    display: block;
    width: 70%;
    margin: 1rem;
    padding: 0.4rem;
    border-radius: 0.5rem;
    font-weight: bold;
    border: solid;
    text-align: center;
    &:hover {
        background-color: #000000;
        color: #FF1493;
        font-weight: bold;
    }
`;