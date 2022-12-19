/**
 * A React component that displays the Brand logo of this site on the Navbar
 * component.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { CFC } from "@typings/react";
import { NavLink } from "react-router-dom";

const NavbarBrand: CFC<HTMLAnchorElement> = ({ ...rest }) => {
  return (
    <NavLink
      {...rest}
      to="/"
      className="mr-4 lg:mr-8 w-auto flex-none overflow-hidden "
    >
      <img
        src="/brand-gradient.png"
        className="opacity-100 hover:opacity-80"
        alt="Brand Logo"
      />
    </NavLink>
  );
};

export default NavbarBrand;
