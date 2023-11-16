import styled from 'styled-components';

export const Container = styled.div`
    line-height: 40px;
    width: 23rem;
    height: 25rem;
    background-color: var(--color-bg-dark);
    border-radius: 1rem;
    display: inline-block;
    flex-direction: column;
    box-shadow: 12px 15px 63px -1px rgba(0,0,0,0.81);
    -webkit-box-shadow: 12px 15px 63px -1px rgba(0,0,0,0.81);
    -moz-box-shadow: 12px 15px 63px -1px rgba(0,0,0,0.81);
`;

export const PageTitle = styled.h3`
    text-align: center;
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

`;

export const CheckButton = styled.button`
    display: inline;
    margin: 0.5rem;
    border-radius: 0.7rem;
    border: solid;
    &.id-notExist {
        background-color: green;
    }
    &.id-exist {
        background-color: red;
    }
`
export const SignUpBtn = styled.button`
    display: flex;
    width: 60%;
    margin: auto;
    margin-top: 3rem;
    padding: 0.3rem;
    border-radius: 0.7rem;
    border: solid;
    text-align: center;
`;
