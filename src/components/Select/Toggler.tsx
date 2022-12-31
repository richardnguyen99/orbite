import { ForwardRefRenderFunction, HTMLAttributes, forwardRef } from "react";
import { Listbox } from "@headlessui/react";
import { ListTogglerProps } from "./type";
import { combineClassName } from "@utils/combine-classname";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export type ListTogglerType = ListTogglerProps &
  HTMLAttributes<HTMLButtonElement>;

const SelectTogglerRenderFunction: ForwardRefRenderFunction<
  HTMLButtonElement,
  ListTogglerType
> = ({ className, iconClassName, ...rest }, ref) => {
  return (
    <Listbox.Button
      {...rest}
      className={combineClassName("relative w-full cursor-pointer", className)}
      ref={ref}
    >
      {({ value }) => (
        <>
          <span className="block truncate">{value}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className={combineClassName("w-5 h-5", iconClassName)}
              aria-hidden="true"
            />
          </span>
        </>
      )}
    </Listbox.Button>
  );
};

const SelectToggler = forwardRef(SelectTogglerRenderFunction);
SelectToggler.displayName = "SelectToggler";

export default SelectToggler;
