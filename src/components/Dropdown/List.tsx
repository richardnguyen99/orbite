import { Menu } from "@headlessui/react";
import { ForwardRefRenderFunction, HTMLAttributes, forwardRef } from "react";

import { combineClassName } from "@utils/combine-classname";

const DropdownListRefRenderFunction: ForwardRefRenderFunction<
  HTMLDivElement,
  object & HTMLAttributes<HTMLDivElement>
> = ({ children, ...rest }, ref) => {
  return (
    <Menu.Items
      {...rest}
      ref={ref}
      static
      className={combineClassName(
        "absolute z-[1001] right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-slate-700 rounded-md bg-slate-100 dark:bg-slate-900 shadow-lg ring-slate-500 shadow-slate-400   dark:ring-slate-700  dark:shadow-slate-800/60 ring-opacity-5 focus:outline-none border border-slate-500 dark:border-slate-700",
        rest.className
      )}
    >
      {children}
    </Menu.Items>
  );
};

const DropdownList = forwardRef(DropdownListRefRenderFunction);
DropdownList.displayName = "DropdownList";

export default DropdownList;
