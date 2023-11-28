import React from 'react';
import CustomizeMenu from './Customize/CustomizeMenu';
import RandomMenu from './Random/RandomMenu';

function RenderToSelect({ selectedOption, setRecommendationStart }) {
    return (
        <>
            {selectedOption === 'customize' ? (
                <CustomizeMenu setRecommendationStart={setRecommendationStart} />
            ) : selectedOption === 'random' ? (
                <RandomMenu setRecommendationStart={setRecommendationStart} />
            ) : null}
        </>
    );
}

export default RenderToSelect;
