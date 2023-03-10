import { useContext } from "react";
import { Reorder } from "framer-motion";

import { CFC } from "@typings/react";
import { TaskProps } from "./type";
import TaskItem from "./Item";
import TaskContext from "./TaskContext";

import AddNewTaskButton from "./AddTaskButton";
import TaskActionDropdown from "./TaskActionDropdown";

export interface GroupProps {
  initialValues?: TaskProps[];
  onReorderCallback?: (newValues: TaskProps[]) => void;
}

const TaskGroup: CFC<HTMLDivElement, GroupProps> = ({ ...rest }) => {
  const taskContext = useContext(TaskContext);

  return (
    <div {...rest}>
      <div className="lg:flex lg:items-center lg:justify-between pb-6">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7  sm:truncate sm:text-3xl sm:tracking-tight">
            Views
          </h2>
        </div>
        <div className="mt-5 flex items-center justify-between flex-row-reverse lg:flex-row lg:justify-start lg:space-x-2 lg:mt-0 lg:ml-4">
          <span className="sm:ml-3">
            <TaskActionDropdown />
          </span>
          <span className="sm:ml-3">
            <AddNewTaskButton />
          </span>
        </div>
      </div>
      <Reorder.Group
        axis="y"
        values={taskContext.tasks}
        onReorder={taskContext.onUpdateTasks}
        className="flex flex-col space-y-4"
      >
        {taskContext.tasks.map((item, _) => (
          <TaskItem key={item.name} task={item} />
        ))}
      </Reorder.Group>
    </div>
  );
};

export default TaskGroup;
