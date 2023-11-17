import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Toast = ({ error, setError, errMessage }) => {
    console.log("아무거");
    useEffect(() => {
        setTimeout(() => {
            setError(false);
        }, 2000);
    }, [error]);

    return createPortal(
        <ToastWrapper>
            <ToastMessage>{errMessage}</ToastMessage>
        </ToastWrapper>, document.getElementById("toast")
    );
};

export default Toast;

const ToastWrapper = styled.div`
    background-color: var(--color-light-pink);
    position: fixed;
    bottom: 11rem;
    right: 26rem;
    padding: 0.5rem;
    border-radius: 1rem;
`;

const ToastMessage = styled.div`
    color: var(--color-button-bg);
`;