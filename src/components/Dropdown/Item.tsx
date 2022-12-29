import { HTMLAttributes, Ref, forwardRef } from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { DropdownItemProps } from "./types";

export type DropdownItemType = DropdownItemProps &
  HTMLAttributes<HTMLDivElement>;

const DropdownItemRenderRef = (
  {
    icon: _icon,
    text,
    children,
    onClick,
    link = undefined,
    to = "#",
    ...rest
  }: DropdownItemType,
  _ref: Ref<HTMLElement>
) => {
  const content = text || children;

  const getClassName = (active: boolean) => {
    return classNames(
      "group flex w-full items-center rounded-md px-2 py-2 text-sm text-slate-900 dark:text-slate-100",
      {
        "dark:hover:bg-slate-800": active,
      }
    );
  };

  return (
    <Menu.Item {...rest}>
      {({ active }) =>
        // If no link is passed
        !link ? (
          <button
            type="button"
            className={getClassName(active)}
            onClick={onClick}
          >
            {content}
          </button>
        ) : link === "a" ? ( // Link is passed as anchor
          <a
            href={to}
            target="_blank"
            rel="noreferrer"
            className={getClassName(active)}
          >
            {content}
          </a>
        ) : (
          // Link is passed as router link
          <Link to={to} className={getClassName(active)}>
            {content}
          </Link>
        )
      }
    </Menu.Item>
  );
};

const DropdownItem = forwardRef(DropdownItemRenderRef);
DropdownItem.displayName = "DropdownItem";

export default DropdownItem;
