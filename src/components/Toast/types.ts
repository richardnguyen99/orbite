/**
 * Type definitions for <Toast /> components
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

export type ToastType = "success" | "error" | "warning" | "info";
export type ToastPosition =
  | "top"
  | "top-right"
  | "top-left"
  | "bottom"
  | "bottom-right"
  | "bottom-left";

export interface ToastItemProps {
  /**
   * Unique id of a Toast Item component
   *
   * @public
   */
  id: string;

  /**
   * Display content of a Toast Item component.
   *
   * @public
   */
  message: string;

  /**
   * Define what color to render this Toast.
   *
   * @default "info"
   * @public
   */
  type?: ToastType;

  /**
   * Optional callback that performs side effects when a toast is closed.
   *
   * @default undefined
   * @public
   */
  onClose?: () => void;

  /**
   * Optional callback that performs some actions when a toast is clicked.
   *
   * @default undefined
   * @public
   */
  onClick?: () => void;
}

export interface ToastProps {
  /**
   * List of states that are used to render corresponding toast components.
   *
   * @public
   */
  toasts: ToastItemProps[];

  /**
   * Position in which the toast container, or the list of toast components are
   * located.
   *
   * @default "bottom-right"
   * @public
   */
  position?: ToastPosition;

  /**
   * Life period of a toast component before it gets removed from the container.
   *
   * @default 3000
   * @public
   */
  duration?: number;

  /**
   * A dispatching function that takes information of a new toast to push into
   * the toast stack.
   *
   * @public
   */
  addNewToast: (newToast: ToastItemProps) => void;

  /**
   * A dispatching function that takes an id of an existing toast and removes
   * it from the toast stack.
   *
   *
   * @public
   */
  removeToast: (toastId: string) => void;
}
