import React from 'react'

function RetryButton({ setRecommendedMenu, setRecommendationStart }) {
    const handleRetry = () => {
        setRecommendedMenu('');
        setRecommendationStart(false);
    };

    return (
        <button type="button" onClick={handleRetry}>
            다시 해볼래
        </button>
    )
}

export default RetryButton