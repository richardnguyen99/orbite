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
  text,
  href,
  ...rest
}) => {
  const defaultClassNames = () =>
    classNames("group-hover:text-indigo-500 dark:group-hover:text-indigo-400");

  const activeClassNames = () =>
    classNames("text-indigo-500 group-hover:text-indigo-600");

  const Child = () => (
    <div className="flex space-x-2 items-center">
      {icon || null}
      {text && <p>{text}</p>}
    </div>
  );

  const Router = () =>
    to ? (
      <BaseNavLink
        to={to}
        className={({ isActive }) =>
          isActive ? activeClassNames() : defaultClassNames()
        }
      >
        <Child />
      </BaseNavLink>
    ) : null;

  const Anchor = () =>
    href ? (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={defaultClassNames()}
      >
        <Child />
      </a>
    ) : null;

  return (
    <li
      {...rest}
      className="group list-none py-2 px-2 rounded-md hover:bg-slate-300 hover:dark:bg-neutral-800 "
    >
      {href ? <Anchor /> : <Router />}
    </li>
  );
};

export default NavLink;
