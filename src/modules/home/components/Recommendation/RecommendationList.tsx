import hanepyon from '@assets/images/hanepyon-recommending.png';
import { Button } from '@mantine/core';

export default function RecommendationList() {
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-t from-[#B9C6D3] to-[#E1EBF6] px-4 pt-[30px]">
      <div className="flex items-start justify-between">
        <h2 className="grow text-[28px] font-bold leading-[38px] text-hanepyon-blue">
          Here is my <br />
          recommendation list.
        </h2>
        <div>
          <img
            className="shadow-['0px 2px 8px 0px rgba(0, 0, 0.16)]"
            width={48}
            height={48}
            src={hanepyon}
            alt="Hanepyon recommendation"
          />
        </div>
      </div>
      <Button.Group>
        <Button variant="default">First</Button>
        <Button variant="default">Second</Button>
        <Button variant="default">Third</Button>
      </Button.Group>
    </div>
  );
}
