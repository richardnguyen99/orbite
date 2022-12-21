import { useState } from "react";
import { Reorder } from "framer-motion";

import { CFC } from "@typings/react";
import { TaskProps } from "./type";
import TaskItem from "./Item";

export interface GroupProps {
  initialValues: TaskProps[];
  onReorderCallback?: (newValues: TaskProps[]) => void;
}

const TaskGroup: CFC<HTMLDivElement, GroupProps> = ({
  initialValues,
  ...rest
}) => {
  const [values, setValues] = useState(initialValues);

  return (
    <div {...rest}>
      <Reorder.Group
        axis="y"
        values={values}
        onReorder={setValues}
        className="flex flex-col space-y-4"
      >
        {values.map((item, _) => (
          <TaskItem key={item.name} task={item} />
        ))}
      </Reorder.Group>
    </div>
  );
};

export default TaskGroup;
