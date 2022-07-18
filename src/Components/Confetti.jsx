import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const ConfettiJsx = () => {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      numberOfPieces={50}
      colors={['#ffdf00', '#c0c0c0']}
      tweenDuration={10000}
    />
  );
};

export default ConfettiJsx;
