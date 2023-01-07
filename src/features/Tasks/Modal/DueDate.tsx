import Calendar from "@components/DatePicker";
import classNames from "classnames";
import { FC } from "react";
import { getRingClassNames } from "./util";

export interface Props {
  type: "add" | "update";
  selectedDate?: Date;
  onSelectedDate?: (newDate: Date | undefined) => void;
}

const DueDate: FC<Props> = ({ selectedDate, onSelectedDate, type }) => {
  return (
    <div className="w-6/12">
      <label
        htmlFor="dueDate"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Due date
      </label>
      <Calendar
        id="dueDate"
        displayName="Due date"
        selectedDate={selectedDate}
        onSelectedDate={onSelectedDate}
        displaySelectedDate
        buttonClassName={classNames(
          "outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
          getRingClassNames(type)
        )}
      />
    </div>
  );
};

export default DueDate;
