import classNames from "classnames";
import {
  HTMLAttributes,
  FC,
  useState,
  useCallback,
  useEffect,
  useContext,
} from "react";
import { TaskContext } from "./TaskProvider";
import { TaskProps } from "./type";

interface Props {
  name: string;
  onUpdateStatusCallback: (newStatus: boolean) => void;
}

const TaskItemCheckMark: FC<Props & HTMLAttributes<HTMLButtonElement>> = ({
  name,
  onUpdateStatusCallback,
}) => {
  const taskContext = useContext(TaskContext);
  const [task, setTask] = useState<TaskProps>(
    taskContext.tasks.filter((task) => task.name === name)[0]
  );

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [animationStatus, setAnimationStatus] = useState("enter");

  const getClassName = () => {
    return classNames(
      "cursor-pointer h-[36px] w-[36px] bg-checkmark-animation bg-left bg-no-repeat bg-checkmark-animation-size",
      { "animate-checkmark": animationStatus === "animating" },
      { "bg-right": task.finished }
    );
  };

  const onClickHandler = useCallback(() => {
    if (!task.finished) {
      setAnimationStatus("animating");
      return;
    }

    onUpdateStatusCallback(false);
  }, [onUpdateStatusCallback, task]);

  useEffect(() => {
    setTask(taskContext.tasks.filter((task) => task.name === name)[0]);
  }, [name, taskContext]);

  useEffect(() => {
    if (animationStatus === "animating") {
      if (timer) clearTimeout(timer);

      setTimer(
        setTimeout(() => {
          setAnimationStatus("done");
          onUpdateStatusCallback(true);
        }, 800)
      );
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
    // Do not update the dependency list according to the ESLint! This effect
    //only listens to the event when animation status changes to "animating",
    // which means the animation is happening.
  }, [animationStatus]);

  return (
    <button type="button" className={getClassName()} onClick={onClickHandler} />
  );
};

export default TaskItemCheckMark;
