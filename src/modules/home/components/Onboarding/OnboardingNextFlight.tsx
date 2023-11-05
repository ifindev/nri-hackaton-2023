import nextFlight from '@assets/audios/6-flight-time.mp3';
import hanepyongCurious from '@assets/images/hanepyong-curious.png';
import landingBg from '@assets/images/landing.png';
import usePlayAudio from '@auth/hooks/usePlayAudio/usePlayAudio.hook';
import { Overlay } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';

export default function OnboardingNextFlight() {
  usePlayAudio(nextFlight);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="relative h-full w-full">
      <div className="absolute z-[999] flex  h-full w-full flex-col items-center">
        <img
          width={360}
          height={308}
          src={hanepyongCurious}
          alt="Hanepyon looking curious"
        />
        <div className="w-full px-6">
          <h2 className="mt-5 text-center text-[2.5em] font-bold leading-[48px] text-hanepyon-blue">
            Anyway, when is
            <br />
            your next flight?
          </h2>
          <h2 className="mt-[3.75rem] text-center text-[2.5rem] font-bold leading-[3rem] text-hanepyon-blue">
            in
          </h2>
          <div className="mt-6 flex h-[6.125rem] w-full items-center gap-0 overflow-hidden rounded-lg [&>*:not(:last-child)]:border-r [&>*:not(:last-child)]:border-r-white ">
            {[3, 6, 12].map((hour) => (
              <button
                type="button"
                key={hour}
                className="h-full w-1/3 bg-hanepyon-blue"
                onClick={() => {
                  searchParams.set('step', 'category');
                  setSearchParams(searchParams);
                }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <h2 className="text-[2.5em] font-bold leading-[48px] text-white">
                    {hour}
                  </h2>
                  <p className="text-base font-normal text-white">hours</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <img className="h-full w-full" src={landingBg} alt="Demo" />
      <Overlay color="#FFF" backgroundOpacity={0.5} blur={10} />
    </div>
  );
}
