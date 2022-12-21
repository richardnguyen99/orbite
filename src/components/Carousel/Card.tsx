import { CFC } from "@typings/react";

const CarouselCard: CFC<HTMLDivElement, { amount: number; name: string }> = ({
  amount,
  name,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className="block relative min-w-[280px] min-h-[200px] rounded-lg p-4  bg-slate-300/75 dark:bg-slate-900 overflow-x-scroll box-content"
    >
      <p className="text-sm font-thin uppercase">
        {amount} <span className="tracking-widest ml-2">tasks</span>
      </p>
      <h1 className="text-4xl font-black mt-6">{name}</h1>
    </div>
  );
};

export default CarouselCard;
