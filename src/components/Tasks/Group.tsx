import { useContext } from "react";
import { Reorder } from "framer-motion";

import { CFC } from "@typings/react";
import { TaskProps } from "./type";
import TaskItem from "./Item";
import { TaskContext } from "./TaskProvider";

export interface GroupProps {
  initialValues?: TaskProps[];
  onReorderCallback?: (newValues: TaskProps[]) => void;
}

const TaskGroup: CFC<HTMLDivElement, GroupProps> = ({ ...rest }) => {
  const taskContext = useContext(TaskContext);

  return (
    <div {...rest}>
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
