import { ReactElement, useContext } from "react";

import TaskContext from "@features/Tasks/TaskContext";
import { CFC } from "@typings/react";

import CarouselCard from "./Card";

export interface CarouselProps {
  //items: React.FunctionComponent<HTMLAttributes<HTMLDivElement> & object>[];
  items: ReactElement[];
}

const Carousel: CFC<HTMLDivElement, CarouselProps> = ({ items, ...rest }) => {
  const taskContext = useContext(TaskContext);

  return (
    <div>
      <div
        {...rest}
        className="relative flex space-x-4 overflow-x-scroll no-scrollbar w-screen ml-[50%] -translate-x-2/4 "
      >
        {items.map((item, i) => {
          return (
            <div
              key={i}
              className="first:pl-8 lg:first:pl-[calc(50vw-48rem/2+2rem)]"
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 w-16 lg:w-32 h-full dark:bg-horizontal-dark"></div>
    </div>
  );
};

export default Object.assign(Carousel, {
  Card: CarouselCard,
});
