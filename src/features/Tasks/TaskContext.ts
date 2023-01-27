import { createContext } from "react";

import { TaskContextProps } from "./type";

const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);

export default TaskContext;
