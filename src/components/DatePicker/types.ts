import * as React from "react";

export interface CalendarProps {
  /**
   * String value to display the name of the toggler in the <Calendar />
   *
   * @default undefined
   * @public
   */
  displayName: string;

  /**
   * Date prop that contains information if a user selects on a date.
   *
   * @default undefined
   * @public
   */
  selectedDate?: Date;

  /**
   * Callback that is triggered when a user selects a date. This is mainly used
   * for updating the props `selectedDate` passed in.
   *
   * @default undefined
   * @public
   */
  onSelectedDate?: (newDate: Date | undefined) => void;

  /**
   * Controls whether the selected date will override the displayName prop.
   *
   * @default false
   * @public
   */
  displaySelectedDate?: boolean;

  /**
   * Format a string representation of Date if `displaySelectedDate` is passed.
   *
   * @default undefined
   * @public
   */
  dateFormat?: string;

  /**
   * Customize className to style the button that opens the calender component.
   *
   * @default undefined
   * @public
   */
  buttonClassName?: string;
}
