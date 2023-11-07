import { useState } from 'react';
import InitScreen from './components/InitScreen';
import styled from 'styled-components';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleStart = (option) => {
    setSelectedOption(option);
  };

  const handleCancel = () => {
    setSelectedOption(null);
  };

  return (
    <MainView>
      {selectedOption ? (
        <>
          <InitScreen />
          <SelectedOption>{selectedOption}</SelectedOption>
          <button onClick={() => handleStart(selectedOption)} type='button'>Start!</button>
          <button onClick={handleCancel} type='button'>돌아가기</button>
        </>
      ) : (
        <>
          <InitScreen />
          <button onClick={() => handleSelect('골라 먹을래')}>골라 먹을래</button>
          <button onClick={() => handleSelect('아무거나 먹을래')}>아무거나 먹을래</button>
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
