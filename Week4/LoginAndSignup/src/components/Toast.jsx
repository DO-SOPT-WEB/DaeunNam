import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Toast = (error, setError, errMessage) => {
    console.log(error);
    useEffect(() => {
        const timer = setTimeout(() => {
            setError(false);
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, [error, setError]);

    return createPortal(
        <ToastWrapper>
            <ToastMessage>{errMessage}</ToastMessage>
        </ToastWrapper>
    );
};

export default Toast;

const ToastWrapper = styled.div`
    background-color: var(--color-bg);
    text-align: center;
`;

const ToastMessage = styled.div`
    
`;