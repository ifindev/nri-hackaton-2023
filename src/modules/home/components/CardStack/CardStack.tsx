import { Children, PropsWithChildren, useState } from 'react';
import { Card } from './Card';

interface Props extends PropsWithChildren {
  onVote: (result: boolean) => void;
}

export const Stack = ({ onVote, children, ...props }: Props) => {
  const [stack, setStack] = useState(Children.toArray(children));

  // return new array with last item removed
  const pop = (array) => array.filter((_, index) => index < array.length - 1);

  const handleVote = (item, vote) => {
    // update the stack
    const newStack = pop(stack);
    setStack(newStack);

    // run function from onVote prop, passing the current item and value of vote
    onVote(item, vote);
  };

  return (
    <>
      <div
        className="relative flex w-full items-center justify-center overflow-hidden"
        {...props}
      >
        {stack.map((item, index) => {
          const isTop = index === stack.length - 1;

          return (
            <Card
              drag={isTop} // Only top card is draggable
              key={item.key || index}
              onVote={(result) => {
                handleVote(item, result);
              }}
            >
              {item}
            </Card>
          );
        })}
      </div>
    </>
  );
};
