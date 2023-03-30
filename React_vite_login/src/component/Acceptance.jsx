import React from 'react'
import { useEffect,useState } from 'react';

function Acceptance() {

  const [counter, setCounter] = useState(0);
 //const [counter1, setCounter1] = useState(0);

  // 👇️ your condition here
  
  useEffect(() => {
    if (Math.random() > 0.1) {
      setCounter(counter + 1);
      console.log("aa")
    }
  }, [0]);

  return (
    <div>{counter}</div>
  )
}

export default Acceptance