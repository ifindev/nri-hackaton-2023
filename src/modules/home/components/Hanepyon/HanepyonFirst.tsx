/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-floating-promises */
import opening from '@assets/audios/1-opening.mp3';
import hanedaAirport from '@assets/images/haneda.png';
import hanepyonLandingImg from '@assets/images/hanepyon-landing.png';
import usePlayAudioManual from '@auth/hooks/usePlayAudio/usePlayAudioManual.hook';
import { AspectRatio, Button } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';

export default function HanepyonFirst() {
  const { setIsPlaying } = usePlayAudioManual(opening);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <AspectRatio ratio={360 / 720} className="!static mx-auto">
      <img src={hanedaAirport} alt="Landing" className="h-full" />

      <div className="z-[9999] flex flex-col !items-start !justify-start">
        <h1 className="px-8 pt-10 text-[2.5rem] font-bold leading-[3rem] text-white">
          Hi bud,
        </h1>
        <h1 className="px-8 text-[2.5rem] font-bold leading-[3rem] text-white">
          is your flight
        </h1>
        <h1 className="px-8 text-[2.5rem] font-bold leading-[3rem] text-white">
          still few hours
        </h1>
        <h1 className="mb-5 px-8 text-[2.5rem] font-bold leading-[3rem] text-white">
          away?
        </h1>

        <Button
          size="xl"
          className="ml-8 rounded-full bg-hanepyon-yellow px-10 text-[28px] text-hanepyon-blue"
          onClick={() => {
            searchParams.set('step', 'avatar');
            setSearchParams(searchParams);
          }}
        >
          YUPPP!
        </Button>

        <button
          className="h-auto w-full"
          onClick={() => setIsPlaying(true)}
          type="button"
        >
          <img
            src={hanepyonLandingImg}
            alt="Hanepyon Landing"
            className="h-[468px] w-[468px]"
          />
        </button>
      </div>
    </AspectRatio>
  );
}
