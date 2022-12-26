import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@primer/octicons-react";
import classNames from "classnames";
import { FC, HTMLAttributes } from "react";
import { DropdownTogglerProps } from "./types";

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
    <div {...rest}>
      <Menu.Button className="inline-flex w-full h-full items-center justify-center rounded-md bg-slate-400 dark:bg-slate-900 bg-opacity-30 px-4 py-2 text-[16px] leading-[1.2] font-medium hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 border border-transparent hover:border-slate-500/80 focus:border-slate-500 dark:hover:border-slate-700/80 dark:focus:border-slate-700">
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
