/**
 * A React component that renders a Gear Icon with custom colors
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import classNames from "classnames";

import { CFC } from "@typings/react";

import { IconProps } from "./types";

const iconBgColors = {
  slate:
    "fill-slate-200 group-hover:fill-slate-300 dark:group-hover:fill-slate-200",
  gray: "fill-gray-200 group-hover:fill-gray-300 dark:group-hover:fill-gray-200",
  zinc: "fill-zinc-200 group-hover:fill-zinc-300 dark:group-hover:fill-zinc-200",
  neutral:
    "fill-neutral-200 group-hover:fill-neutral-300 dark:group-hover:fill-neutral-200",
  stone:
    "fill-stone-200 group-hover:fill-stone-300 dark:group-hover:fill-stone-200",
  red: "fill-red-200 group-hover:fill-red-300 dark:group-hover:fill-red-200",
  orange:
    "fill-orange-200 group-hover:fill-orange-300 dark:group-hover:fill-orange-200",
  amber:
    "fill-amber-200 group-hover:fill-amber-300 dark:group-hover:fill-amber-200",
  yellow:
    "fill-yellow-200 group-hover:fill-yellow-300 dark:group-hover:fill-yellow-200",
  lime: "fill-lime-200 group-hover:fill-lime-300 dark:group-hover:fill-lime-200",
  green:
    "fill-green-200 group-hover:fill-green-300 dark:group-hover:fill-green-200",
  emerald:
    "fill-emerald-200 group-hover:fill-emerald-300 dark:group-hover:fill-emerald-200",
  teal: "fill-teal-200 group-hover:fill-teal-300 dark:group-hover:fill-teal-200",
  cyan: "fill-cyan-200 group-hover:fill-cyan-300 dark:group-hover:fill-cyan-200",
  sky: "fill-sky-200 group-hover:fill-sky-300 dark:group-hover:fill-sky-200",
  blue: "fill-blue-200 group-hover:fill-blue-300 dark:group-hover:fill-blue-200",
  indigo:
    "fill-indigo-200 group-hover:fill-indigo-300 dark:group-hover:fill-indigo-200",
  violet:
    "fill-violet-200 group-hover:fill-violet-300 dark:group-hover:fill-violet-200",
  purple:
    "fill-purple-200 group-hover:fill-purple-300 dark:group-hover:fill-purple-200",
  fuchsia:
    "fill-fuchsia-200 group-hover:fill-fuchsia-300 dark:group-hover:fill-fuchsia-200",
  pink: "fill-pink-200 group-hover:fill-pink-300 dark:group-hover:fill-pink-200",
  rose: "fill-rose-200 group-hover:fill-rose-300 dark:group-hover:fill-rose-200",
};

const Gear: CFC<HTMLOrSVGElement, IconProps> = ({ color, active, ...rest }) => {
  const defaultClassName = () =>
    classNames("dark:fill-neutral-300", {
      [iconBgColors[color]]: true,
    });

  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className={defaultClassName()}
        d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
      />
    </svg>
  );
};

export default Gear;
