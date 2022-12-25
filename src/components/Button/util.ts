import { Colors } from "@typings/react";

export const primaryBg = {
  slate: "bg-slate-600",
  gray: "bg-gray-600",
  zinc: "bg-zinc-600",
  neutral: "bg-neutral-600",
  stone: "bg-stone-600",
  red: "bg-red-600",
  orange: "bg-orange-600",
  amber: "bg-amber-600",
  yellow: "bg-yellow-600",
  lime: "bg-lime-600",
  green: "bg-green-600",
  emerald: "bg-emerald-600",
  teal: "bg-teal-600",
  cyan: "bg-cyan-600",
  sky: "bg-sky-600",
  blue: "bg-blue-600",
  indigo: "bg-indigo-600",
  violet: "bg-violet-600",
  purple: "bg-purple-600",
  fuchsia: "bg-fuchsia-600",
  pink: "bg-pink-600",
  rose: "bg-rose-600",
};

export const primaryHoverBg = {
  slate: "hover:bg-slate-700/90",
  gray: "hover:bg-gray-700/90",
  zinc: "hover:bg-zinc-700/90",
  neutral: "hover:bg-neutral-700/90",
  stone: "hover:bg-stone-700/90",
  red: "hover:bg-red-700/90",
  orange: "hover:bg-orange-700/90",
  amber: "hover:bg-amber-700/90",
  yellow: "hover:bg-yellow-700/90",
  lime: "hover:bg-lime-700/90",
  green: "hover:bg-green-700/90",
  emerald: "hover:bg-emerald-700/90",
  teal: "hover:bg-teal-700/90",
  cyan: "hover:bg-cyan-700/90",
  sky: "hover:bg-sky-700/90",
  blue: "hover:bg-blue-700/90",
  indigo: "hover:bg-indigo-700/90",
  violet: "hover:bg-violet-700/90",
  purple: "hover:bg-purple-700/90",
  fuchsia: "hover:bg-fuchsia-700/90",
  pink: "hover:bg-pink-700/90",
  rose: "hover:bg-rose-700/90",
};

export const primaryDarkHoverBg = {
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
export const primaryFocusRing = {
  slate: "focus:ring-slate-500",
  gray: "focus:ring-gray-500",
  zinc: "focus:ring-zinc-500",
  neutral: "focus:ring-neutral-500",
  stone: "focus:ring-stone-500",
  red: "focus:ring-red-500",
  orange: "focus:ring-orange-500",
  amber: "focus:ring-amber-500",
  yellow: "focus:ring-yellow-500",
  lime: "focus:ring-lime-500",
  green: "focus:ring-green-500",
  emerald: "focus:ring-emerald-500",
  teal: "focus:ring-teal-500",
  cyan: "focus:ring-cyan-500",
  sky: "focus:ring-sky-500",
  blue: "focus:ring-blue-500",
  indigo: "focus:ring-indigo-500",
  violet: "focus:ring-violet-500",
  purple: "focus:ring-purple-500",
  fuchsia: "focus:ring-fuchsia-500",
  pink: "focus:ring-pink-500",
  rose: "focus:ring-rose-500",
};

export const buttonSize = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-1.5 text-[15px] leading-[1.1]",
  base: "px-4 py-2 text-[16px] leading-[1.2] font-medium",
  lg: "px-4.5 py-2.5 text-lg font-semibold",
  xl: "px-5 py-3 text-lg font-bold",
};

export const iconSize = {
  sm: "w-4 h-4",
  md: "w-4 h-4",
  base: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-7 h-7",
};

export const iconViewbox = {
  sm: "0 0 12 12",
  md: "0 0 16 16",
  base: "0 0 24 24",
  lg: "0 0 28 28",
  xl: "0 0 36 36",
};

export const shouldBeDarkText = (color: Colors) => {
  return color === "gray";
};
