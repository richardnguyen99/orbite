import { CFC } from "@typings/react";
import { Reorder, useMotionValue } from "framer-motion";

import { TaskItemProps } from "./type";
import { useShadow } from "./use-shadow";
import { CircleIcon, XIcon } from "@primer/octicons-react";

const TaskItem: CFC<HTMLDivElement, TaskItemProps> = ({ task }) => {
  const dy = useMotionValue(0);
  const boxShadow = useShadow(dy);

  return (
    <Reorder.Item
      as="li"
      id={task.name}
      value={task}
      style={{ boxShadow, y: dy }}
      className="relative flex items-center flex-shrink-0 w-full rounded-lg p-8 bg-slate-300 dark:bg-slate-900"
    >
      <CircleIcon size={24} className="mr-3" />
      <h3 className="text-xl font-bold">{task.name}</h3>
      <button type="button" className="ml-auto">
        <XIcon size={24} />
      </button>
    </Reorder.Item>
  );
};

export default TaskItem;
