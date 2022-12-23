import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

import { Colors } from "@typings/react";

interface Props {
  icon?: FC<object & HTMLAttributes<HTMLOrSVGElement>>;
  text: string;
  color: Colors;
  onClickCallback?: React.MouseEventHandler<HTMLButtonElement>;
}

const darkBg = {
  slate: "dark:bg-slate-600",
  gray: "dark:bg-gray-600",
  zinc: "dark:bg-zinc-600",
  neutral: "dark:bg-neutral-600",
  stone: "dark:bg-stone-600",
  red: "dark:bg-red-600",
  orange: "dark:bg-orange-600",
  amber: "dark:bg-amber-600",
  yellow: "dark:bg-yellow-600",
  lime: "dark:bg-lime-600",
  green: "dark:bg-green-600",
  emerald: "dark:bg-emerald-600",
  teal: "dark:bg-teal-600",
  cyan: "dark:bg-cyan-600",
  sky: "dark:bg-sky-600",
  blue: "dark:bg-blue-600",
  indigo: "dark:bg-indigo-600",
  violet: "dark:bg-violet-600",
  purple: "dark:bg-purple-600",
  fuchsia: "dark:bg-fuchsia-600",
  pink: "dark:bg-pink-600",
  rose: "dark:bg-rose-600",
};

const darkHoverBg = {
  slate: "dark:hover:bg-slate-700",
  gray: "dark:hover:bg-gray-700",
  zinc: "dark:hover:bg-zinc-700",
  neutral: "dark:hover:bg-neutral-700",
  stone: "dark:hover:bg-stone-700",
  red: "dark:hover:bg-red-700",
  orange: "dark:hover:bg-orange-700",
  amber: "dark:hover:bg-amber-700",
  yellow: "dark:hover:bg-yellow-700",
  lime: "dark:hover:bg-lime-700",
  green: "dark:hover:bg-green-700",
  emerald: "dark:hover:bg-emerald-700",
  teal: "dark:hover:bg-teal-700",
  cyan: "dark:hover:bg-cyan-700",
  sky: "dark:hover:bg-sky-700",
  blue: "dark:hover:bg-blue-700",
  indigo: "dark:hover:bg-indigo-700",
  violet: "dark:hover:bg-violet-700",
  purple: "dark:hover:bg-purple-700",
  fuchsia: "dark:hover:bg-fuchsia-700",
  pink: "dark:hover:bg-pink-700",
  rose: "dark:hover:bg-rose-700",
};

const darkFocusRing = {
  slate: "dark:ring-slate-500",
  gray: "dark:ring-gray-500",
  zinc: "dark:ring-zinc-500",
  neutral: "dark:ring-neutral-500",
  stone: "dark:ring-stone-500",
  red: "dark:ring-red-500",
  orange: "dark:ring-orange-500",
  amber: "dark:ring-amber-500",
  yellow: "dark:ring-yellow-500",
  lime: "dark:ring-lime-500",
  green: "dark:ring-green-500",
  emerald: "dark:ring-emerald-500",
  teal: "dark:ring-teal-500",
  cyan: "dark:ring-cyan-500",
  sky: "dark:ring-sky-500",
  blue: "dark:ring-blue-500",
  indigo: "dark:ring-indigo-500",
  violet: "dark:ring-violet-500",
  purple: "dark:ring-purple-500",
  fuchsia: "dark:ring-fuchsia-500",
  pink: "dark:ring-pink-500",
  rose: "dark:ring-rose-500",
};

const PrimaryButton: FC<Props & HTMLAttributes<HTMLButtonElement>> = ({
  icon: Icon,
  text,
  color,
  onClickCallback,
  ...rest
}) => {
  const variantClassName = () => {
    return classNames({
      [darkBg[color]]: true,
      [darkHoverBg[color]]: true,
      [darkFocusRing[color]]: true,
    });
  };

  return (
    <button
      onClick={onClickCallback}
      type="button"
      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {Icon && (
        <Icon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
      )}
      Edit
    </button>
  );
};

export default PrimaryButton;
