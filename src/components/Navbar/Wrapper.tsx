/**
 * A React component that contains and format all the content of a Navbar
 * component.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { CFC } from "@typings/react";

const NavbarWrapper: CFC<HTMLDivElement> = ({ children, ...rest }) => {
  return (
    <div {...rest} className="py-4 lg:px-8">
      {children}
    </div>
  );
};

export default NavbarWrapper;
