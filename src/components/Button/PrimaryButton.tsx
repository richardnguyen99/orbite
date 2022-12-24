import {
  FC,
  ForwardRefRenderFunction,
  HTMLAttributes,
  SVGAttributes,
  forwardRef,
} from "react";

import { Colors } from "@typings/react";
import classNames from "classnames";
import {
  buttonSize,
  iconSize,
  primaryBg,
  primaryDarkHoverBg,
  primaryFocusRing,
  primaryHoverBg,
  shouldBeDarkText,
} from "./util";

interface Props<T = HTMLButtonElement> {
  icon?: FC<
    object & HTMLAttributes<HTMLOrSVGElement> & SVGAttributes<SVGSVGElement>
  >;
  placement?: "trailing" | "leading";
  trailing?: boolean;
  size?: "sm" | "md" | "base" | "lg" | "xl";
  rounded?: boolean;
  variant?: "primary" | "secondary" | "duotone";
  outline?: "outline" | "fillOnHover";
  color?: Colors;
  text?: string;
  children?: string;
  onClickCallback?: React.MouseEventHandler<T>;
}

const PrimaryButtonRenderFunc: ForwardRefRenderFunction<
  HTMLButtonElement,
  Props
> = (
  {
    icon: Icon,
    placement = "leading",
    trailing = false,
    color = "indigo",
    text,
    size = "base",
    children,
    onClickCallback,
    ...rest
  },
  ref
) => {
  const content = text || children;

  const getButtonClassNames = () => {
    return classNames(
      "inline-flex items-center gap-1  border border-transparent  shadow-sm text-white focus:outline-none focus:ring-2 rounded-md",
      {
        [buttonSize[size]]: true,
        [primaryBg[color]]: true,
        [primaryHoverBg[color]]: true,
        [primaryDarkHoverBg[color]]: true,
        [primaryFocusRing[color]]: true,
        "text-black": shouldBeDarkText(color),
        "flex-row-reverse": placement === "trailing" || trailing,
      }
    );
  };

  return (
    <button
      {...rest}
      ref={ref}
      type="button"
      onClick={onClickCallback}
      className={getButtonClassNames()}
    >
      {Icon && (
        <Icon
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
          className={iconSize[size]}
        />
      )}
      {content && content}
    </button>
  );
};

/**
 * Button with solid background.
 */
const PrimaryButton = forwardRef(PrimaryButtonRenderFunc);
PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
