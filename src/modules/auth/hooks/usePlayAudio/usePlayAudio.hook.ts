import { useEffect, useRef } from 'react';

export default function usePlayAudio(src: string) {
  const audioRef = useRef(new Audio(src));

  useEffect(() => {
    const playAudio = async () => {
      audioRef.current.volume = 1;
      await audioRef.current.play();
      console.log('playyy');
    };

    const pauseAudio = () => {
      audioRef.current.pause();
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    playAudio();

    return pauseAudio;
  }, []);
}
