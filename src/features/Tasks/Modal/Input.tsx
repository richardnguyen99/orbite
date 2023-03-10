/* eslint-disable quotes */
import { ChangeEvent, FC, HTMLAttributes, useCallback, useState } from "react";
import { InputProps } from "../type";
import classNames from "classnames";
import { getRingClassNames } from "./util";

const LIMIT_WORD = 50;

type AddTaskNameInputType = InputProps & HTMLAttributes<HTMLInputElement>;

const TaskNameInput: FC<AddTaskNameInputType> = ({
  value,
  onUpdateValue,
  type,
  ...rest
}) => {
  const [disabled, setDisabled] = useState(false);
  const [length, setLength] = useState(value.length);

  const onChangeCallback = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      const v = evt.target.value;

      onUpdateValue(v.slice(0, LIMIT_WORD));
      setLength(Math.min(v.length, LIMIT_WORD));
      setDisabled(v.length >= LIMIT_WORD);
    },
    [onUpdateValue]
  );

  const getClassName = () => {
    return classNames(
      "outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
      {
        [getRingClassNames(type)]: !disabled,
        "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500":
          disabled,
      }
    );
  };

  return (
    <>
      <label
        htmlFor="taskName"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Task name
      </label>
      <input
        {...rest}
        type="text"
        id="taskName"
        value={value}
        onChange={onChangeCallback}
        className={getClassName()}
        placeholder={
          'Give your task a name. For example, "Finish The Half-blood Prince"'
        }
        required
      />
      <p className="relative block mb-2 mt-2 text-sm font-medium text-slate-800 dark:text-slate-400 text-right">
        Character length:{" "}
        <span className="ml-2">{formatLength(length)}/50</span>
      </p>
    </>
  );
};

export default TaskNameInput;

const formatLength = (length: number) => {
  if (length < 10) return `0${length}`;

  return length.toString();
};
