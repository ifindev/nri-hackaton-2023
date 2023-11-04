import landingBg from '@assets/images/landing.png';
import swipeLeft from '@assets/images/swipe-left.svg';
import swipeRight from '@assets/images/swipe-right.svg';
import { Overlay } from '@mantine/core';

interface Props {
  count: number;
  title: string;
  description: JSX.Element;
  type: 'swipe-right' | 'swipe-left';
  // TODO: Impelement onSwipe handler & animation with Framer Motion
  // onSwipe?: (id: string) => void
}

export default function OnboardingSwipe({
  count,
  title,
  description,
  type,
}: Props) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute z-[999] flex  h-full w-full flex-col items-center justify-center ">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-hanepyon-blue bg-hanepyon-yellow font-bold text-hanepyon-blue">
          <p className="text-[1.75em] leading-[1.75em]">{count}</p>
        </div>

        <h2 className="mt-20 text-center text-[1.75em] font-bold leading-[1.75em] text-hanepyon-blue">
          {title}
        </h2>

        <img
          alt="swipe right icon"
          className="mt-[3.75em]"
          src={type === 'swipe-right' ? swipeRight : swipeLeft}
        />

        {description}
      </div>
      <img className="h-full w-full" src={landingBg} alt="Demo" />
      <Overlay color="#FFF" backgroundOpacity={0.7} blur={10} />
    </div>
  );
}
