import { useEffect, useRef, useState } from 'react';

export default function usePlayAudioManual(src: string) {
  const audioRef = useRef(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const playAudio = async () => {
      audioRef.current.volume = 1;
      await audioRef.current.play();
    };

    const pauseAudio = () => {
      audioRef.current.pause();
    };
    if (isPlaying) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      playAudio();
    }

    return pauseAudio;
  }, [isPlaying]);

  return { setIsPlaying, isPlaying };
}
