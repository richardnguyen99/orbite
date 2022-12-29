import { useContext } from "react";
import ToastList from "./List";
import ToastContext from "./Context";
import ToastItem from "./Item";

/**
 * A simple component that serves as a container of Toasts.
 *
 * Toast component, or you might know as Notification formally, is a simple
 * popup component that will display a short message on the screen and get
 * popped off after a period.
 */
const Toast = () => {
  const toastContext = useContext(ToastContext);

  return (
    <ToastList>
      {toastContext.toasts.map((toast, _idx) => (
        <ToastItem toast={toast} key={toast.id} />
      ))}
    </ToastList>
  );
};

export default Toast;
