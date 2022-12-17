/**
 * A React component that holds a set of Navigation Links and displays them as
 * flex items.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import classNames from "classnames";

import { CFC } from "@typings/react";
import { NavProps } from "./types";
import NavLink from "./Link";

const NavbarNav: CFC<HTMLDivElement, NavProps> = ({
  children,
  items,
  ...rest
}) => {
  return (
    <nav
      {...rest}
      className={classNames(
        "text-lg leading-6 font-semibold text-neutral-700 dark:text-slate-200"
      )}
    >
      <ul className="flex space-x-6">
        {items.map(({ to, text }, idx) => (
          <NavLink to={to} key={idx} text={text} />
        ))}
      </ul>
    </nav>
  );
};

export default NavbarNav;
