/* eslint-disable quotes */
import { ChangeEvent, FC, HTMLAttributes, useCallback, useState } from "react";
import { InputProps } from "./type";
import classNames from "classnames";

const LIMIT_WORD = 50;

type AddTaskNameInputType = InputProps & HTMLAttributes<HTMLInputElement>;

const AddTaskNameInput: FC<AddTaskNameInputType> = ({
  value,
  onUpdateValue,
  ...rest
}) => {
  const [disabled, setDisabled] = useState(false);
  const [length, setLength] = useState(value.length);

  const onChangeCallback = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      const v = evt.target.value;
      console.log(v.length);

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
        "focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500":
          !disabled,
        "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500":
          disabled,
      }
    );
  };

  return (
    <>
      <label
        htmlFor="email"
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
      <p>Character length: {length}/50</p>
    </>
  );
};

export default AddTaskNameInput;
