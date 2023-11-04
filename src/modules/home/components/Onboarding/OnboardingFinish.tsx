import checkMark from '@assets/images/check-mark.svg';
import hanepyongJumping from '@assets/images/hanepyon-happy-jump.png';
import { Overlay } from '@mantine/core';

interface Props {
  text: string;
  background: string;
  withCheckMark?: boolean;
}

export default function OnboardingFinish({
  text,
  background,
  withCheckMark,
}: Props) {
  return (
    <div className="relative h-full w-full">
      {withCheckMark && (
        <div className="absolute z-[999] flex  h-full w-full flex-col items-center px-8 pt-20">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-hanepyon-blue bg-hanepyon-yellow font-bold text-hanepyon-blue">
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
        <h1 className="mt-8 text-center text-[2.5em] font-bold text-hanepyon-blue">
          {text}
        </h1>
      </div>
      <img className="h-full w-full" src={background} alt="Demo" />
      <Overlay color="#FFF" backgroundOpacity={0.5} blur={10} />
    </div>
  );
}
