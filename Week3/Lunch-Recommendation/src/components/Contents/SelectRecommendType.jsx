import React from 'react';
import RecommendTypeButton from './RecommendTypeButton';
import {
    SelectOptionText,
    SelectedOption,
    Start,
} from './style';

function SelectRecommendType({ recommendationStart, setRecommendationStart, selectedOption, setSelectedOption }) {

    const handleStart = () => {
        setRecommendationStart(true);
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
            <SelectOptionText>원하는 추천 방식을 골라줘!</SelectOptionText>
            {selectedOption ? (
                <>
                    {selectedOption === 'customize' ? (
                        <SelectedOption>골라 먹을래</SelectedOption>
                    ) : (
                        <SelectedOption>아무거나 먹을래</SelectedOption>
                    )}
                    {!recommendationStart ? (
                        <Start>
                            <button onClick={() => handleStart()} type='button'>Start!</button>
                        </Start>
                    ) : null}
                </>
            ) : (
                <>
                    <RecommendTypeButton
                        setSelectedOption={setSelectedOption}
                        handleCustomize={handleCustomize}
                        handleRandom={handleRandom}
                        setRecommendationStart={setRecommendationStart} />
                </>
            )}
        </>
    );
}

export default SelectRecommendType;
