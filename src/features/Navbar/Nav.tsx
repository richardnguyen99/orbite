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
  right = false,
  items,
  ...rest
}) => {
  const getClassNames = () =>
    classNames(
      "text-lg leading-6 font-semibold text-neutral-700 dark:text-slate-200",
      {
        "ml-auto": right,
      }
    );

  return (
    <nav {...rest} className={getClassNames()}>
      <ul className="flex space-x-2">
        {items.map(({ icon, to, href, text }, idx) => (
          <NavLink to={to} key={idx} icon={icon} text={text} href={href}>
            {text}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarNav;
