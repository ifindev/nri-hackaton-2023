import checkMark from '@assets/images/check-mark.svg';
import hanepyongJumping from '@assets/images/hanepyon-happy-jump.png';
import usePlayAudio from '@auth/hooks/usePlayAudio/usePlayAudio.hook';
import { Overlay } from '@mantine/core';
import { useTimeout } from '@mantine/hooks';
import { ComponentPropsWithoutRef, useEffect } from 'react';

interface Props extends ComponentPropsWithoutRef<'div'> {
  text: string;
  background: string;
  audio: string;
  timeoutCallback: () => void;
  withCheckMark?: boolean;
  timeout?: number; // in milliseconds
}

export default function OnboardingSwipeFinish({
  text,
  background,
  withCheckMark,
  audio,
  timeout = 6_000,
  timeoutCallback,
  ...props
}: Props) {
  usePlayAudio(audio);
  const { start, clear } = useTimeout(timeoutCallback, timeout);

  useEffect(() => {
    start();
    return clear;
  }, [clear, start]);

  return (
    <div className="relative h-full w-full" {...props}>
      {withCheckMark && (
        <div className="absolute z-[999] flex  h-full w-full flex-col items-center px-8 pt-20">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-hanepyon-yellow font-bold text-hanepyon-blue">
            <img src={checkMark} alt="checkmark icon" />
          </div>
        </div>
      )}
      <div className="absolute z-[800] flex h-full w-full flex-col items-center pt-[63px]">
        <img
          className="m-0 p-0"
          height={440}
          src={hanepyongJumping}
          alt="Hanepyon jumping happily"
        />
        <h1 className="mt-8 text-center text-[2.5em] font-bold text-white">
          {text}
        </h1>
      </div>
      <img className="h-full w-full" src={background} alt="Demo" />
      <Overlay color="#000" opacity={1} blur={1} />
    </div>
  );
}
