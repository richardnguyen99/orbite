import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@primer/octicons-react";
import classNames from "classnames";
import { FC, HTMLAttributes } from "react";
import { DropdownTogglerProps } from "./types";
import { combineClassName } from "@utils/combine-classname";

export type DropdownTogglerType = FC<
  DropdownTogglerProps & HTMLAttributes<HTMLDivElement>
>;

const DropdownToggler: DropdownTogglerType = ({
  text,
  rotateOnActive = false,
  children,
  ...rest
}) => {
  if (!text && !children) {
    throw new Error(
      "<Dropdown.Toggler /> expects to have either text or children passed in."
    );
  }

  const content = text || children;

  return (
    <div {...rest} className="">
      <Menu.Button
        className={combineClassName(
          "inline-flex w-full h-full items-center justify-between",
          rest.className
        )}
      >
        {({ open }) => (
          <>
            {content}
            <ChevronDownIcon
              className={classNames(
                "ml-2 -mr-1 h-5 w-5  ease-in-out transition-transform duration-300",
                { "rotate-180": open && rotateOnActive }
              )}
              aria-hidden="true"
            />
          </>
        )}
      </Menu.Button>
    </div>
  );
};

export default DropdownToggler;
