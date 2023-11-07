import { useState } from 'react';
import InitScreen from './components/InitScreen';
import styled from 'styled-components';
import CustomizeButton from './components/CustomizeButton';
import RandomButton from './components/RandomButton';
import CustomizePage from './CustomizePage';
import RandomPage from './RandomPage';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [recommendationStart, setRecommendationStart] = useState(false);

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
    <MainView>
      {selectedOption ? (
        <>
          <InitScreen />
          <SelectedOption>{selectedOption}</SelectedOption>
          {((selectedOption === 'customize') && !recommendationStart ||
            (selectedOption === 'random') && !recommendationStart) ? (
            <>
              <button onClick={handleStart} type='button'>Start!</button>
              <button onClick={handleCancel} type='button'>돌아가기</button>
            </>
          ) : null}
          {recommendationStart && selectedOption === 'customize' ? <CustomizePage /> : null}
          {recommendationStart && selectedOption === 'random' ? <RandomPage /> : null}
        </>
      ) : (
        <>
          <InitScreen />
          <CustomizeButton handleCustomize={handleCustomize} />
          <RandomButton handleRandom={handleRandom} />
        </>
      )}
    </MainView>
  );
}

export default App;

const MainView = styled.div`
  text-align: center;
`

const SelectedOption = styled.h2`
`