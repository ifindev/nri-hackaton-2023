import nextFlight from '@assets/audios/6-flight-time.mp3';
import hanedaAirport from '@assets/images/haneda.png';
import hanepyongCurious from '@assets/images/hanepyong-curious.png';
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
          <h2 className="mt-5 text-center text-[2.5em] font-bold leading-[48px] text-white">
            Anyway, when is
            <br />
            your next flight?
          </h2>
          <h2 className="mt-[3.75rem] text-center text-[2.5rem] font-bold leading-[3rem] text-white">
            in
          </h2>
          <div className="mt-6 flex h-[6.125rem] w-full items-center gap-0 overflow-hidden rounded-[20px] [&>*:not(:last-child)]:border-r [&>*:not(:last-child)]:border-r-black ">
            {[3, 6, 12].map((hour) => (
              <button
                type="button"
                key={hour}
                className="h-full w-1/3 bg-hanepyon-yellow"
                onClick={() => {
                  searchParams.set('step', 'category');
                  setSearchParams(searchParams);
                }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <h2 className="text-[2.5em] font-bold leading-[48px] text-hanepyon-blue">
                    {hour}
                  </h2>
                  <p className="text-base font-normal text-hanepyon-blue">
                    hours
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <img className="h-full w-full" src={hanedaAirport} alt="Demo" />
      <Overlay color="#000" opacity={1} blur={1} />
    </div>
  );
}
