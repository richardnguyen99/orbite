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

export const toastReducer = (state: ToastProps, action: TaskContextAction) => {
  switch (action.type) {
    case "ADD_TOAST": {
      const newToast = {
        ...action.payload,
        id: `id-${new Date().getTime()}`,
      };

      return {
        ...state,
        toasts: [...state.toasts, newToast],
      };
    }
    case "REMOVE_TOAST": {
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};

const ToastContext = createContext<ToastProps>({} as ToastProps);
ToastContext.displayName = "ToastContext";

export default ToastContext;
