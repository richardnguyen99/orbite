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
  white: "",
  black: "",
  slate: "bg-slate-400 group-hover:bg-slate-500 dark:group-hover:bg-slate-600",
  gray: "bg-gray-400 group-hover:bg-gray-500 dark:group-hover:bg-gray-600",
  zinc: "bg-zinc-400 group-hover:bg-zinc-500 dark:group-hover:bg-zinc-600",
  neutral:
    "bg-neutral-400 group-hover:bg-neutral-500 dark:group-hover:bg-neutral-600",
  stone: "bg-stone-400 group-hover:bg-stone-500 dark:group-hover:bg-stone-600",
  red: "bg-red-400 group-hover:bg-red-500 dark:group-hover:bg-red-600",
  orange:
    "bg-orange-400 group-hover:bg-orange-500 dark:group-hover:bg-orange-600",
  amber: "bg-amber-400 group-hover:bg-amber-500 dark:group-hover:bg-amber-600",
  yellow:
    "bg-yellow-400 group-hover:bg-yellow-500 dark:group-hover:bg-yellow-600",
  lime: "bg-lime-400 group-hover:bg-lime-500 dark:group-hover:bg-lime-600",
  green: "bg-green-400 group-hover:bg-green-500 dark:group-hover:bg-green-600",
  emerald:
    "bg-emerald-400 group-hover:bg-emerald-500 dark:group-hover:bg-emerald-600",
  teal: "bg-teal-400 group-hover:bg-teal-500 dark:group-hover:bg-teal-600",
  cyan: "bg-cyan-400 group-hover:bg-cyan-500 dark:group-hover:bg-cyan-600",
  sky: "bg-sky-400 group-hover:bg-sky-500 dark:group-hover:bg-sky-600",
  blue: "bg-blue-400 group-hover:bg-blue-500 dark:group-hover:bg-blue-600",
  indigo:
    "bg-indigo-400 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-600",
  violet:
    "bg-violet-400 group-hover:bg-violet-500 dark:group-hover:bg-violet-600",
  purple:
    "bg-purple-400 group-hover:bg-purple-500 dark:group-hover:bg-purple-600",
  fuchsia:
    "bg-fuchsia-400 group-hover:bg-fuchsia-500 dark:group-hover:bg-fuchsia-600",
  pink: "bg-pink-400 group-hover:bg-pink-500 dark:group-hover:bg-pink-600",
  rose: "bg-rose-400 group-hover:bg-rose-500 dark:group-hover:bg-rose-600",
};

const iconOnActiveBgColors = {
  white: "",
  black: "",
  slate: "dark:group-[.active]:bg-slate-600",
  gray: "dark:group-[.active]:bg-gray-600",
  zinc: "dark:group-[.active]:bg-zinc-600",
  neutral: "dark:group-[.active]:bg-neutral-600",
  stone: "dark:group-[.active]:bg-stone-600",
  red: "dark:group-[.active]:bg-red-600",
  orange: "dark:group-[.active]:bg-orange-600",
  amber: "dark:group-[.active]:bg-amber-600",
  yellow: "dark:group-[.active]:bg-yellow-600",
  lime: "dark:group-[.active]:bg-lime-600",
  green: "dark:group-[.active]:bg-green-600",
  emerald: "dark:group-[.active]:bg-emerald-600",
  teal: "dark:group-[.active]:bg-teal-600",
  cyan: "dark:group-[.active]:bg-cyan-600",
  sky: "dark:group-[.active]:bg-sky-600",
  blue: "dark:group-[.active]:bg-blue-600",
  indigo: "dark:group-[.active]:bg-indigo-600",
  violet: "dark:group-[.active]:bg-violet-600",
  purple: "dark:group-[.active]:bg-purple-600",
  fuchsia: "dark:group-[.active]:bg-fuchsia-600",
  pink: "dark:group-[.active]:bg-pink-600",
  rose: "dark:group-[.active]:bg-rose-600",
};

const hoverTextColors = {
  white: "",
  black: "",
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

const activeLightTextColors = {
  white: "",
  black: "",

  slate: "group-[.active]:text-slate-500",
  gray: "group-[.active]:text-gray-500",
  zinc: "group-[.active]:text-zinc-500",
  neutral: "group-[.active]:text-neutral-500",
  stone: "group-[.active]:text-stone-500",
  red: "group-[.active]:text-red-500",
  orange: "group-[.active]:text-orange-500",
  amber: "group-[.active]:text-amber-500",
  yellow: "group-[.active]:text-yellow-500",
  lime: "group-[.active]:text-lime-500",
  green: "group-[.active]:text-green-500",
  emerald: "group-[.active]:text-emerald-500",
  teal: "group-[.active]:text-teal-500",
  cyan: "group-[.active]:text-cyan-500",
  sky: "group-[.active]:text-sky-500",
  blue: "group-[.active]:text-blue-500",
  indigo: "group-[.active]:text-indigo-500",
  violet: "group-[.active]:text-violet-500",
  purple: "group-[.active]:text-purple-500",
  fuchsia: "group-[.active]:text-fuchsia-500",
  pink: "group-[.active]:text-pink-500",
  rose: "group-[.active]:text-rose-500",
};

const activeDarkTextColors = {
  white: "",
  black: "",
  slate: "dark:group-[.active]:text-slate-600",
  gray: "dark:group-[.active]:text-gray-600",
  zinc: "dark:group-[.active]:text-zinc-600",
  neutral: "dark:group-[.active]:text-neutral-600",
  stone: "dark:group-[.active]:text-stone-600",
  red: "dark:group-[.active]:text-red-600",
  orange: "dark:group-[.active]:text-orange-600",
  amber: "dark:group-[.active]:text-amber-600",
  yellow: "dark:group-[.active]:text-yellow-600",
  lime: "dark:group-[.active]:text-lime-600",
  green: "dark:group-[.active]:text-green-600",
  emerald: "dark:group-[.active]:text-emerald-600",
  teal: "dark:group-[.active]:text-teal-600",
  cyan: "dark:group-[.active]:text-cyan-600",
  sky: "dark:group-[.active]:text-sky-600",
  blue: "dark:group-[.active]:text-blue-600",
  indigo: "dark:group-[.active]:text-indigo-600",
  violet: "dark:group-[.active]:text-violet-600",
  purple: "dark:group-[.active]:text-purple-600",
  fuchsia: "dark:group-[.active]:text-fuchsia-600",
  pink: "dark:group-[.active]:text-pink-600",
  rose: "dark:group-[.active]:text-rose-600",
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
        className={classNames("rounded-md p-2 mr-2 dark:bg-slate-700", {
          [iconBgColors[color]]: true,
          [iconOnActiveBgColors[color]]: true,
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
          [activeDarkTextColors[color]]: isActive,
          [activeLightTextColors[color]]: isActive,
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
      className={classNames(
        "group rounded-md p-3 hover:bg-gray-300 dark:hover:bg-slate-800/90 transition ease-in-out duration-150",
        {
          active: active,
        }
      )}
    >
      {href ? <Anchor /> : <Router />}
    </li>
  );
};

export default NavbarModalItem;
