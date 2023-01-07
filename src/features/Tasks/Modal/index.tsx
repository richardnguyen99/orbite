import React, {
  FC,
  FormEventHandler,
  Fragment,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@primer/octicons-react";

import Button from "@components/Button";
import Icon from "@components/Icon";

import HeadingPanel from "./HeadingPanel";
import DueDate from "./DueDate";
import Category from "./Category";

import { TaskContext } from "../TaskProvider";
import { TaskProps } from "../type";
import AddTaskNameInput from "./Input";
import AddTaskSelect from "./Select";
import Description from "./Description";

interface Props {
  task?: TaskProps;
  type: "add" | "update";
  open: boolean;
  setOpen: (state: boolean) => void;
}

const defaultTask = {
  uid: uuidv4(),
  name: "",
  category: "",
  prior: 1,
  finished: false,
  dueDate: undefined,
  notes: "",
  daily: false,
};

const TaskModal: FC<Props> = ({ open, setOpen, type, task: _task }) => {
  const taskContext = useContext(TaskContext);
  const [task, setTask] = useState<TaskProps>(_task || defaultTask);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const addTaskHandler = useCallback(() => {
    taskContext.onAddTask(task);
    setTask(defaultTask);
    setOpen(false);
  }, [task, taskContext, setOpen]);

  const updateTaskHandler = useCallback(() => {
    taskContext.onUpdateTask(task.uid, task);
    //setTask(defaultTask);
    setOpen(false);
  }, [setOpen, task, taskContext]);

  const setTaskName = (newName: string) => {
    setTask((prev) => ({ ...prev, name: newName }));
  };

  const setCategory = (newValue: string) => {
    setTask((prev) => ({ ...prev, category: newValue }));
  };

  const setDueDate = (newDate: Date | undefined) => {
    setTask((prev) => ({ ...prev, dueDate: newDate ? newDate : prev.dueDate }));
  };

  const setPrior = (newPrior: number) => {
    setTask((prev) => ({ ...prev, prior: newPrior }));
  };

  const setDescription = (newValue: string) => {
    setTask((prev) => ({ ...prev, notes: newValue }));
  };

  const formSubmitHandler = useCallback<FormEventHandler>(
    (e) => {
      e.preventDefault();
      updateTaskHandler();
      setOpen(false);
    },
    [setOpen, updateTaskHandler]
  );

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[1001]"
        initialFocus={buttonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity backdrop-blur-md dark:backdrop-blur bg-slate-800 bg-opacity-20 dark:bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-2 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg text-left shadow-2xl transition-all sm:my-8 w-full lg:max-w-lg h-full p-8 bg-slate-200 dark:bg-slate-900 shadow-gray-600 dark:shadow-gray-900">
                {/** Heading section */}
                <Dialog.Title
                  as="h1"
                  className="text-3xl font-black leading-6 text-gray-900 dark:text-white"
                >
                  <div className="flex items-center">
                    <HeadingPanel type={type} />
                    <Button
                      ref={buttonRef}
                      className="ml-auto"
                      variant="transparent"
                      onClick={() => setOpen(false)}
                      icon={XIcon}
                    />
                  </div>
                </Dialog.Title>

                <hr className="my-4 h-[2px] bg-gray-300 border-0 dark:bg-slate-700" />

                {/* Form content */}
                <div>
                  <form onSubmit={formSubmitHandler}>
                    <div className="mb-6">
                      <AddTaskNameInput
                        type={type}
                        value={task.name}
                        onUpdateValue={setTaskName}
                      />
                    </div>
                    <div className="flex flex-row items-center mb-6 h-full">
                      <DueDate
                        type={type}
                        selectedDate={task.dueDate}
                        onSelectedDate={setDueDate}
                      />
                      <Category
                        type={type}
                        category={task.category}
                        onSelectCategory={setCategory}
                      />
                    </div>

                    <div className="mb-6">
                      <AddTaskSelect type={type} onSelect={setPrior} />
                    </div>
                    <Description type={type} onChange={setDescription} />
                    <Button
                      icon={Icon.NewTask}
                      rounded
                      size="base"
                      color={type === "add" ? "green" : "amber"}
                      onClick={
                        type === "add" ? addTaskHandler : updateTaskHandler
                      }
                    >
                      New Task
                    </Button>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default TaskModal;
