/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';

interface Props extends ComponentPropsWithoutRef<typeof motion.div> {
  id: string;
  onVote: (result: boolean) => void;
}

export function Card({ children, onVote, id, ...props }: Props) {
  // motion stuff
  const x = useMotionValue(0);
  const controls = useAnimation();

  const cardElem = useRef<HTMLDivElement>(null);
  const [constrained, setConstrained] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right' | undefined>(
    undefined,
  );
  const [velocity, setVelocity] = useState(0);

  const getVote = (childNode: HTMLDivElement, parentNode: HTMLDivElement) => {
    const childRect = childNode.getBoundingClientRect();
    const parentRect = parentNode.getBoundingClientRect();
    const result =
      parentRect.left >= childRect.right
        ? false
        : parentRect.right <= childRect.left
        ? true
        : undefined;

    return result;
  };

  // determine direction of swipe based on velocity
  const getDirection = () =>
    velocity >= 1 ? 'right' : velocity <= -1 ? 'left' : undefined;

  const flyAway = (min: number) => {
    const flyAwayDistance = (_direction: typeof direction) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const parentWidth = (
        cardElem.current!.parentNode as HTMLDivElement
      ).getBoundingClientRect().width;
      const childWidth = cardElem.current!.getBoundingClientRect().width;
      return _direction === 'left'
        ? -parentWidth / 2 - childWidth / 2
        : parentWidth / 2 + childWidth / 2;
    };

    if (direction && Math.abs(velocity) > min) {
      setConstrained(false);
      controls
        .start({
          x: flyAwayDistance(direction),
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    }
  };

  useEffect(() => {
    const unsubscribeX = x.on('change', () => {
      if (cardElem.current) {
        const childNode = cardElem.current;
        const { parentNode } = cardElem.current;
        const result = getVote(childNode, parentNode as HTMLDivElement);
        result !== undefined && onVote(result);
      }
    });

    return () => {
      unsubscribeX();
    };
  });

  return (
    <motion.div
      className="absolute"
      ref={cardElem}
      animate={controls}
      dragConstraints={constrained && { left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      whileTap={{ scale: 1.1 }}
      style={{ x }}
      onDrag={() => {
        setVelocity(x.getVelocity());
        setDirection(getDirection());
      }}
      onDragEnd={() => {
        flyAway(500);
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
