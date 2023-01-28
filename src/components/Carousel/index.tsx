import { useContext, useEffect, useState } from "react";

import TaskContext from "@features/Tasks/TaskContext";
import { CFC } from "@typings/react";

import CarouselCard from "./Card";
import { CategoryType } from "@features/Tasks/type";

const Carousel: CFC<HTMLDivElement, object> = ({ ...rest }) => {
  const taskContext = useContext(TaskContext);

  const [categoryCounter, setCategoryCounter] = useState<{
    [key in CategoryType]: {
      done: number;
      total: number;
    };
  }>({
    work: {
      done: 0,
      total: 0,
    },
    personal: {
      done: 0,
      total: 0,
    },
    school: {
      done: 0,
      total: 0,
    },
    chores: {
      done: 0,
      total: 0,
    },
    special: {
      done: 0,
      total: 0,
    },
  });

  useEffect(() => {
    const newCategoryCounter = taskContext.tasks.reduce(
      (counter, task) => {
        if (!counter[task.category]) {
          counter[task.category] = {
            done: 0,
            total: 0,
          };
        }

        counter[task.category]["total"]++;

        if (task.finished) counter[task.category]["done"]++;

        return counter;
      },
      {} as Record<
        CategoryType,
        {
          done: number;
          total: number;
        }
      >
    );

    setCategoryCounter(newCategoryCounter);
  }, [taskContext.tasks]);

  return (
    <div>
      <div
        {...rest}
        className="relative flex space-x-4 overflow-x-scroll no-scrollbar w-screen ml-[50%] -translate-x-2/4 "
      >
        {Object.keys(categoryCounter).map((key, i) => {
          return (
            <div
              key={i}
              className="first:pl-8 lg:first:pl-[calc(50vw-48rem/2+2rem)]"
            >
              <CarouselCard
                finished={categoryCounter[key as CategoryType]["done"]}
                amount={categoryCounter[key as CategoryType]["total"]}
                name={key}
              />
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
