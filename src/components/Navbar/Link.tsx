/**
 *
 */

import classNames from "classnames";
import { NavLink as BaseNavLink } from "react-router-dom";

import { CFC } from "@typings/react";
import type { NavItemProps } from "./types";

const NavLink: CFC<HTMLLIElement, NavItemProps> = ({
  to,
  icon,
  tag,
  text,
  ...rest
}) => {
  const defaultClassNames = () =>
    classNames("group-hover:text-violet-600 dark:group-hover:text-violet-700");

  const activeClassNames = () =>
    classNames("text-violet-600 group-hover:text-violet-700");

  return (
    <li
      {...rest}
      className="group list-none py-1 px-2 rounded-md hover:bg-neutral-300 hover:dark:bg-neutral-800"
    >
      <BaseNavLink
        to={to}
        className={({ isActive }) =>
          isActive ? activeClassNames() : defaultClassNames()
        }
      >
        {text}
      </BaseNavLink>
    </li>
  );
};

export default NavLink;
