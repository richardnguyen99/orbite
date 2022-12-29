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
 *
 * This associates with Toast Provider (@see ./Provider.tsx), that will use the
 * provided context and render toasts with additional configs and functions.
 *
 * It will create a React Portal (@see ./List.tsx), that wraps around Toast
 * Items (@see ./Item.tsx) and renders into the DOM node with id `toast` outside
 * the DOM hierarchy (@see <root>/index.html).
 *
 * This one is used directly in the main entry point of the application (@see src/main.tsx).
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
