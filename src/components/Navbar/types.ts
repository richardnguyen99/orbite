/**
 * Type definitions for Navbar components
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import { CFC } from "@typings/react";

export interface NavItemProps {
  icon?: CFC<HTMLOrSVGElement>;
  text: string | React.ReactNode;
  to: string;
  tag?: CFC<HTMLSpanElement>;
}

export interface NavProps {
  items: NavItemProps[];
}
