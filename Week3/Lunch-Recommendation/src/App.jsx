import React, { useState } from 'react';
import InitPage from './components/InitPage';
import RecommendationPage from './components/RecommendationPage';
import './App.css';

const App = () => {
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
        <RecommendationPage selectedOption={selectedOption} setRecommendationStart={setRecommendationStart} />
      ) : (
        <>
          <InitPage
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

export default App;
