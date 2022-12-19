import { CFC } from "@typings/react";
import TodoTitle from "./Title";

const Todo: CFC<HTMLDivElement> = ({ ...args }) => {
  return (
    <div {...args}>
      <TodoTitle initialTitle="Todo" />
    </div>
  );
};

export default Object.assign(Todo, {});
