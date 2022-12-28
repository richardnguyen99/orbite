import { useContext } from "react";
import ToastList from "./List";
import ToastContext from "./Context";
import ToastItem from "./Item";

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
