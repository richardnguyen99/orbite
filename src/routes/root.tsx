/**
 * Main application for Orbite.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import type { CFC } from "@typings/react";
import Components from "@components";
import Container from "@components/Container";

const { Layout, Section, Carousel } = Components;

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

const Card: CFC<HTMLDivElement, { amount: number; name: string }> = ({
  amount,
  name,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className="block relative min-w-[280px] min-h-[200px] rounded-lg p-4 bg-slate-900 overflow-x-scroll box-content"
    >
      <p className="text-sm font-thin uppercase">
        {amount} <span className="tracking-widest ml-2">tasks</span>
      </p>
      <h1 className="text-4xl font-black mt-6">{name}</h1>
    </div>
  );
};

const Root: CFC<HTMLDivElement> = () => {
  return (
    <Layout>
      <div className="mt-12" />
      <Container>
        <div className="px-8">
          <h1 className="text-6xl font-extrabold">Good Morning!</h1>
          <Section.Root id="root-categories-section" title="CATEGORIES">
            <Carousel
              items={tasks.map((task, i) => (
                <Card key={i} amount={task.amount} name={task.taskName} />
              ))}
            />
            <div className=" overflow-x-scroll">
              <div className="flex items-flex space-x-4"></div>
            </div>
          </Section.Root>
        </div>
      </Container>
    </Layout>
  );
};

export default Root;
