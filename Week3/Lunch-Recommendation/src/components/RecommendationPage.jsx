import React from 'react';
import CustomizePage from './CustomizePage';
import RandomPage from './RandomPage';

function RecommendationPage({ selectedOption, setRecommendationStart }) {
    return (
        <>
            {selectedOption === 'customize' ? (
                <>
                    <CustomizePage setRecommendationStart={setRecommendationStart} />
                </>
            ) : selectedOption === 'random' ? (
                <>
                    <RandomPage setRecommendationStart={setRecommendationStart} />
                </>
            ) : null}
        </>
    );
}

export default RecommendationPage;
