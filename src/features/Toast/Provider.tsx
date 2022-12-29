import { FC, PropsWithChildren, useMemo, useReducer } from "react";
import ToastContext, { initialToastValue, toastReducer } from "./Context";
import { ToastItemProps } from "./types";

const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, initialToastValue);

  const memoValue = useMemo(
    () => ({
      ...state,
      addNewToast: (newToast: ToastItemProps) => {
        dispatch({ type: "ADD_TOAST", payload: newToast });
      },
      removeToast: (toastId: string) => {
        dispatch({ type: "REMOVE_TOAST", payload: { id: toastId } });
      },
    }),
    [state]
  );

  return (
    <ToastContext.Provider value={memoValue}>{children}</ToastContext.Provider>
  );
};

export default ToastProvider;
