import { FC, Fragment, HTMLAttributes, useState } from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { Popover, Transition } from "@headlessui/react";

import { CalendarProps } from "./types";
import { combineClassName } from "@utils/combine-classname";
import { CalendarIcon } from "@primer/octicons-react";

const Calendar: FC<CalendarProps & HTMLAttributes<HTMLDivElement>> = ({
  selectedDate,
  onSelectedDate,
  displayName,
  displaySelectedDate,
  dateFormat,
  buttonClassName,
}) => {
  const [selected, _setSelected] = useState<Date>();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }

  const getFormattedDateString = (date: Date | undefined) => {
    return date && displaySelectedDate
      ? format(date, dateFormat ? dateFormat : "PP")
      : displayName;
  };

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
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={onSelectedDate}
            footer={footer}
          />
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Calendar;
