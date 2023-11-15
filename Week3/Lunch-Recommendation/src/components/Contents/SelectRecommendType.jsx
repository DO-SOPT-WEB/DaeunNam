import React from 'react';
import RecommendTypeButton from './RecommendTypeButton';
import * as S from './style';

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
            <S.SelectOptionText>원하는 추천 방식을 골라줘!</S.SelectOptionText>
            {!recommendationStart && selectedOption !== "" ? (
                <>
                    <S.SelectedOption>
                        {selectedOption === 'customize' ? '골라 먹을래' : '아무거나 먹을래'}
                    </S.SelectedOption>
                    <S.Start>
                        <button onClick={handleStart} type='button'>Start!</button>
                    </S.Start>
                </>
            ) : !recommendationStart && selectedOption === "" && (
                <RecommendTypeButton
                    setSelectedOption={setSelectedOption}
                    handleCustomize={handleCustomize}
                    handleRandom={handleRandom}
                    setRecommendationStart={setRecommendationStart}
                />
            )}
        </>
    );
}

export default SelectRecommendType;
