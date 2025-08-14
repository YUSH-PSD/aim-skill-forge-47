import { useState, useEffect } from 'react';

interface UseAutoSwapOptions {
  itemCount: number;
  interval?: number;
  autoStart?: boolean;
}

export const useAutoSwap = ({ 
  itemCount, 
  interval = 4000, 
  autoStart = true 
}: UseAutoSwapOptions) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoStart);

  useEffect(() => {
    if (!isPlaying || itemCount <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
    }, interval);

    return () => clearInterval(timer);
  }, [itemCount, interval, isPlaying]);

  const goToIndex = (index: number) => {
    setCurrentIndex(index % itemCount);
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
  };

  const previous = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? itemCount - 1 : prevIndex - 1
    );
  };

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);
  const toggle = () => setIsPlaying(!isPlaying);

  return {
    currentIndex,
    isPlaying,
    goToIndex,
    next,
    previous,
    play,
    pause,
    toggle,
  };
};