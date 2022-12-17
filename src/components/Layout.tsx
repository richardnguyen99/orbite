/**
 * A React component that displays a general layout template for all pages
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { CFC } from "@typings/react";
import Navbar from "./Navbar";
import Container from "./Container";

import type { NavItemProps } from "./Navbar/types";

const navItems: NavItemProps[] = [
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Setting",
    to: "/setting",
  },
];

const Layout: CFC<HTMLDivElement> = ({ children, ...rest }) => {
  return (
    <main {...rest}>
      <Navbar>
        <Container>
          <Navbar.Wrapper>
            <Navbar.Brand />
            <Navbar.Nav items={navItems} />
          </Navbar.Wrapper>
        </Container>
      </Navbar>
      {children}
      <footer>Something</footer>
    </main>
  );
};

export default Layout;
