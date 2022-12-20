import { CFC } from "@typings/react";
import TodoTitle from "./Title";
import TodoPanel from "./Panel";

const Todo: CFC<HTMLDivElement> = ({ ...args }) => {
  return (
    <div {...args} aria-label="Todo Application" className="max-w-3xl mx-auto">
      <TodoTitle initialTitle="Todo" />
      <TodoPanel />
    </div>
  );
};

export default Object.assign(Todo, {});
