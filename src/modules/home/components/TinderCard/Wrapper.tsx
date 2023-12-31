import { Icon } from '@iconify/react';
import { ActionIcon } from '@mantine/core';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Counter from './Counter';
import TinderCard from './TinderCard';
import { CARDS } from './data';
import { CardType, HistoryType, ResultType, SwipeType } from './types';

export default function Wrapper() {
  const [cards, setCards] = useState(CARDS);
  const [result, setResult] = useState<ResultType>({
    like: 0,
    nope: 0,
    superlike: 0,
  });
  const [history, setHistory] = useState<HistoryType[]>([]);

  // index of last card
  const activeIndex = cards.length - 1;

  const removeCard = (oldCard: CardType, swipe: SwipeType) => {
    setHistory((current) => [...current, { ...oldCard, swipe }]);
    setCards((current) => current.filter((card) => card.id !== oldCard.id));
    setResult((current) => ({ ...current, [swipe]: current[swipe] + 1 }));
  };

  const undoSwipe = () => {
    const newCard = history.pop();
    if (newCard) {
      const { swipe } = newCard;
      setHistory((current) => current.filter((card) => card.id !== newCard.id));
      setResult((current) => ({ ...current, [swipe]: current[swipe] - 1 }));
      setCards((current) => [...current, newCard]);
    }
  };

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      <AnimatePresence>
        {cards.map((card, index) => (
          <TinderCard
            key={card.name}
            active={index === activeIndex}
            removeCard={removeCard}
            card={card}
          />
        ))}
      </AnimatePresence>

      {cards.length === 0 && <span className="text-xl text-white">Empty</span>}

      <footer className="absolute bottom-4 flex items-center space-x-4 bg-red-100">
        <ActionIcon
          className="inline-flex items-center justify-center rounded-full disabled:cursor-not-allowed"
          size="xl"
          disabled={history.length === 0}
          onClick={undoSwipe}
        >
          <Icon icon="lucide:rotate-cw" strokeWidth={3} />
        </ActionIcon>

        <Counter label="Nopes" count={result.nope} />
        <Counter label="Likes" count={result.like} />
      </footer>
    </div>
  );
}
