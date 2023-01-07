import { FC, Fragment, useCallback, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { CFC } from "@typings/react";
import { combineClassName } from "@utils/combine-classname";
import { getRingClassNames } from "./util";
import classNames from "classnames";

const Pill: CFC<HTMLDivElement> = ({ children, className }) => {
  return (
    <div
      className={combineClassName(
        "inline-block w-auto py-1 px-2.5 text-xs font-medium focus:outline-none rounded-full border focus:z-10 focus:ring-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const priorities = [
  {
    value: 1,
    component: (
      <Pill className="text-blue-900 bg-blue-300 border-blue-700 hover:bg-blue-300 hover:text-blue-700 focus:ring-blue-200 dark:focus:ring-blue-700 dark:bg-blue-800 dark:text-blue-400 dark:border-blue-600 dark:hover:text-blue-500 dark:hover:bg-blue-700">
        Prior: 1
      </Pill>
    ),
  },
  {
    value: 2,
    component: (
      <Pill className="text-green-900 bg-green-300 border-green-700 hover:bg-green-300 hover:text-green-700 focus:ring-green-200 dark:focus:ring-green-700 dark:bg-green-800 dark:text-green-400 dark:border-green-600 dark:hover:text-green-500 dark:hover:bg-green-700">
        Prior: 2
      </Pill>
    ),
  },
  {
    value: 3,
    component: (
      <Pill className="text-lime-900 bg-lime-300 border-lime-700 hover:bg-lime-300 hover:text-lime-700 focus:ring-lime-200 dark:focus:ring-lime-700 dark:bg-lime-800 dark:text-lime-400 dark:border-lime-600 dark:hover:text-lime-500 dark:hover:bg-lime-700">
        Prior: 3
      </Pill>
    ),
  },
  {
    value: 5,
    component: (
      <Pill className="text-orange-900 bg-orange-300 border-orange-700 hover:bg-orange-300 hover:text-orange-700 focus:ring-orange-200 dark:focus:ring-orange-700 dark:bg-orange-800 dark:text-orange-400 dark:border-orange-600 dark:hover:text-orange-500 dark:hover:bg-orange-700">
        Prior: 5
      </Pill>
    ),
  },
  {
    value: 8,
    component: (
      <Pill className="text-red-900 bg-red-300 border-red-700 hover:bg-red-300 hover:text-red-700 focus:ring-red-200 dark:focus:ring-red-700 dark:bg-red-800 dark:text-red-400 dark:border-red-500 dark:hover:text-red-600 dark:hover:bg-red-700">
        Prior: 8
      </Pill>
    ),
  },
  {
    value: 13,
    component: (
      <Pill className="text-fuchsia-900 bg-fuchsia-300 border-fuchsia-700 hover:bg-fuchsia-300 hover:text-fuchsia-700 focus:ring-fuchsia-200 dark:focus:ring-fuchsia-700 dark:bg-fuchsia-800 dark:text-fuchsia-400 dark:border-fuchsia-600 dark:hover:text-fuchsia-500 dark:hover:bg-fuchsia-700">
        Prior: 13
      </Pill>
    ),
  },
  {
    value: 21,
    component: (
      <Pill className="text-indigo-900 bg-indigo-300 border-indigo-700 hover:bg-indigo-300 hover:text-indigo-700 focus:ring-indigo-200 dark:focus:ring-indigo-700 dark:bg-indigo-800 dark:text-indigo-400 dark:border-indigo-600 dark:hover:text-indigo-500 dark:hover:bg-indigo-700">
        Prior: 21
      </Pill>
    ),
  },
];

export interface Props {
  type: "add" | "update";
  onSelect: (newPrior: number) => void;
}

const TaskSelect: FC<Props> = ({ onSelect, type }) => {
  const [selected, setSelected] = useState(priorities[0]);

  const changeHandler = useCallback(
    (newSelected: typeof selected) => {
      setSelected(newSelected);
      onSelect(newSelected.value);
    },
    [onSelect]
  );

  return (
    <>
      <label
        htmlFor="taskName"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Task name
      </label>
      <Listbox value={selected} onChange={changeHandler}>
        <div className="relative mt-1">
          <Listbox.Button
            className={classNames(
              "block relative w-full cursor-pointer text-left outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
              getRingClassNames(type)
            )}
          >
            <span className="block truncate">{selected.component}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-in duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md sm:text-sm divide-y divide-gray-300 dark:divide-slate-700 bg-slate-100 dark:bg-slate-900 shadow-lg ring-slate-500 shadow-slate-400 dark:ring-slate-700  dark:shadow-slate-800/60 ring-opacity-5 focus:outline-none border border-slate-400 dark:border-slate-700">
              {priorities.map((priority, priorityIdx) => (
                <Listbox.Option
                  key={priorityIdx}
                  className={({ active, selected }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-slate-300 dark:bg-slate-800"
                        : "text-gray-900"
                    } ${selected && "bg-slate-300 dark:bg-slate-800"}`
                  }
                  value={priority}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {priority.component}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-700 dark:text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
};

export default TaskSelect;
