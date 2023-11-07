import { useState } from 'react';
import InitScreen from './components/InitScreen';


const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleStart = () => {
    setSelectedOption(null);
  };

  const handleCancel = () => {
    setSelectedOption(null);
  };

  return (
    <>
      {selectedOption ? (
        <>
          <InitScreen />
          <h2>{selectedOption}</h2>
          <button onClick={handleStart} type='button'>Start!</button>
          <button onClick={handleCancel} type='button'>돌아가기</button>
        </>
      ) : (
        <>
          <InitScreen />
          <button onClick={() => handleSelect('골라 먹을래')}>골라 먹을래</button>
          <button onClick={() => handleSelect('아무거나 먹을래')}>아무거나 먹을래</button>
        </>
      )}
    </>
  );
}

export default App;
