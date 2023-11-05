import wellDone from '@assets/audios/5-well-done.mp3';
import instruction from '@assets/audios/7-category-selection-start.mp3';
import hanedaAirport from '@assets/images/haneda.png';
import swipeLeft from '@assets/images/swipe-left.svg';
import swipeRight from '@assets/images/swipe-right.svg';
import usePlayAudio from '@auth/hooks/usePlayAudio/usePlayAudio.hook';
import { Overlay, Transition } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import OnboardingSwipeFinish from './OnboardingSwipeFinish';

interface Props {
  count: number;
  title: string;
  description: JSX.Element;
  type: 'swipe-right' | 'swipe-left';
  onSwipe: () => void;
}

function OnboardingSwipe({ count, title, description, type, onSwipe }: Props) {
  usePlayAudio(instruction);
  const [leaveX, setLeaveX] = useState(0);

  return (
    <motion.div
      className="absolute flex cursor-grab flex-col items-center justify-center"
      animate={{
        scale: 1.05,
      }}
      initial={{
        scale: 1,
      }}
      exit={{
        x: leaveX,
        opacity: 0,
        scale: 0.5,
        transition: { duration: 1 },
      }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={(_e, info) => {
        if (info.offset.x > 50 && count === 1) {
          setLeaveX(1000);
          onSwipe();
        } else if (info.offset.x < -50 && count === 2) {
          setLeaveX(-1000);
          onSwipe();
        }
      }}
    >
      <section className="relative h-full w-full">
        <div className="absolute z-[999] flex  h-full w-full flex-col items-center px-8 pt-20">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-hanepyon-yellow font-bold text-hanepyon-blue">
            <p className="text-[1.75em] leading-[1.75em]">{count}</p>
          </div>

          <h2 className="mt-20 text-center text-[1.75em] font-bold leading-[1.75em] text-white">
            {title}
          </h2>

          <img
            alt="swipe right icon"
            className="mt-[3.75em]"
            src={type === 'swipe-right' ? swipeRight : swipeLeft}
          />

          {description}
        </div>

        <img className="h-full w-full" src={hanedaAirport} alt="Demo" />
        <Overlay color="#000" opacity={1} blur={1} />
      </section>
    </motion.div>
  );
}

export default function OnboardingSwipeWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFinish, setShowFinish] = useState(false);
  const [cards, setCards] = useState([
    {
      count: 2,
      title: 'One more!',
      type: 'swipe-left' as const,
      description: (
        <h2 className="mt-20 text-center text-[1.75em] font-bold leading-[1.75em] text-white">
          Swipe left with <br /> two fingers to pass!
        </h2>
      ),
    },
    {
      count: 1,
      title: "Let's get you ready!",
      type: 'swipe-right' as const,
      description: (
        <h2 className="mt-20 text-center text-[1.75em] font-bold leading-[1.75em] text-white">
          Swipe right with <br /> two fingers to like!
        </h2>
      ),
    },
  ]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      <Transition mounted={showFinish} transition="pop" duration={500}>
        {(style) => (
          <OnboardingSwipeFinish
            text="Well done!"
            background={hanedaAirport}
            withCheckMark
            audio={wellDone}
            timeoutCallback={() => {
              searchParams.set('step', 'time');
              setSearchParams(searchParams);
            }}
            style={style}
          />
        )}
      </Transition>

      <AnimatePresence>
        {!showFinish &&
          cards.map((card) => (
            <OnboardingSwipe
              key={card.count}
              count={card.count}
              title={card.title}
              type={card.type}
              description={card.description}
              onSwipe={() => {
                if (card.count === 1) {
                  setCards((prev) => prev.filter((_card) => _card.count !== 1));
                } else {
                  setShowFinish(true);
                }
              }}
            />
          ))}
      </AnimatePresence>
    </div>
  );
}
