import { IconProps as PrimerIconProps } from "@primer/octicons-react";
import { Colors, Size } from "@typings/react";
import { FC, HTMLAttributes, SVGAttributes } from "react";

export type ButtonIconType = FC<
  PrimerIconProps &
    HTMLAttributes<HTMLOrSVGElement> &
    SVGAttributes<SVGSVGElement>
>;

export type ButtonVariant = "primary" | "secondary" | "outline" | "transparent";

export interface ButtonProps {
  /**
   * Display an icon as a React component that accepts props. The passed-in
   * component is specified just by the exported name. The Button will handle
   * the props and style by default
   *
   * @example
   * ```tsx
   * import { XIcon } from "@primer/octicons-react";
   *
   * <Button icon={XIcon} {...rest}/>
   *
   * ```
   *
   * @default undefined
   * @public
   */
  icon?: ButtonIconType;

  /**
   * Determine the position of the icon relatively to the content of the button.
   *
   * @default "leading"
   * @public
   */
  iconPlacement?: "trailing" | "leading";

  /**
   * Determine the size variation of the button.
   *
   * @default "base"
   * @public
   */
  size?: Size;

  /**
   * Determine whether or not the button component has rounded corner. The value
   * of border-radius is determined by the `size` prop.
   *
   * @default true
   * @public
   */
  rounded?: boolean;

  /**
   * Control the style of the button component.
   *
   * @default "primary"
   * @public
   */
  variant?: ButtonVariant;

  /**
   * Control the main theme of the button component.
   *
   * @default "indigo"
   * @public
   */
  color?: Colors;

  /**
   * Specify the content of the button component.
   */
  children?: string;
}
