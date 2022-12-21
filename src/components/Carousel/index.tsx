import { CFC } from "@typings/react";
import { ReactElement, cloneElement } from "react";

export interface CarouselProps {
  //items: React.FunctionComponent<HTMLAttributes<HTMLDivElement> & object>[];
  items: ReactElement[];
}

const Carousel: CFC<HTMLDivElement, CarouselProps> = ({ items, ...rest }) => {
  return (
    <div>
      <div
        {...rest}
        className="relative flex space-x-4 overflow-x-scroll no-scrollbar w-screen ml-[50%] -translate-x-2/4 "
      >
        {items.map((item, i) => {
          const enhancedItem = cloneElement(item, {
            style: { boxSizing: "content-box" },
          });

          return (
            <div
              key={i}
              className="first:pl-8 lg:first:pl-[calc(50vw-48rem/2+2rem)]"
            >
              {enhancedItem}
            </div>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 w-16 lg:w-32 h-full dark:bg-horizontal-dark"></div>
    </div>
  );
};

export default Carousel;
