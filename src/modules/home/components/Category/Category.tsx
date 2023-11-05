import bgm from '@assets/audios/8-selection-bgm.mp3';
import culinary from '@assets/images/culinary.png';
import cultural from '@assets/images/cultural.png';
import recreational from '@assets/images/recreational.png';
import relaxation from '@assets/images/relaxation.png';
import shopping from '@assets/images/shopping.png';
import usePlayAudio from '@auth/hooks/usePlayAudio/usePlayAudio.hook';
import { Transition } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { twJoin, twMerge } from 'tailwind-merge';
import OnboardingSwipeFinish from '../Onboarding/OnboardingSwipeFinish';

interface CategoryProps {
  numOfSelected: number;
  title: string;
  chips: string[];
  image: string;
  onSwipe: (type: 'liking' | 'skipping') => void;
}

function Category({
  numOfSelected,
  title,
  chips,
  image,
  onSwipe,
}: CategoryProps) {
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
        const liking = info.offset.x > 30;
        const skipping = info.offset.x < -30;

        if (liking) {
          setLeaveX(1000);
          onSwipe('liking');
        }
        if (skipping) {
          setLeaveX(-1000);
          onSwipe('skipping');
        }
      }}
    >
      <section className="relative h-full w-full">
        <div className="absolute z-[999] flex h-full w-full flex-col justify-between px-8 py-11">
          <div className="flex w-full items-center space-x-1">
            <span
              className={twMerge(
                'h-2 w-1/3 rounded-l bg-slate-50/50',
                numOfSelected >= 1 && 'bg-hanepyon-blue'
              )}
            />
            <span
              className={twMerge(
                'h-2 w-1/3 bg-slate-50/50',
                numOfSelected >= 2 && 'bg-hanepyon-blue'
              )}
            />
            <span
              className={twMerge(
                'h-2 w-1/3 rounded-r bg-slate-50/50',
                numOfSelected >= 3 && 'bg-hanepyon-blue'
              )}
            />
          </div>

          <div className="flex flex-col space-y-4">
            <h1 className="text-[2.5rem] font-bold leading-[3rem] text-white">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-2">
              {chips.map((chip) => (
                <p
                  className={twJoin(
                    'rounded-full bg-white/20 px-3 py-1 font-bold text-white'
                  )}
                >
                  {chip}
                </p>
              ))}
            </div>
          </div>
        </div>

        <img className="h-full w-full" src={image} alt={title} />
      </section>
    </motion.div>
  );
}

const initialCards = [
  {
    title: 'Culinary' as const,
    chips: ['Street Food', 'Local Delicacy', 'Izikaya', 'Cuisine', 'Authentic'],
    image: culinary,
  },
  {
    title: 'Recreational' as const,
    chips: ['Photo Spots', 'Sightseeing', 'Landmarks', 'Parks', 'Nature'],
    image: recreational,
  },
  {
    title: 'Relaxation' as const,
    chips: ['Bath', 'Sento', 'Onsen', 'Wellness', 'Healing'],
    image: relaxation,
  },
  {
    title: 'Shopping' as const,
    chips: ['Local Specialty', 'Crafts', 'Gifts', 'Souvenirs'],
    image: shopping,
  },
  {
    title: 'Cultural' as const,
    chips: ['Traditional', 'Shrine', 'Museum', 'Immersive', 'Cosplay'],
    image: cultural,
  },
];

export default function CategoryWrapper() {
  usePlayAudio(bgm);
  const navigate = useNavigate();
  const [showFinish, setShowFinish] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [cards, setCards] = useState(initialCards);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      <Transition mounted={showFinish} transition="pop" duration={500}>
        {(style) => (
          <OnboardingSwipeFinish
            text="Great choice!"
            background={culinary}
            timeoutCallback={() => {
              navigate('recommendation');
            }}
            style={style}
          />
        )}
      </Transition>

      <AnimatePresence>
        {!showFinish &&
          cards.map((card) => (
            <Category
              key={card.title}
              numOfSelected={selected.length}
              title={card.title}
              chips={card.chips}
              image={card.image}
              onSwipe={(type) => {
                if (type === 'liking') {
                  const newSelected = selected.concat(card.title);
                  if (newSelected.length === 3) {
                    setShowFinish(true);
                    return;
                  }

                  setSelected(newSelected);
                }

                if (type === 'skipping' && selected.length === 0) {
                  setSelected((prev) =>
                    prev.filter((val) => val !== card.title)
                  );
                }

                if (cards.length === 1) {
                  // set back to initial cards without the selected cards
                  setCards(
                    initialCards.filter(
                      (_card) => !selected.includes(_card.title)
                    )
                  );

                  return;
                }

                // filter already selected cards
                setCards((prev) =>
                  prev.filter((_card) => _card.title !== card.title)
                );
              }}
            />
          ))}
      </AnimatePresence>
    </div>
  );
}
