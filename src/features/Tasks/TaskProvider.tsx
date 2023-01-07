import { createContext, useContext } from "react";

import { CFC } from "@typings/react";
import { useLocalStorage } from "@hooks/use-local-storage";
import ToastContext from "@features/Toast/Context";
import { ToastType } from "@features/Toast/types";

import { TaskProps } from "./type";

export interface TaskProviderProps {
  initialTasks?: TaskProps[];
}

export interface TaskContextProps {
  tasks: TaskProps[];
  onDeleteTask: (taskName: string) => void;
  onAddTask: (task: TaskProps) => void;
  onUpdateTask: (taskName: string, newTaskProps: Partial<TaskProps>) => void;
  onUpdateTasks: (newTasks: TaskProps[]) => void;
}

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps
);

const TaskProvider: CFC<HTMLElement, TaskProviderProps> = ({
  children,
  initialTasks = [],
}) => {
  const toastContext = useContext(ToastContext);
  const [tasks, setTasks] = useLocalStorage<TaskProps[]>("tasks", initialTasks);

  const addNewTask = (newTask: TaskProps) => {
    const hasIdenticalTask = tasks.some(
      (task) => task.name === newTask.name && task.category === newTask.category
    );
    const shouldAddFirstTask = tasks.length === 0;
    const nonEmptyTaskName = newTask.name.length > 0;

    const shouldAddTask =
      (shouldAddFirstTask && nonEmptyTaskName) || !hasIdenticalTask;

    if (!shouldAddTask) {
      toastContext.addNewToast({
        id: "",
        message: "Cannot add a new task",
        type: "error",
      });

      return;
    }

    setTasks((prev) => (shouldAddTask ? [...prev, newTask] : prev));
    toastContext.addNewToast({
      id: "",
      message: "Successfully added task",
      type: "success",
    });
  };

  const deleteTask = (taskName: string) => {
    setTasks((prev) => prev.filter((task) => task.name !== taskName));
    toastContext.addNewToast({
      id: "",
      message: "Successfully deleted task",
      type: "success",
    });
  };

  const updateTask = (taskId: string, newTaskProps: Partial<TaskProps>) => {
    let toastType: ToastType = "success";
    let toastMessage = "Successfully updated new toast";

    setTasks((prev) =>
      prev.map((task) => {
        if (taskId === task.uid) {
          if (newTaskProps.name && newTaskProps.name.length > 50) {
            const taskLength = newTaskProps.name.length;
            newTaskProps.name = newTaskProps.name.slice(0, 50);

            toastType = "warning";
            toastMessage = `Updated new toast with exceeding length (received ${taskLength})`;
          }

          return {
            ...task,
            ...newTaskProps,
          };
        }

        return task;
      })
    );

    toastContext.addNewToast({
      id: "",
      message: toastMessage,
      type: toastType,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        onAddTask: addNewTask,
        onDeleteTask: deleteTask,
        onUpdateTask: updateTask,
        onUpdateTasks: setTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
