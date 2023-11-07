import React, { useState } from 'react';
import InitScreen from './components/InitScreen';
import RecommendationPage from './RecommendationPage';
import './App.css';

const App = () => {
  const [recommendationStart, setRecommendationStart] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <h1>😋 점메추 😋</h1>
      {recommendationStart ? (
        <RecommendationPage selectedOption={selectedOption} />
      ) : (
        <InitScreen
          recommendationStart={recommendationStart}
          setRecommendationStart={setRecommendationStart}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      )}
    </>
  );
}

export default App;
