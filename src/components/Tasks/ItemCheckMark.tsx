import classNames from "classnames";
import { useCallback, useRef, useState } from "react";

const TaskItemCheckMark = () => {
  const [checked, setChecked] = useState(false);

  const onClickHandler = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);

  const getClassName = () => {
    return classNames(
      "cursor-pointer h-[36px] w-[36px] bg-checkmark-animation bg-left bg-no-repeat bg-checkmark-animation-size",
      { "animate-checkmark": checked },
      { "bg-right": checked }
    );
  };

  return (
    <button type="button" className={getClassName()} onClick={onClickHandler} />
  );
};

export default TaskItemCheckMark;
