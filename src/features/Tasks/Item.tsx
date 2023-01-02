import { useContext } from "react";
import { HistoryIcon, PencilIcon, TrashIcon } from "@primer/octicons-react";
import { Reorder, useMotionValue } from "framer-motion";
import { CFC } from "@typings/react";

import { TaskItemProps, TaskProps } from "./type";
import { useShadow } from "./use-shadow";
import { TaskContext } from "./TaskProvider";
import TaskItemHeading from "./ItemHeading";
import TaskItemCheckMark from "./ItemCheckMark";
import Tooltip from "@components/Tooltip";

const TaskItem: CFC<HTMLDivElement, TaskItemProps> = ({ task }) => {
  const taskContext = useContext(TaskContext);

  const dy = useMotionValue(0);
  const boxShadow = useShadow(dy);

  const onDeleteItem = () => {
    taskContext.onDeleteTask(task.name);
  };

  const onUpdateItem = (newTask: Partial<TaskProps>) => {
    taskContext.onUpdateTask(task.name, { ...newTask });
  };

  const onUpdateItemName = (newName: string) => {
    onUpdateItem({ name: newName });
  };

  const onUpdateItemStatus = (newStatus: boolean) => {
    onUpdateItem({ finished: newStatus });
  };

  return (
    <Reorder.Item
      as="li"
      id={task.name}
      value={task}
      style={{ boxShadow, y: dy }}
      className="group relative flex items-center flex-shrink-0 w-full rounded-lg p-8 hover:pr-32 cursor-pointer break-all bg-slate-300 dark:bg-slate-900"
    >
      <div className="mr-3">
        <TaskItemCheckMark
          name={task.name}
          onUpdateStatusCallback={onUpdateItemStatus}
        />
      </div>
      <TaskItemHeading
        initialName={task.name}
        onNameChange={onUpdateItemName}
      />
      <div className="opacity-0 group-hover:opacity-100 absolute flex items-center gap-5 right-1 z-10 pr-8 text-gray-300 visible">
        <Tooltip placement="bottom-start" message="Mark as daily">
          <button
            type="button"
            className="p-1.5 rounded-lg  hover:text-teal-600 hover:bg-teal-600/25"
            onClick={onDeleteItem}
          >
            <HistoryIcon size={24} />
          </button>
        </Tooltip>
        <Tooltip placement="bottom" message="Update task">
          <button
            type="button"
            className="p-1.5 rounded-lg text-amber-500 hover:text-amber-600 hover:bg-amber-600/25 "
            onClick={onDeleteItem}
          >
            <PencilIcon size={24} />
          </button>
        </Tooltip>
        <Tooltip placement="bottom-end" message="Delete task">
          <button
            type="button"
            className="p-1.5 rounded-lg text-red-500 hover:text-red-600 hover:bg-red-600/25"
            onClick={onDeleteItem}
          >
            <TrashIcon size={24} />
          </button>
        </Tooltip>
      </div>
    </Reorder.Item>
  );
};

export default TaskItem;
