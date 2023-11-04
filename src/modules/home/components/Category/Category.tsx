import { twJoin, twMerge } from 'tailwind-merge';

interface Props {
  title: string;
  chips: string[];
  image: string;
  selected: number;
}

export default function Category({ selected, title, chips, image }: Props) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute z-[999] flex h-full w-full flex-col justify-between p-8">
        <div className="flex w-full items-center space-x-1">
          <span
            className={twMerge(
              'h-2 w-1/3 rounded-l bg-slate-50/50',
              selected >= 1 && 'bg-hanepyon-blue',
            )}
          />
          <span
            className={twMerge(
              'h-2 w-1/3 bg-slate-50/50',
              selected >= 2 && 'bg-hanepyon-blue',
            )}
          />
          <span
            className={twMerge(
              'h-2 w-1/3 rounded-r bg-slate-50/50',
              selected >= 3 && 'bg-hanepyon-blue',
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
                  'rounded-full bg-white/20 px-3 py-1 font-bold text-white',
                )}
              >
                {chip}
              </p>
            ))}
          </div>
        </div>
      </div>

      <img className="h-full w-full" src={image} alt={title} />
    </div>
  );
}
