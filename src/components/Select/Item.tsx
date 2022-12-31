import { Listbox } from "@headlessui/react";
import { ForwardRefRenderFunction, HTMLAttributes, forwardRef } from "react";
import { SelectItemProps } from "./type";
import { combineClassName } from "@utils/combine-classname";
import { CheckIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";

export type SelectItemType = HTMLAttributes<HTMLLIElement> & SelectItemProps;

const SelectItemRefRenderFunction: ForwardRefRenderFunction<
  HTMLLIElement,
  SelectItemType
> = ({ value, children, onClick, ...rest }, ref) => {
  return (
    <Listbox.Option
      as="li"
      {...rest}
      ref={ref}
      value={value}
      onClick={onClick}
      className={combineClassName(
        "relative cursor-default select-none",
        rest.className
      )}
    >
      {({ selected }) => (
        <>
          <span
            className={classNames("block truncate", {
              "font-medium": selected,
              "font-normal": !selected,
            })}
          >
            {children}
          </span>
          {selected ? (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          ) : null}
        </>
      )}
    </Listbox.Option>
  );
};

const SelectItem = forwardRef(SelectItemRefRenderFunction);
SelectItem.displayName = "SelectItem";

export default SelectItem;
