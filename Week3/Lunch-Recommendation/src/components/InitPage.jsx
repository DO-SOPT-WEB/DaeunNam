import React from 'react';
import RecommendTypeButton from './RecommendTypeButton';
function InitPage({ recommendationStart, setRecommendationStart, selectedOption, setSelectedOption }) {

    const handleStart = () => {
        setRecommendationStart(true);
    };

    const handleCancel = () => {
        setRecommendationStart(false);
        setSelectedOption(null);
    };

    const handleCustomize = () => {
        setRecommendationStart(false);
        setSelectedOption('customize');
    };

    const handleRandom = () => {
        setRecommendationStart(false);
        setSelectedOption('random');
    };

    return (
        <>
            <h2>원하는 추천 방식을 골라줘!</h2>
            {selectedOption ? (
                <>
                    <h3>{selectedOption}</h3>
                    {!recommendationStart ? (
                        <>
                            <button onClick={() => handleStart()} type='button'>Start!</button>
                            <button onClick={() => handleCancel()} type='button'>돌아가기</button>
                        </>
                    ) : null}
                </>
            ) : (
                <>
                    <RecommendTypeButton
                        setselectedOption={setSelectedOption}
                        handleCustomize={handleCustomize}
                        handleRandom={handleRandom}
                        setRecommendationStart={setRecommendationStart} />
                </>
            )}
        </>
    );
}

export default InitPage;
