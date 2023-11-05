import pickAvatarAudio from '@assets/audios/2-pick-avatar.mp3';
import femaleImg from '@assets/images/female.png';
import hanedaAirport from '@assets/images/haneda.png';
import hanepyonAvatarImg from '@assets/images/hanepyon-avatar.png';
import maleImg from '@assets/images/male.png';
import usePlayAudio from '@auth/hooks/usePlayAudio/usePlayAudio.hook';
import { Icon } from '@iconify/react/dist/iconify.js';
import { ActionIcon, Button, Overlay } from '@mantine/core';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export default function HanepyonSecond() {
  usePlayAudio(pickAvatarAudio);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedAvatar, setSelectedAvatar] = useState<
    'hanepyon' | 'female' | 'male'
  >('hanepyon');

  return (
    <div className="relative h-full w-full">
      <div className="absolute z-[999] flex h-full w-full flex-col items-center">
        <h2 className="pt-10 text-center text-[1.75rem] font-bold leading-[2.4rem] text-white">
          Pick your avatar!
        </h2>

        <img
          className="mb-[1.25rem] mt-[5.75rem] h-[419px]"
          src={
            selectedAvatar === 'hanepyon'
              ? hanepyonAvatarImg
              : selectedAvatar === 'female'
              ? femaleImg
              : maleImg
          }
          alt="Hanepyon avatar"
        />

        <div className="flex w-full items-center justify-between">
          <ActionIcon
            size="xl"
            variant="transparent"
            className={twMerge(
              'rounded-full bg-black/50 text-hanepyon-yellow',
              selectedAvatar === 'hanepyon' && 'bg-transparent'
            )}
            onClick={() => {
              if (selectedAvatar !== 'hanepyon') {
                setSelectedAvatar(
                  selectedAvatar === 'female' ? 'hanepyon' : 'female'
                );
              }
            }}
          >
            <Icon
              icon="lucide:move-left"
              height="1.5em"
              color={selectedAvatar === 'hanepyon' ? 'transparent' : undefined}
            />
          </ActionIcon>

          <h1 className="text-[2.5rem] font-bold leading-10 text-white">
            {selectedAvatar === 'hanepyon'
              ? 'Hanepyon'
              : selectedAvatar === 'female'
              ? 'Female'
              : 'Male'}
          </h1>

          <ActionIcon
            size="xl"
            variant="transparent"
            className={twMerge(
              'rounded-full bg-black/50 text-hanepyon-yellow',
              selectedAvatar === 'male' && 'bg-transparent'
            )}
            onClick={() => {
              if (selectedAvatar !== 'male') {
                setSelectedAvatar(
                  selectedAvatar === 'hanepyon' ? 'female' : 'male'
                );
              }
            }}
          >
            <Icon
              icon="lucide:move-right"
              height="1.5em"
              color={selectedAvatar === 'male' ? 'transparent' : undefined}
            />
          </ActionIcon>
        </div>

        <Button
          size="xl"
          className="mx-auto mt-10 w-[80%] rounded-full bg-hanepyon-yellow text-hanepyon-blue disabled:bg-[#CED4DA] disabled:text-[#909296]"
          disabled={selectedAvatar !== 'hanepyon'}
          onClick={() => {
            searchParams.set('step', 'how-to-use');
            setSearchParams(searchParams);
          }}
        >
          CONTINUE
        </Button>
      </div>

      <img className="h-full w-full" src={hanedaAirport} alt="Landing" />
      <Overlay color="#000" opacity={1} />
    </div>
  );
}
