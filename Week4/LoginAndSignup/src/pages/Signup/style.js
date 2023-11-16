import styled from 'styled-components';

export const Container = styled.div`
    width: 23rem;
    height: 25rem;
    line-height: 40px;
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
    color: var(--color-accent);
    padding: 2rem;
    font-weight: bold;
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
    &.pwd-error {
        margin-right: 1.5rem;
    }
    &.pwd-success > input {
        margin-right: 1.5rem;
        border-color: green;
    }
    &.nickname-field {
        margin-right: 4.35rem;
    }
`;

export const Input = styled.input`
    padding: 0.28rem;
    border-radius: 0.5rem;
    border: solid;
`;

export const CheckButton = styled.button`
    display: inline;
    margin: 0.5rem;
    border-radius: 0.7rem;
    padding: 0.28rem;
    font-weight: bold;
    border: solid;
    &.id-notExist {
        background-color: green;
    }
    &.id-exist {
        background-color: red;
    }
    &.none {
        background-color: black;
        color: var(--color-accent);
        font-weight: normal;
    }
`
export const SignUpBtn = styled.button`
    display: block;
    width: 60%;
    margin: auto;
    margin-top: 3rem;
    padding: 0.4rem;
    border-radius: 0.5rem;
    font-weight: bold;
    border: solid;
    text-align: center;
    background-color: var(--color-button-bg);
    color: var(--color-accent);
    &:hover {
        background-color: var(--color-accent);
        color: var(--color-button-bg);
        font-weight: bold;
    }
    &:disabled {
        opacity: 0.4;
        pointer-events: none; // disabled 되었을 땐 hover효과 없음
    }
`;
