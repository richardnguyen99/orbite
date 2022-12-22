import { createContext } from "react";

import { TaskProps } from "./type";
import { CFC } from "@typings/react";
import { useLocalStorage } from "@hooks/use-local-storage";

export interface TaskProviderProps {
  initialTasks?: TaskProps[];
}

export interface TaskContextProps {
  tasks: TaskProps[];
  onDeleteTask: (taskName: string) => void;
  onAddTask: (task: TaskProps) => void;
  onUpdateTask: (taskName: string, newTaskProps: TaskProps) => void;
  onUpdateTasks: (newTasks: TaskProps[]) => void;
}

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps
);

const TaskProvider: CFC<HTMLElement, TaskProviderProps> = ({
  children,
  initialTasks = [],
}) => {
  const [tasks, setTasks] = useLocalStorage<TaskProps[]>("tasks", initialTasks);

  const addNewTask = (newTask: TaskProps) => {
    const shouldAddNewTask = tasks.some(
      (task) => task.name !== newTask.name || task.category !== newTask.category
    );

    setTasks((prev) => (shouldAddNewTask ? [...prev, newTask] : prev));
  };

  const deleteTask = (taskName: string) => {
    setTasks((prev) => prev.filter((task) => task.name !== taskName));
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
