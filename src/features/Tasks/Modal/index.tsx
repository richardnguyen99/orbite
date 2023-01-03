/* eslint-disable quotes */
import React, {
  FC,
  Fragment,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { DotFillIcon, FeedStarIcon, XIcon } from "@primer/octicons-react";

import Dropdown from "@components/Dropdown";

import { TaskContext } from "../TaskProvider";
import { TaskProps } from "../type";
import AddTaskNameInput from "../AddTaskNameInput";
import AddTaskSelect from "../AddTaskSelect";
import HeadingPanel from "./HeadingPanel";
import Button from "@components/Button";
import DueDate from "./DueDate";
import Icon from "@components/Icon";

interface Props {
  type: "add" | "update";
  open: boolean;
  setOpen: (state: boolean) => void;
}

const defaultTask = {
  name: "",
  category: "",
  prior: 1,
  finished: false,
  dueDate: undefined,
  notes: "",
  daily: false,
};

const AddNewTaskModal: FC<Props> = ({ open, setOpen, type }) => {
  const taskContext = useContext(TaskContext);
  const [task, setTask] = useState<TaskProps>(defaultTask);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const getSelectionDisplayName = () => {
    return task.category !== "" ? task.category : "Select one";
  };

  const addTaskHandler = useCallback(() => {
    taskContext.onAddTask(task);
    setTask(defaultTask);
    setOpen(false);
  }, [task, taskContext, setOpen]);

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
                  <form>
                    <div className="mb-6">
                      <AddTaskNameInput
                        value={task.name}
                        onUpdateValue={setTaskName}
                      />
                    </div>
                    <div className="flex flex-row items-center mb-6 h-full">
                      <DueDate
                        selectedDate={task.dueDate}
                        onSelectedDate={setDueDate}
                      />
                      <div className="ml-auto w-5/12">
                        <label
                          htmlFor="category"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Category
                        </label>
                        <Dropdown animation>
                          <Dropdown.Toggler className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                            {getSelectionDisplayName()}
                          </Dropdown.Toggler>
                          <Dropdown.List>
                            <div className="px-1.5 py-1.5">
                              <Dropdown.Item
                                onClick={() => setCategory("Work")}
                              >
                                <div className="inline-flex items-center">
                                  <DotFillIcon className="fill-red-500 mr-3" />
                                  Work
                                </div>
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => setCategory("Personal")}
                              >
                                <div className="inline-flex items-center">
                                  <DotFillIcon className="fill-green-500 mr-3" />
                                  Personal
                                </div>
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => setCategory("School")}
                              >
                                <div className="inline-flex items-center">
                                  <DotFillIcon className="fill-sky-500 mr-3" />
                                  School
                                </div>
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => setCategory("Chores")}
                              >
                                <div className="inline-flex items-center">
                                  <DotFillIcon className="fill-indigo-500 mr-3" />
                                  Chores
                                </div>
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => setCategory("Special")}
                              >
                                <div className="inline-flex items-center">
                                  <FeedStarIcon className="fill-yellow-500 mr-3" />
                                  Special
                                </div>
                              </Dropdown.Item>
                            </div>
                          </Dropdown.List>
                        </Dropdown>
                      </div>
                    </div>

                    <div className="mb-6">
                      <AddTaskSelect onSelect={setPrior} />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description <span className="italic">(Optional)</span>
                      </label>
                      <textarea
                        id="taskDescription"
                        rows={4}
                        className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        placeholder="Describe your task"
                      ></textarea>
                    </div>
                    <Button
                      icon={Icon.NewTask}
                      rounded
                      size="base"
                      color="green"
                      onClick={addTaskHandler}
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

export default AddNewTaskModal;
