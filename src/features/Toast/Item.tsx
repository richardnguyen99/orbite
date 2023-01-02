import { FC, useContext } from "react";
import classNames from "classnames";
import { GearIcon, XIcon } from "@primer/octicons-react";
import {
  Variants,
  motion,
  useIsPresent,
  useReducedMotion,
} from "framer-motion";

import useTimeout from "@hooks/use-timeout";
import useUpdateEffect from "@hooks/use-update-effect";

import { ToastItemProps } from "./types";
import ToastContext from "./Context";

const toastStyleVariants: Record<
  NonNullable<ToastItemProps["type"]>,
  string
> = {
  success: "border-green-600",
  error: " border-red-600",
  info: "border-purple-600",
  warning: " border-yellow-600",
};

const closeButtonStyleVariants: Record<
  NonNullable<ToastItemProps["type"]>,
  string
> = {
  success: "hover:bg-green-500/25 active:bg-green-600",
  error: "hover:bg-red-500/25 active:bg-red-600",
  info: "hover:bg-purple-500/25 active:bg-purple-600",
  warning: "hover:bg-yellow-500/25 active:bg-yellow-600",
};

const motionVariants: Variants = {
  initial: () => {
    return {
      opacity: 0,
      x: 24,
    };
  },

  animate: () => ({
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  }),

  exit: () => ({
    opacity: 0,
    x: 30,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  }),
};

type ToastItemType = FC<{ toast: ToastItemProps }>;

const ToastItem: ToastItemType = ({
  toast: { id, message, type = "info", onClick: _onClick, onClose },
}) => {
  const isPresent = useIsPresent();
  const prefersReducedMotion = useReducedMotion();
  const toastContext = useContext(ToastContext);

  const handleDismiss = () => {
    if (isPresent) toastContext.removeToast(id);
  };

  const [, cancel, reset] = useTimeout(handleDismiss, toastContext.duration);

  const onMouseEnter = () => cancel();
  const onMouseLeave = () => reset();

  useUpdateEffect(() => {
    if (!isPresent) {
      onClose?.();
    }
  }, [isPresent]);

  return (
    <motion.li
      initial="initial"
      animate="animate"
      exit="exit"
      layout="position"
      custom="bottom-right"
      variants={!prefersReducedMotion ? motionVariants : {}}
      className={classNames(
        "flex w-max items-center shadow px-4 py-3 rounded-lg border-2 transition-colors duration-100 min-w-[260px] text-sm pointer-events-auto bg-slate-300 dark:bg-slate-900",
        {
          [toastStyleVariants[type]]: true,
        }
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex gap-2 items-center">
        <GearIcon />
        <span className="max-w-sm font-medium">{message}</span>
      </div>

      <div className="pl-4 ml-auto">
        <button
          onClick={handleDismiss}
          className={classNames(
            "p-1 rounded transition-colors duration-100",
            closeButtonStyleVariants[type]
          )}
        >
          <XIcon />
        </button>
      </div>
    </motion.li>
  );
};

export default ToastItem;
