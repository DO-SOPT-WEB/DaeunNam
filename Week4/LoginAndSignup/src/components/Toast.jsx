import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Toast = ({ error, setError, errMessage }) => {
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
    background-color: var(--color-bg);
    position: fixed;
    bottom: 11rem;
    right: 25rem;
    padding: 0.6rem;
    border-radius: 1rem;
`;

const ToastMessage = styled.div`
    color: black;
`;