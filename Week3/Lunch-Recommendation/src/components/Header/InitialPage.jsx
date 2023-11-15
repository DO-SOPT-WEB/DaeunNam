import React, { useState } from 'react';
import SelectRecommendType from '../Contents/SelectRecommendType';
import RenderToSelect from '../Contents/RenderToSelect';
import * as S from './style';

const InitialPage = () => {
  const [recommendationStart, setRecommendationStart] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleReset = () => {
    setRecommendationStart(false);
    setSelectedOption(null);
  }

  return (
    <>
      <S.Header>
        <S.Title>😋🍛 점메추 🍛😋</S.Title>
        {selectedOption ? (
          <S.ResetButton onClick={() => handleReset()} type='button'>처음으로</S.ResetButton>
        ) : null}
      </S.Header>
      <S.Contents>
        {recommendationStart ? (
          <RenderToSelect selectedOption={selectedOption} setRecommendationStart={setRecommendationStart} />
        ) : (
          <SelectRecommendType
            recommendationStart={recommendationStart}
            setRecommendationStart={setRecommendationStart}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        )}
      </S.Contents>
    </>
  );
}

export default InitialPage;
