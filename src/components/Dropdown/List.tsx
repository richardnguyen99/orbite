import { combineClassName } from "../../utils/combine-classname";
import { Menu } from "@headlessui/react";
import { ForwardRefRenderFunction, HTMLAttributes, forwardRef } from "react";

const DropdownListRefRenderFunction: ForwardRefRenderFunction<
  HTMLDivElement,
  object & HTMLAttributes<HTMLDivElement>
> = ({ ...rest }, ref) => {
  return (
    <Menu.Items
      {...rest}
      ref={ref}
      static
      className={combineClassName(
        "absolute z-[1001] right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-slate-700 rounded-md bg-slate-100 dark:bg-slate-900 shadow-lg ring-slate-500 shadow-slate-400   dark:ring-slate-700  dark:shadow-slate-800/60 ring-opacity-5 focus:outline-none",
        rest.className
      )}
    >
      <div className="px-1 py-1 ">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "bg-violet-500 text-white" : "text-gray-900"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
            >
              Edit
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active
                  ? "bg-violet-500 dark:bg-slate-800 text-white"
                  : "text-gray-900"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-slate-100`}
            >
              Duplicate
            </button>
          )}
        </Menu.Item>
      </div>
      <div className="px-1 py-1">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "bg-violet-500 text-white" : "text-gray-900"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
            >
              Archive
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "bg-violet-500 text-white" : "text-gray-900"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
            >
              Move
            </button>
          )}
        </Menu.Item>
      </div>
      <div className="px-1 py-1">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "bg-violet-500 text-white" : "text-gray-900"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
            >
              x Delete
            </button>
          )}
        </Menu.Item>
      </div>
    </Menu.Items>
  );
};

const DropdownList = forwardRef(DropdownListRefRenderFunction);
DropdownList.displayName = "DropdownList";

export default DropdownList;
