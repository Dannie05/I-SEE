import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      animationData: animationData,
      renderer: 'svg', // Choose the appropriate renderer based on your animation type
      loop: true, // Set to true if you want the animation to loop
      autoplay: true, // Set to true if you want the animation to start automatically
    });

    return () => {
      anim.destroy(); // Clean up the animation when the component unmounts
    };
  }, [animationData]);

  return <div ref={containerRef}></div>;
};

export default LottieAnimation;
