import hanepyonAvatarImg from '@assets/images/hanepyon-avatar.png';
import landingImg from '@assets/images/landing.png';
import { Icon } from '@iconify/react/dist/iconify.js';
import { ActionIcon, Button, Overlay } from '@mantine/core';

export default function HanepyonSecond() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute z-[999] flex h-full w-full flex-col items-center">
        <h2 className="pt-10 text-center text-[1.75rem] font-bold leading-[2.4rem] text-hanepyon-blue">
          Pick your avatar!
        </h2>

        <img
          className="mb-[1.25rem] mt-[5.75rem]"
          src={hanepyonAvatarImg}
          alt="Hanepyon avatar"
        />

        <div className="flex w-full items-center justify-between">
          <ActionIcon
            size="xl"
            variant="transparent"
            className="rounded-full bg-white/50 text-hanepyon-blue"
          >
            <Icon icon="lucide:move-left" height="1.5em" />
          </ActionIcon>

          <h1 className="text-[2.5rem] font-bold leading-10 text-hanepyon-yellow">
            Hanepyon
          </h1>

          <ActionIcon
            size="xl"
            variant="transparent"
            className="rounded-full bg-white/50 text-hanepyon-blue"
          >
            <Icon icon="lucide:move-right" height="1.5em" />
          </ActionIcon>
        </div>

        <Button
          size="xl"
          className="mx-auto mt-10 w-[80%] rounded-full bg-hanepyon-blue"
        >
          CONTINUE
        </Button>
      </div>

      <img className="h-full w-full" src={landingImg} alt="Landing" />
      <Overlay
        gradient="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.50) 100%)"
        blur={4}
      />
    </div>
  );
}
