import React from 'react';
import CustomizeMenu from './CustomizeMenu';
import RandomMenu from './RandomMenu';

function RenderToSelect({ selectedOption, setRecommendationStart }) {
    return (
        <>
            {selectedOption === 'customize' ? (
                <>
                    <CustomizeMenu setRecommendationStart={setRecommendationStart} />
                </>
            ) : selectedOption === 'random' ? (
                <>
                    <RandomMenu setRecommendationStart={setRecommendationStart} />
                </>
            ) : null}
        </>
    );
}

export default RenderToSelect;
