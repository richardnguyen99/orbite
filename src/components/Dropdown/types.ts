/**
 * Type definitions for <Dropdown /> components.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { IconProps } from "@components/Icon/types";
import { ReactNode } from "react";

export interface DropdownTogglerProps {
  /**
   * Simple text that briefly describes the trigger.
   *
   * @public
   */
  text?: string;

  /**
   * Simple text that briefly describes the trigger. Same as `text` props, but
   * it will be passed as a child component.
   *
   * If text and children are passed, text will override.
   *
   * @public
   */
  children?: string;

  /**
   * A boolean state that determines whether a Chevron icon should be displayed
   * after the text.
   *
   * @default false
   * @public
   */
  chevron?: boolean;

  /**
   * A boolean state that determines whether the Chevron should rotate upon the
   * dropdown display, assume `chevron` prop is specified.
   *
   * @default false
   * @public
   */
  rotateOnActive?: boolean;
}

export interface DropdownItemProps {
  /**
   * A React Functional Component that is from either components/icon or @primer/icon.
   *
   * @default undefined
   * @public
   */
  icon?: IconProps;

  /**
   * Simple text that briefly describes the item.
   *
   * @public
   */
  text: string;

  /**
   * A callback to trigger some events if this item gets clicked.
   *
   * @default undefined
   * @public
   */
  onClick?: () => void;
}

export interface DropdownProps {
  /**
   * Check whether or not there should be a transition animation applied to this
   * dropdown.
   *
   * @default false
   * @public
   */
  animation?: boolean;

  /**
   * A React props if Dropdown's content is specified explicitly by declaring
   * tags. If this is the case, the first two children should be used. The first
   * one should be the trigger button, and the second one should a list
   * component that contains dropdown items. Everything else will be discarded.
   *
   * @public
   */
  children: ReactNode[];
}
