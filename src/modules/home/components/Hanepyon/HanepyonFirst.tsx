import hanepyonLandingImg from '@assets/images/hanepyon-landing.png';
import landingImg from '@assets/images/landing.png';
import { AspectRatio, Button, Overlay, Stack } from '@mantine/core';

export default function HanepyonFirst() {
  return (
    <div className="h-full w-full">
      <AspectRatio ratio={360 / 720} mx="auto">
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%)"
          blur="4px"
        />

        <img src={landingImg} alt="Landing" />

        <Stack className="z-[9999] items-start justify-start px-8">
          <h1
            className="text-[2.5rem] font-bold text-hanepyon-blue"
            style={{
              WebkitTextStrokeWidth: '2px',
              WebkitTextStrokeColor: 'white',
              // WebkitTextFillColor: '#1864AB',
            }}
          >
            Hi bud, is your flight still few hours away?
          </h1>

          <Button
            size="md"
            className="self-start rounded-full bg-hanepyon-blue"
          >
            YUPPP!
          </Button>

          <img src={hanepyonLandingImg} alt="Hanepyon Landing" />
        </Stack>
      </AspectRatio>
    </div>
  );
}
