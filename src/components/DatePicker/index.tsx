import {
  FC,
  Fragment,
  HTMLAttributes,
  KeyboardEvent,
  useCallback,
} from "react";

import { format } from "date-fns";
import { DayPicker, useInput } from "react-day-picker";
import { Popover, Transition } from "@headlessui/react";

import { CalendarProps } from "./types";
import { combineClassName } from "@utils/combine-classname";
import { CalendarIcon } from "@primer/octicons-react";
import classNames from "classnames";

const Calendar: FC<CalendarProps & HTMLAttributes<HTMLDivElement>> = ({
  selectedDate,
  onSelectedDate,
  displayName,
  displaySelectedDate,
  dateFormat,
  buttonClassName,
}) => {
  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: selectedDate,
    fromYear: 2000,
    toYear: 2050,
    format: "PP",
    required: true,
  });

  const getFormattedDateString = (date: Date | undefined) => {
    return date && displaySelectedDate
      ? format(date, dateFormat ? dateFormat : "PP")
      : displayName;
  };

  const getInputClassName = () => {
    return classNames(
      "outline-none bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-1.5 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500"
    );
  };

  const getCalendarClassName = () => {
    return classNames(
      "relative mt-2 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-gray-300 dark:border-gray-600 shadow-2xl shadow-gray-600 dark:shadow-gray-900"
    );
  };

  const onKeyUpCallback = useCallback(
    (evt: KeyboardEvent<HTMLInputElement>) => {
      if (evt.key === "Enter" || evt.keyCode === 13) {
        evt.preventDefault();
        evt.currentTarget.blur();

        if (onSelectedDate && dayPickerProps.selected)
          onSelectedDate(dayPickerProps.selected);
      }
    },
    [dayPickerProps.selected, onSelectedDate]
  );

  return (
    <Popover className="relative">
      <Popover.Button
        className={combineClassName(
          "inline-flex w-full h-full items-center justify-between",
          buttonClassName
        )}
      >
        {getFormattedDateString(selectedDate)}
        <CalendarIcon
          className="ml-2 -mr-1 h-5 w-5 ease-in-out transition-transform duration-300"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel className="absolute z-10">
          <div className={getCalendarClassName()}>
            <input
              {...inputProps}
              className={getInputClassName()}
              onKeyUp={onKeyUpCallback}
            />
            <DayPicker {...dayPickerProps} mode="single" showOutsideDays />
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Calendar;
