/**
 * Main application for Orbite.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import type { CFC } from "@typings/react";
import Components from "@components";
import { TaskProps } from "@features/Tasks/type";
import GreetingWithTime from "@features/GreetingWithTime";

const { Layout, Section, Carousel, Container, Tasks } = Components;

const tasks = [
  {
    taskName: "Work",
    amount: 12,
  },
  {
    taskName: "Personal",
    amount: 8,
  },
  {
    taskName: "School",
    amount: 3,
  },
  {
    taskName: "Chores",
    amount: 5,
  },
  {
    taskName: "Special",
    amount: 8,
  },
];

const taskItems: TaskProps[] = [
  {
    name: "Finish Genesis",
    category: "Personal",
    prior: 5,
    finished: false,
    notes: "Genesis is the first book in the Old Testament and in the Bible.",
  },
  {
    name: "Implement Task component",
    category: "Work",
    prior: 3,
    finished: false,
    notes: "Task component is the essence of the Todo App",
  },
  {
    name: "Buy Gifts",
    category: "Chores",
    prior: 2,
    finished: true,
    notes: "Buy gifts for the holiday",
  },
];

const Root: CFC<HTMLDivElement> = () => {
  return (
    <Layout>
      <div className="mt-24" />
      <Container>
        <div className="px-8">
          <GreetingWithTime />
          <Section.Root id="root-categories-section" title="CATEGORIES">
            <Carousel
              items={tasks.map((task, i) => (
                <Carousel.Card
                  key={i}
                  amount={task.amount}
                  name={task.taskName}
                />
              ))}
            />
            <div className=" overflow-x-scroll">
              <div className="flex items-flex space-x-4"></div>
            </div>
          </Section.Root>
          <Section.Root id="root-tasks-section" title="TASKS">
            <Tasks.Group />
          </Section.Root>
        </div>
      </Container>
    </Layout>
  );
};

export default Root;
