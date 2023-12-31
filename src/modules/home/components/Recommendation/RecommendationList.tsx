/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import hanepyon from '@assets/images/hanepyon-recommending.png';
import map from '@assets/images/map.png';
import qrCode from '@assets/images/qr-code.png';
import recom1 from '@assets/images/recom-1.png';
import recom2 from '@assets/images/recom-2.png';
import recom3 from '@assets/images/recom-3.png';
import train from '@assets/images/train.svg';
import { Button } from '@mantine/core';

interface RecommendationProps {
  img: string;
  title: string;
  description: string;
}

function Recommendation({ img, title, description }: RecommendationProps) {
  return (
    <div className="flex h-auto flex-col rounded-lg shadow-[0_4px_16px_0_rgba(0,0,0,0.16)]">
      <img src={img} alt="Recommendation" width="100%" height={200} />
      <div className="flex flex-col gap-1 rounded-b-lg border-t-4 border-t-hanepyon-yellow bg-white p-3">
        <h2 className="text-[28px] font-bold leading-[38px] text-[#25262B]">
          {title}
        </h2>
        <p className="text-base leading-6 text-[#25262B]">{description}</p>
      </div>
    </div>
  );
}

export default function RecommendationList() {
  const recommendations: RecommendationProps[] = [
    {
      img: recom1,
      title: 'Kamata Hachiman-jinja Shrine',
      description:
        'A shrine of Emperor Ojin offering blessings for prosperity in business, safe childbirth and child-raising, and also for warding off evil and welcoming good fortune.',
    },
    {
      img: recom2,
      title: 'Taishoyu',
      description:
        'A real log fire proudly heats their boiling water. It feels softer to the skin! Complete with a steam sauna. Open-air bath is available in the women’s bath only',
    },
    {
      img: recom3,
      title: 'Shunkoen',
      description:
        "A restaurant famous for its winged dumplings, a Kamata local specialty. Once you've tried these tasty winged dumplings, you can brag about their superb flavor.",
    },
  ];

  return (
    <div className="flex h-auto w-full flex-col bg-[#CCDFF1] px-4 pt-[30px]">
      <div className="flex items-start justify-between">
        <h2 className="grow text-[28px] font-bold leading-[38px] text-[#25262B]">
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
      <div className="mt-8 w-full rounded-lg bg-[#F9F7F1] p-[2px] font-sans">
        <Button
          variant="default"
          className="w-1/2 rounded-md border-none bg-hanepyon-yellow text-[#25262B]"
        >
          BEST PICK
        </Button>
        <Button
          variant="default"
          className="w-1/2 border-none bg-transparent text-hanepyon-blue"
        >
          OTHERS
        </Button>
      </div>

      <div className="mt-[18px] flex h-[64px] w-full items-center rounded-2xl bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.16)]">
        <div className="flex w-1/3 flex-col p-4">
          <h2 className="text-base font-bold leading-6 text-[#25262B]">
            2,500円
          </h2>
          <p className="text-xs leading-6 text-[#5C5F66]">COST</p>
        </div>
        <div className="h-10 w-px bg-[#9EBEDB]" />
        <div className="flex w-1/3 flex-col  p-4">
          <h2 className="text-base font-bold leading-6 text-[#25262B]">
            2h 30m
          </h2>
          <p className="text-xs leading-6 text-[#5C5F66]">DURATION</p>
        </div>
        <div className="h-10 w-px bg-[#9EBEDB]" />
        <div className="flex w-1/3 flex-col  p-4">
          <div className="flex items-center gap-2">
            <img src={train} alt="train icon" height={18} width={16} />
            <h2 className="text-base font-bold leading-6 text-[#25262B]">
              12m
            </h2>
          </div>
          <p className="text-xs leading-6 text-[#5C5F66]">BY TRAIN</p>
        </div>
      </div>

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <img
        src={map}
        className="mt-4 h-[180px] w-full rounded-2xl shadow-[0_4px_16px_0_rgba(0,0,0,0.16)]"
        alt="Map"
        onClick={() => {
          window.open(
            'https://www.google.com/maps/dir/Haneda+Airport+(HND),+Hanedakuko,+Ota+City,+Tokyo+144-0041/Kamata+Hachiman+Shrine,+4+Chome-18-18+Kamata,+Ota+City,+Tokyo/@35.5548044,139.7336668,14.21z/data=!4m14!4m13!1m5!1m1!1s0x6018640ba43192e3:0xd32c3a9d146f8df!2m2!1d139.7798386!2d35.5493932!1m5!1m1!1s0x60186057775c02f1:0xc7a2407380526bb8!2m2!1d139.7224486!2d35.5606119!3e3?entry=ttu',
          );
        }}
      />

      <div className="my-4 flex h-full w-full flex-col gap-4">
        {recommendations.map((item) => (
          <Recommendation
            key={item.img}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}

        <div className="flex flex-col gap-1 rounded-lg bg-white p-3 shadow-[0_4px_16px_0_rgba(0,0,0,0.16)]">
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#25262B]">
            Send Plan via QR Code
          </h2>
          <p className="text-center text-base leading-6 text-[#25262B]">
            Save my recommendation to your mobile!
          </p>
          <div className="flex items-center justify-center p-8">
            <img
              src={qrCode}
              height={232}
              width={232}
              alt="QR Code Recommendation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
