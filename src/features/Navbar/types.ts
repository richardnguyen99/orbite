/**
 * Type definitions for Navbar components
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import { CFC } from "@typings/react";

export interface NavItemProps {
  icon?: React.ReactElement;
  text?: string;
  to?: string;
  href?: string;
  tag?: CFC<HTMLSpanElement>;
}

export interface NavProps {
  items: NavItemProps[];
  right?: boolean;
}
