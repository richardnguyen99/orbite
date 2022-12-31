/**
 * Type definitions for <Select /> components
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { FC, HTMLAttributes, ReactNode } from "react";

import { IconProps } from "@components/Icon/types";

export interface SelectItemProps {
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
  value: string | number;

  /**
   * Simple text that briefly describes the item, same as the `text` prop. If
   * both are passed in, text will override and be used to render.
   */
  children: string | ReactNode;

  /**
   * Controls what type of link, anchor tag or router link, to use in navigation.
   *
   * @default undefined
   * @public
   */
  link?: "a" | "link";

  /**
   * Link URL if this item is a link (link prop is passed either "a" or "link").
   *
   * @default undefined
   * @public
   */
  to?: string;

  /**
   * Optional class names that style an Item component if it's active.
   *
   * @default undefined
   * @public
   */
  activeClassName?: string;

  /**
   * A callback to trigger some events if this item gets clicked.
   *
   * @default undefined
   * @public
   */
  onClick?: () => void;
}

export interface ListTogglerProps {
  content: string;

  icon?: FC<HTMLAttributes<HTMLOrSVGElement> & object>;
  iconClassName?: string;
}

export interface OptionProps {
  /**
   * A simple text that briefly describes what this option is. If both `content`
   * and `children` are passed to an Option component, `text` will override.
   *
   * @default undefined
   * @public
   */
  content?: string;

  /**
   * A simple callback that performs some side effects if the option is clicked.
   *
   * @default undefined
   * @returns
   */
  onClick?: () => void;
}
