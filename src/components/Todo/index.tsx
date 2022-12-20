import { CFC } from "@typings/react";
import TodoTitle from "./Title";

const Todo: CFC<HTMLDivElement> = ({ ...args }) => {
  return (
    <div {...args} className="max-w-3xl mx-auto">
      <TodoTitle initialTitle="Todo" />
    </div>
  );
};

export default Object.assign(Todo, {});
