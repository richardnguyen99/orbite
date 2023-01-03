import { ForwardRefRenderFunction, HTMLAttributes, forwardRef } from "react";
import { ButtonProps } from "./type";
import classNames from "classnames";
import {
  getBtnDefaultClassName,
  getBtnIconSizeClassName,
  getBtnSizeClassName,
  getPrimaryBtnClassName,
} from "./util";

export type ButtonType = ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps & HTMLAttributes<HTMLButtonElement>
>;

const ButtonRefFunc: ButtonType = (
  {
    icon: Icon,
    iconPlacement = "leading",
    children,
    color = "indigo",
    rounded = true,
    size = "base",
    ...rest
  },
  ref
) => {
  return (
    <button
      type="button"
      ref={ref}
      {...rest}
      className={classNames(
        getBtnDefaultClassName(),
        getBtnSizeClassName(size),
        getPrimaryBtnClassName(color),
        {
          "rounded-lg": rounded,
          "flex-row-reverse": iconPlacement === "trailing",
        },
        rest.className || ""
      )}
    >
      {Icon && (
        <Icon
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
          className={getBtnIconSizeClassName(size)}
        />
      )}
      {children}
    </button>
  );
};

// A button component that performs some actions upon mouse clicking events.
const Button = forwardRef(ButtonRefFunc);
Button.displayName = "Button";

export default Button;
