import { createContext, useContext } from "react";

import { TaskProps } from "./type";
import { CFC } from "@typings/react";
import { useLocalStorage } from "@hooks/use-local-storage";
import ToastContext from "@components/Toast/Context";

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
    const shouldAddNewTask =
      tasks.some(
        (task) =>
          task.name !== newTask.name || task.category !== newTask.category
      ) || tasks.length === 0;

    setTasks((prev) => (shouldAddNewTask ? [...prev, newTask] : prev));
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

  const updateTask = (taskName: string, newTaskProps: Partial<TaskProps>) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (taskName === task.name) return { ...task, ...newTaskProps };

        return task;
      })
    );
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
