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
      className="flex items-center text-gray-900 dark:text-white mr-4 lg:mr-8 w-auto flex-none overflow-hidden "
    >
      <img
        src="/orbite-blue.png"
        className="opacity-100 hover:opacity-80 mr-4"
        alt="Brand Logo"
      />
      <h1 className="text-4xl font-black">Orbite</h1>
    </NavLink>
  );
};

export default NavbarBrand;
