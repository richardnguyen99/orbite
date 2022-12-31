import { Listbox } from "@headlessui/react";
import { combineClassName } from "@utils/combine-classname";
import { ForwardRefRenderFunction, HTMLAttributes, forwardRef } from "react";

const getDefaultStyle = (customizedClassName: string | undefined) => {
  if (customizedClassName) return customizedClassName;

  return "divide-y divide-gray-100 dark:divide-slate-700 rounded-md bg-slate-100 dark:bg-slate-900 shadow-lg ring-slate-500 shadow-slate-400   dark:ring-slate-700  dark:shadow-slate-800/60 ring-opacity-5 focus:outline-none border border-slate-500 dark:border-slate-700";
};

const SelectListRefRenderFunction: ForwardRefRenderFunction<
  HTMLUListElement,
  object & HTMLAttributes<HTMLUListElement>
> = ({ children, ...rest }, ref) => {
  return (
    <Listbox.Options
      {...rest}
      ref={ref}
      static
      className={combineClassName(
        "absolute z-[1001] right-0 mt-2 w-56 origin-top-right",
        getDefaultStyle(rest.className)
      )}
    >
      {children}
    </Listbox.Options>
  );
};

const SelectList = forwardRef(SelectListRefRenderFunction);
SelectList.displayName = "SelectList";

export default SelectList;
