/**
 * A React component that renders items for <Navbar.ModalMenu /> component.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { NavLink as BaseNavLink } from "react-router-dom";

import { CFC, Colors } from "@typings/react";
import type { NavItemProps } from "./types";
import { cloneElement, useCallback, useState } from "react";
import classNames from "classnames";

export type ModalItemProps = Omit<NavItemProps, "tag"> & {
  color: Colors;
};

const iconBgColors = {
  slate: "dark:group-hover:bg-slate-600",
  gray: "dark:group-hover:bg-gray-600",
  zinc: "dark:group-hover:bg-zinc-600",
  neutral: "dark:group-hover:bg-neutral-600",
  stone: "dark:group-hover:bg-stone-600",
  red: "dark:group-hover:bg-red-600",
  orange: "dark:group-hover:bg-orange-600",
  amber: "dark:group-hover:bg-amber-600",
  yellow: "dark:group-hover:bg-yellow-600",
  lime: "dark:group-hover:bg-lime-600",
  green: "dark:group-hover:bg-green-600",
  emerald: "dark:group-hover:bg-emerald-600",
  teal: "dark:group-hover:bg-teal-600",
  cyan: "dark:group-hover:bg-cyan-600",
  sky: "dark:group-hover:bg-sky-600",
  blue: "dark:group-hover:bg-blue-600",
  indigo: "dark:group-hover:bg-indigo-600",
  violet: "dark:group-hover:bg-violet-600",
  purple: "dark:group-hover:bg-purple-600",
  fuchsia: "dark:group-hover:bg-fuchsia-600",
  pink: "dark:group-hover:bg-pink-600",
  rose: "dark:group-hover:bg-rose-600",
};

const hoverTextColors = {
  slate: "dark:group-hover:text-slate-600",
  gray: "dark:group-hover:text-gray-600",
  zinc: "dark:group-hover:text-zinc-600",
  neutral: "dark:group-hover:text-neutral-600",
  stone: "dark:group-hover:text-stone-600",
  red: "dark:group-hover:text-red-600",
  orange: "dark:group-hover:text-orange-600",
  amber: "dark:group-hover:text-amber-600",
  yellow: "dark:group-hover:text-yellow-600",
  lime: "dark:group-hover:text-lime-600",
  green: "dark:group-hover:text-green-600",
  emerald: "dark:group-hover:text-emerald-600",
  teal: "dark:group-hover:text-teal-600",
  cyan: "dark:group-hover:text-cyan-600",
  sky: "dark:group-hover:text-sky-600",
  blue: "dark:group-hover:text-blue-600",
  indigo: "dark:group-hover:text-indigo-600",
  violet: "dark:group-hover:text-violet-600",
  purple: "dark:group-hover:text-purple-600",
  fuchsia: "dark:group-hover:text-fuchsia-600",
  pink: "dark:group-hover:text-pink-600",
  rose: "dark:group-hover:text-rose-600",
};

const activeTextColors = {
  slate: "dark:text-slate-600",
  gray: "dark:text-gray-600",
  zinc: "dark:text-zinc-600",
  neutral: "dark:text-neutral-600",
  stone: "dark:text-stone-600",
  red: "dark:text-red-600",
  orange: "dark:text-orange-600",
  amber: "dark:text-amber-600",
  yellow: "dark:text-yellow-600",
  lime: "dark:text-lime-600",
  green: "dark:text-green-600",
  emerald: "dark:text-emerald-600",
  teal: "dark:text-teal-600",
  cyan: "dark:text-cyan-600",
  sky: "dark:text-sky-600",
  blue: "dark:text-blue-600",
  indigo: "dark:text-indigo-600",
  violet: "dark:text-violet-600",
  purple: "dark:text-purple-600",
  fuchsia: "dark:text-fuchsia-600",
  pink: "dark:text-pink-600",
  rose: "dark:text-rose-600",
};

const NavbarModalItem: CFC<HTMLLIElement, ModalItemProps> = ({
  icon,
  href,
  to,
  text,
  color,
  ...rest
}) => {
  const [active, setActive] = useState(false);

  const Child = () => (
    <div className="flex space-x-2 items-center">
      <div
        className={classNames("rounded-md p-2 mr-2", {
          [iconBgColors[color]]: true,
        })}
      >
        {icon && cloneElement(icon, { active: active, color })}
      </div>
      {text && <p>{text}</p>}
    </div>
  );

  const defaultClassNames = useCallback(
    (isActive: boolean) => {
      return classNames(
        "group flex items-center lg:text-sm lg:leading-6 font-semibold  dark:text-gray-200",
        {
          [hoverTextColors[color]]: true,
          [activeTextColors[color]]: isActive,
        }
      );
    },
    [color]
  );

  const onActiveChange = useCallback(
    (newActive: boolean) => {
      setActive(newActive);

      return defaultClassNames(newActive);
    },
    [defaultClassNames]
  );

  const Router = () =>
    to ? (
      <BaseNavLink
        to={to}
        className={({ isActive }) => onActiveChange(isActive)}
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
        className={defaultClassNames(false)}
      >
        <Child />
      </a>
    ) : null;

  return (
    <li
      {...rest}
      className="group rounded-md p-3 hover:bg-gray-300 dark:hover:bg-neutral-800/90 transition ease-in-out duration-150"
    >
      {href ? <Anchor /> : <Router />}
    </li>
  );
};

export default NavbarModalItem;
