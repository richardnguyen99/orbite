import { Colors, Size } from "@typings/react";
import { ButtonVariant } from "./type";

export const getBtnDefaultClassName = () => {
  return "inline-flex items-center gap-1";
};

export const getPrimaryBtnClassName = (color: Colors) => {
  const bgColors = {
    white: "bg-white",
    black: "bg-black",
    slate: "bg-slate-500",
    gray: "bg-gray-500",
    zinc: "bg-zinc-500",
    neutral: "bg-neutral-500",
    stone: "bg-stone-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
    amber: "bg-amber-500",
    yellow: "bg-yellow-500",
    lime: "bg-lime-500",
    green: "bg-green-500",
    emerald: "bg-emerald-500",
    teal: "bg-teal-500",
    cyan: "bg-cyan-500",
    sky: "bg-sky-500",
    blue: "bg-blue-500",
    indigo: "bg-indigo-500",
    violet: "bg-violet-500",
    purple: "bg-purple-500",
    fuchsia: "bg-fuchsia-500",
    pink: "bg-pink-500",
    rose: "bg-rose-500",
  };

  const hoverBgColors = {
    white: "hover:bg-gray-50",
    black: "hover:bg-neutral-900",
    slate: "hover:bg-slate-600",
    gray: "hover:bg-gray-600",
    zinc: "hover:bg-zinc-600",
    neutral: "hover:bg-neutral-600",
    stone: "hover:bg-stone-600",
    red: "hover:bg-red-600",
    orange: "hover:bg-orange-600",
    amber: "hover:bg-amber-600",
    yellow: "hover:bg-yellow-600",
    lime: "hover:bg-lime-600",
    green: "hover:bg-green-600",
    emerald: "hover:bg-emerald-600",
    teal: "hover:bg-teal-600",
    cyan: "hover:bg-cyan-600",
    sky: "hover:bg-sky-600",
    blue: "hover:bg-blue-600",
    indigo: "hover:bg-indigo-600",
    violet: "hover:bg-violet-600",
    purple: "hover:bg-purple-600",
    fuchsia: "hover:bg-fuchsia-600",
    pink: "hover:bg-pink-600",
    rose: "hover:bg-rose-600",
  };

  const focusRingColors = {
    white: "focus:ring-slate-200",
    black: "focus:ring-gray-900",
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

  const textColor =
    color === "white" || color === "gray" || color === "neutral"
      ? "text-black"
      : "text-white";

  return `focus:ring-2 border border-transparent ${bgColors[color]} ${hoverBgColors[color]} ${focusRingColors[color]} ${textColor}`;
};

export const getTransparentBtnClassName = () => {
  return "hover:bg-gray-300 dark:hover:bg-slate-700 fill-white";
};

export const getBtnColorClassName = (variant: ButtonVariant, color: Colors) => {
  if (variant === "transparent") return getTransparentBtnClassName();

  return getPrimaryBtnClassName(color);
};

export const getBtnSizeClassName = (size: Size, noText: boolean) => {
  const buttonSize = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-1.5 text-[15px] leading-[1.1]",
    base: "px-4 py-2 text-[16px] leading-[1.2] font-medium",
    lg: "px-4.5 py-2.5 text-lg font-semibold",
    xl: "px-5 py-3 text-lg font-bold",
  };

  const noTextButtonSize = {
    sm: "px-1 py-1 text-sm",
    md: "px-1.5 py-1.5 text-[15px] leading-[1.1]",
    base: "px-2 py-2 text-[16px] leading-[1.2] font-medium",
    lg: "px-2.5 py-2.5 text-lg font-semibold",
    xl: "px-3 py-3 text-lg font-bold",
  };

  return noText ? noTextButtonSize[size] : buttonSize[size];
};

export const getBtnIconSizeClassName = (size: Size) => {
  const iconSize = {
    sm: "w-4 h-4",
    md: "w-4 h-4",
    base: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-7 h-7",
  };

  return `fill-none stroke-current stroke-[1.5px] ${iconSize[size]}`;
};

export const getBtnIconViewBox = (size: Size) => {
  const iconViewBox = {
    sm: "0 0 12 12",
    md: "0 0 16 16",
    base: "0 0 24 24",
    lg: "0 0 28 28",
    xl: "0 0 36 36",
  };

  return iconViewBox[size];
};
