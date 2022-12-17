/**
 * A React component that displays a general layout template for all pages
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import {
  LogoGithubIcon,
  MarkGithubIcon,
  TerminalIcon,
} from "@primer/octicons-react";

import { CFC } from "@typings/react";
import Navbar from "./Navbar";
import Container from "./Container";
import Icon from "./Icon";

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

const rightnavItems: NavItemProps[] = [
  {
    icon: <LogoGithubIcon size={24} />,
    href: "https://github.com/richardnguyen99/orbite",
  },
];

const Layout: CFC<HTMLDivElement> = ({ children, ...rest }) => {
  return (
    <main {...rest}>
      <Navbar>
        <Container>
          <Navbar.Wrapper>
            <Navbar.Brand />
            <div className="hidden md:flex md:w-full">
              <Navbar.Nav items={navItems} />
              <Navbar.Nav items={rightnavItems} right />
            </div>
          </Navbar.Wrapper>
        </Container>
      </Navbar>
      {children}
      <footer>Something</footer>
    </main>
  );
};

export default Layout;
