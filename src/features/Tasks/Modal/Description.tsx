import classNames from "classnames";
import { ChangeEvent, FC, useCallback, useState } from "react";
import { getRingClassNames } from "./util";

interface Props {
  type: "add" | "update";
  onChange: (newValue: string) => void;
}

const Description: FC<Props> = ({ onChange, type }) => {
  const [value, setValue] = useState("");

  const onValueChangeCallback = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      e.preventDefault();

      setValue(e.target.value);
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <div className="mb-6">
      <label
        htmlFor="description"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Description <span className="italic">(Optional)</span>
      </label>
      <textarea
        id="description"
        value={value}
        onChange={onValueChangeCallback}
        rows={4}
        className={classNames(
          "block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
          getRingClassNames(type)
        )}
        placeholder="Describe your task"
      ></textarea>
    </div>
  );
};

export default Description;
