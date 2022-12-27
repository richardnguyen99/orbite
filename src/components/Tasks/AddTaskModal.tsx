/* eslint-disable quotes */
import { Fragment, forwardRef, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { DotFillIcon, FeedStarIcon, XIcon } from "@primer/octicons-react";

import Dropdown from "@components/Dropdown";
import MyPopover from "@components/Popover";

interface Props {
  open: boolean;
  setOpen: (state: boolean) => void;
}

const AddNewTaskModal = forwardRef<HTMLButtonElement, Props>(
  ({ open, setOpen }, ref) => {
    const [category, setCategory] = useState("");

    const buttonRef = useRef<HTMLButtonElement>(null);

    const getSelectionDisplayName = () => {
      return category !== "" ? category : "Select a category";
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
            <div className="fixed inset-0 bg-slate-800 bg-opacity-20 dark:bg-opacity-75 transition-opacity backdrop-blur-md dark:backdrop-blur" />
          </Transition.Child>

          <div className="fixed inset-0 z-2 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform rounded-lg bg-slate-200 dark:bg-slate-900 text-left shadow-2xl shadow-gray-600 dark:shadow-gray-900 transition-all sm:my-8 sm:w-full sm:max-w-lg h-full p-8">
                  <Dialog.Title
                    as="h1"
                    className="text-3xl font-black leading-6 text-gray-900 dark:text-white"
                  >
                    <div className="flex items-center">
                      <p>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-lime-500 from-green-600 mr-2">
                          Add
                        </span>
                        New Task
                      </p>
                      <button
                        ref={buttonRef}
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent px-2 py-2 text-sm font-medium hover:bg-gray-300  dark:hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ml-auto"
                        onClick={() => setOpen(false)}
                      >
                        <XIcon size={24} />
                      </button>
                    </div>
                  </Dialog.Title>

                  <hr className="my-4 h-[2px] bg-gray-300 border-0 dark:bg-slate-700" />

                  {/* Form content */}
                  <div>
                    <form>
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Task name
                        </label>
                        <input
                          type="text"
                          id="taskName"
                          className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                          placeholder={
                            'Give your task a name. For example, "Finish Close Button"'
                          }
                          required
                        />
                      </div>
                      <div className="flex flex-row items-center mb-6 h-full">
                        <div className="w-6/12">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Task name
                          </label>
                          <MyPopover />
                        </div>
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
                      <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            required
                          />
                        </div>
                        <label
                          htmlFor="remember"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-green-600/80 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          aria-hidden="true"
                          className="-ml-1 mr-2 h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                          />
                        </svg>
                        Add Task
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
);

AddNewTaskModal.displayName = "AddNewTaskModal";

export default AddNewTaskModal;
