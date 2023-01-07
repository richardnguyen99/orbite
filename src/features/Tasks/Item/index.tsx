import { useContext, useState } from "react";
import classNames from "classnames";
import { Reorder, useMotionValue } from "framer-motion";
import { HistoryIcon, PencilIcon, TrashIcon } from "@primer/octicons-react";

import Tooltip from "@components/Tooltip";
import { CFC } from "@typings/react";

import { TaskItemProps, TaskProps } from "../type";
import { useShadow } from "../use-shadow";
import { TaskContext } from "../TaskProvider";

import EditableHeading from "./EditableHeading";
import CheckMark from "./CheckMark";
import TaskModal from "../Modal";

/**
 * A core React component that represents a task, containing all the necessary
 * information and additional functionalities associating with this task.
 */
const TaskItem: CFC<HTMLDivElement, TaskItemProps> = ({ task }) => {
  const taskContext = useContext(TaskContext);

  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const dy = useMotionValue(0);
  const boxShadow = useShadow(dy);

  const onDeleteItem = () => {
    taskContext.onDeleteTask(task.name);
  };

  const onUpdateItem = (newTask: Partial<TaskProps>) => {
    taskContext.onUpdateTask(task.uid, { ...newTask });
  };

  const onUpdateItemName = (newName: string) => {
    onUpdateItem({ name: newName });
  };

  const onUpdateItemStatus = (newStatus: boolean) => {
    onUpdateItem({ finished: newStatus });
  };

  const onUpdateDailyState = () => {
    onUpdateItem({ daily: !task.daily });
  };

  return (
    <>
      <Reorder.Item
        as="li"
        id={task.name}
        value={task}
        style={{ boxShadow, y: dy }}
        className="group relative flex items-center flex-shrink-0 w-full rounded-lg  p-4 lg:p-8 hover:pr-32 lg:hover:pr-48 break-all bg-slate-300 dark:bg-slate-900"
      >
        <div className="mr-3">
          <CheckMark
            name={task.name}
            onUpdateStatusCallback={onUpdateItemStatus}
          />
        </div>
        <EditableHeading
          initialName={task.name}
          onNameChange={onUpdateItemName}
        />
        <div className="opacity-0 group-focus:opacity-100 group-hover:opacity-100 absolute flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 right-1 z-10 pr-4 lg:pr-8 text-gray-300 visible">
          <Tooltip
            placement="bottom-start"
            message={`${task.daily ? "Unmark" : "Mark"} as daily`}
          >
            <button
              type="button"
              className={classNames(
                "p-1.5 rounded-lg  hover:text-teal-600 hover:bg-teal-600/25",
                { "text-teal-500": task.daily }
              )}
              onClick={onUpdateDailyState}
            >
              <HistoryIcon size={24} />
            </button>
          </Tooltip>
          <Tooltip placement="bottom" message="Update task">
            <button
              type="button"
              className="p-1.5 rounded-lg text-amber-500 hover:text-amber-600 hover:bg-amber-600/25 "
              onClick={() => setOpenUpdateModal(true)}
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
      <TaskModal
        open={openUpdateModal}
        setOpen={setOpenUpdateModal}
        type="update"
        task={task}
      />
    </>
  );
};

export default TaskItem;
