import Calendar from "@components/DatePicker";
import { FC } from "react";

export interface Props {
  selectedDate?: Date;
  onSelectedDate?: (newDate: Date | undefined) => void;
}

const DueDate: FC<Props> = ({ selectedDate, onSelectedDate }) => {
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
        buttonClassName="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
      />
    </div>
  );
};

export default DueDate;
