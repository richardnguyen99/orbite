import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { FC, ReactNode } from "react";
import * as ReactDOM from "react-dom";

interface Props {
  children: ReactNode;
}

const ToastList: FC<Props> = ({ children }) => {
  return ReactDOM.createPortal(
    <AnimateSharedLayout>
      <ul
        aria-live="assertive"
        className="flex fixed z-50 flex-col gap-4 m-4 lg:m-8 pointer-events-none bottom-0 right-0 items-end"
      >
        <AnimatePresence initial={false}>{children}</AnimatePresence>
      </ul>
    </AnimateSharedLayout>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.querySelector("#toast")!
  );
};

export default ToastList;
