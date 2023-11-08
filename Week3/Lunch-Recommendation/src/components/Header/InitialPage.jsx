import React, { useState } from 'react';
import SelectRecommendType from './components/SelectRecommendType';
import './style.css';
import RenderToSelect from './components/RenderToSelect';

const InitialPage = () => {
  const [recommendationStart, setRecommendationStart] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleReset = () => {
    setRecommendationStart(false);
    setSelectedOption(null);
  }

  return (
    <>
      <h1>😋 점메추 😋</h1>
      <button onClick={() => handleReset()} type='button'>처음으로</button>
      {recommendationStart ? (
        <RenderToSelect selectedOption={selectedOption} setRecommendationStart={setRecommendationStart} />
      ) : (
        <>
          <SelectRecommendType
            recommendationStart={recommendationStart}
            setRecommendationStart={setRecommendationStart}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </>
      )}
    </>
  );
}

export default InitialPage;
