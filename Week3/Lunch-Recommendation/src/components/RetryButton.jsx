import React from 'react';

const RetryButton = ({ onClick, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            뒤로 가기
        </button>
    );
};

export default RetryButton;
