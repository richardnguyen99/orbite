import { createContext } from "react";
import { ToastItemProps, ToastProps } from "./types";

export type TaskContextAction =
  | { type: "ADD_TOAST"; payload: ToastItemProps }
  | { type: "REMOVE_TOAST"; payload: Pick<ToastItemProps, "id"> };

export const initialToastValue: ToastProps = {
  toasts: [],
  duration: 2000,
  position: "bottom-right",
  addNewToast: () => false,
  removeToast: () => false,
};

/**
 * A simple reducer function that updates the `state` of Toast component with
 * dispatches.
 *
 * Every action is structured in a simple manner: a unique `type` that describes
 * what type of action should be performed on the current state, and a `payload`
 * that might carry some information in order for the action to occur correctly.
 *
 * Reducer's actions can be treated like useState with more detail on what to be
 * updated. Therefore, each action will perform something on the current state,
 * and return the new one.
 */
export const toastReducer = (
  state: ToastProps,
  action: TaskContextAction
): ToastProps => {
  switch (action.type) {
    // create a new array of toasts
    case "ADD_TOAST": {
      const newToast = {
        ...action.payload,
        id: `id-${new Date().getTime()}`,
      };

      return {
        ...state,
        // with the newly-added toast at the end
        toasts: [...state.toasts, newToast],
      };
    }
    case "REMOVE_TOAST": {
      return {
        ...state,
        // with the matching toast removed
        toasts: state.toasts.filter((toast) => toast.id !== action.payload.id),
      };
    }

    // someone wanna be funny
    default:
      return state;
  }
};

const ToastContext = createContext<ToastProps>({} as ToastProps);
ToastContext.displayName = "ToastContext";

export default ToastContext;
