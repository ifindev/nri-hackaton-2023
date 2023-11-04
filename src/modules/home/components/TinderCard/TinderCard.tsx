import { Stack } from '@mantine/core';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';
import { CardProps } from './types';

export default function TinderCard({ card, removeCard, active }: CardProps) {
  const [leaveX, setLeaveX] = useState(0);
  // const [leaveY, setLeaveY] = useState(0);

  return (
    <>
      {active ? (
        <motion.div
          className="absolute flex h-[430px] w-[300px] cursor-grab flex-col items-center justify-center rounded-2xl bg-white shadow-xl"
          animate={{
            scale: 1.05,
            rotate: `${card.name.length % 2 === 0 ? 6 : -6}deg`,
          }}
          initial={{
            scale: 1,
          }}
          exit={{
            x: leaveX,
            // y: leaveY,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 },
          }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDragEnd={(_e, info) => {
            // if (info.offset.y < -50) {
            //   setLeaveY(-2000);
            //   removeCard(card, 'superlike');
            //   return;
            // }
            if (info.offset.x > 50) {
              setLeaveX(1000);
              removeCard(card, 'like');
            }
            if (info.offset.x < -50) {
              setLeaveX(-1000);
              removeCard(card, 'nope');
            }
          }}
        >
          <span role="img" aria-label={card.name} className="text-[140px]">
            {card.emoji}
          </span>
          <p style={{ color: card.color }} className="text-5xl font-bold">
            {card.name}
          </p>
        </motion.div>
      ) : (
        <Stack
          className={twJoin(
            'absolute h-[430px] w-[300px] cursor-grab items-center justify-center rounded-2xl bg-white shadow-xl',
            card.name.length % 2 === 0 ? 'rotate-6' : '-rotate-6',
          )}
        >
          <span role="img" aria-label={card.name} className="text-[140px]">
            {card.emoji}
          </span>
          <p style={{ color: card.color }} className="text-5xl font-bold">
            {card.name}
          </p>
        </Stack>
      )}
    </>
  );
}
