import { useState } from 'react';

const Counter = () => {
  const [clicks, setClicks] = useState(0);
  const [factorOfFive, setfactorOfFive] = useState(false);



  const updateCounter = () => {
    let newCount = clicks + 1
    setClicks(newCount);
    setfactorOfFive(newCount % 5 === 0);
  }


  return (
  <>
      <h2 data-testid="counter">Button has been clicked {clicks} time(s)</h2>
        <h2 data-testid="factor">Factor of Five? {factorOfFive.toString()}</h2>
        <button onClick={updateCounter}>Update Clicks</button>
      </>
      )
}

      export default Counter
