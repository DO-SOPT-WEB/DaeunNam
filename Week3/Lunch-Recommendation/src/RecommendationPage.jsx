import React from 'react';
import CustomizePage from './CustomizePage';
import RandomPage from './RandomPage';

function RecommendationPage({ selectedOption }) {
    return (
        <>
            {selectedOption === 'customize' ? (
                <CustomizePage />
            ) : selectedOption === 'random' ? (
                <RandomPage />
            ) : null}
        </>
    );
}

export default RecommendationPage;
