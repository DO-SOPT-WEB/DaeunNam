import React from 'react';
import CustomizeButton from './CustomizeButton';
import RandomButton from './RandomButton';

function InitScreen({ recommendationStart, setRecommendationStart, selectedOption, setSelectedOption }) {

    const handleStart = () => {
        setRecommendationStart(true);
    };

    const handleCustomize = () => {
        setSelectedOption('customize');
    };

    const handleRandom = () => {
        setSelectedOption('random');
    };

    const handleCancel = () => {
        setRecommendationStart(false);
        setSelectedOption(null);
    };

    return (
        <>
            <h2>원하는 추천 방식을 골라줘!</h2>
            {selectedOption ? (
                <>
                    <h3>{selectedOption}</h3>
                    {((selectedOption === 'customize' || selectedOption === 'random') && !recommendationStart) ? (
                        <>
                            <button onClick={handleStart} type='button'>Start!</button>
                            <button onClick={handleCancel} type='button'>돌아가기</button>
                        </>
                    ) : null}
                </>
            ) : (
                <>
                    <CustomizeButton handleCustomize={handleCustomize} />
                    <RandomButton handleRandom={handleRandom} />
                </>
            )}
        </>
    );
}

export default InitScreen;
