import hanepyonLandingImg from '@assets/images/hanepyon-landing.png';
import landingImg from '@assets/images/landing.png';
import { AspectRatio, Button, Overlay } from '@mantine/core';

export default function HanepyonFirst() {
  return (
    <AspectRatio ratio={360 / 720} className="!static mx-auto">
      <img src={landingImg} alt="Landing" />

      <div className="z-[9999] flex flex-col !items-start !justify-start">
        <h1 className="px-8 pt-10 text-[2.5rem] font-bold leading-[3rem] text-hanepyon-blue">
          Hi bud,
        </h1>
        <h1 className="px-8 text-[2.5rem] font-bold leading-[3rem] text-hanepyon-blue">
          is your flight
        </h1>
        <h1 className="px-8 text-[2.5rem] font-bold leading-[3rem] text-hanepyon-blue">
          still few hours
        </h1>
        <h1 className="mb-5 px-8 text-[2.5rem] font-bold leading-[3rem] text-hanepyon-blue">
          away?
        </h1>

        <Button size="xl" className="ml-8 rounded-full bg-hanepyon-blue px-10">
          YUPPP!
        </Button>

        <img
          src={hanepyonLandingImg}
          alt="Hanepyon Landing"
          className="h-[468px] w-[468px]"
        />
      </div>

      <Overlay
        gradient="linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.00) 100%)"
        blur="4px"
      />
    </AspectRatio>
  );
}
