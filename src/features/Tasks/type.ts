export interface InputProps {
  value: string;
  onUpdateValue: (newValue: string) => void;
}

export interface TaskProps {
  /**
   * A short unique ID for better querying a task.
   */
  uid: string;

  /**
   * A brief name that describes what to do for this task.
   *
   * @public
   */
  name: string;

  /**
   * Determine where to put this task for later filtering and functionalities.
   *
   * @public
   */
  category: string;

  /**
   * Determine the priority level of this task when comparing to other tasks.
   *
   * @default 1
   * @public
   */
  prior?: number;

  /**
   * Deadline before which this take needs to be completed.
   *
   * @default undefined
   * @public
   */
  dueDate?: Date;

  /**
   * A daily task will get refreshed on the daily basis.
   *
   * @public
   */
  daily: boolean;

  /**
   * Determine whether or not this task is finished or completed.
   *
   * @public
   */
  finished: boolean;

  /**
   * More details and description for the task.
   *
   * @default ""
   * @public
   */
  notes?: string;
}

export interface TaskItemProps {
  task: TaskProps;
}
