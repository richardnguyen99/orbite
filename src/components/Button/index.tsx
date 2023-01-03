import { ForwardRefRenderFunction, HTMLAttributes, forwardRef } from "react";
import classNames from "classnames";

import { ButtonProps } from "./type";
import {
  getBtnColorClassName,
  getBtnDefaultClassName,
  getBtnIconSizeClassName,
  getBtnSizeClassName,
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
    variant = "primary",
    ...rest
  },
  ref
) => {
  const hasNoChildren = () => {
    return typeof children === "undefined" || children === "";
  };

  return (
    <button
      type="button"
      ref={ref}
      {...rest}
      className={classNames(
        getBtnDefaultClassName(),
        getBtnSizeClassName(size, hasNoChildren()),
        getBtnColorClassName(variant, color),
        {
          "rounded-lg": rounded,
          "flex-row-reverse": iconPlacement === "trailing",
        },
        rest.className || ""
      )}
    >
      {Icon ? (
        <Icon
          viewBox="0 0 24 24"
          size={24}
          aria-hidden="true"
          className={getBtnIconSizeClassName(size)}
        />
      ) : null}
      {children}
    </button>
  );
};

// A button component that performs some actions upon mouse clicking events.
const Button = forwardRef(ButtonRefFunc);
Button.displayName = "Button";

export default Button;
