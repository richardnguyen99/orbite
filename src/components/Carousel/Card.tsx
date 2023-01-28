import { CFC } from "@typings/react";
import { useCallback } from "react";

export interface CarouselCardProps {
  amount: number;
  finished: number;
  name: string;
  onClickCallback?: () => void | undefined;
}

const CarouselCard: CFC<HTMLDivElement, CarouselCardProps> = ({
  amount,
  finished,
  name,
  onClickCallback,
  ...rest
}) => {
  const onClickHandler = useCallback(() => {
    if (
      typeof onClickCallback !== "undefined" &&
      typeof onClickCallback === "function"
    )
      onClickCallback();
  }, [onClickCallback]);

  return (
    <div
      {...rest}
      onClick={onClickHandler}
      className="block relative box-content min-w-[280px] min-h-[200px] rounded-lg p-4  bg-slate-300/75 dark:bg-slate-900 overflow-x-scroll"
    >
      <p className="text-sm font-thin uppercase">
        <span>{finished}</span>{" "}
        <span className="tracking-widest ml-2">done</span>
        <span className="px-3">/</span>
        <span>{amount}</span>{" "}
        <span className="tracking-widest ml-2">tasks</span>
      </p>
      <h1 className="text-4xl font-black mt-6 first-letter:capitalize">
        {name}
      </h1>
    </div>
  );
};

export default CarouselCard;
