/**
 * A React component that displays a top-level navigation bar to routing between
 * pages.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { CFC } from "@typings/react";
import NavbarWrapper from "./Wrapper";
import NavbarBrand from "./Brand";
import NavbarNav from "./Nav";
import NavbarLink from "./Link";
import NavbarCollapse from "./Collapse";
import NavbarMobile from "./Mobile";
import NavbarDropdownButton from "./DropdownButton";
import NavbarModal from "./Modal";
import NavbarStarter from "./Starter";
import Container from "@components/Container";
import { NavItemProps } from "./types";
import { LogoGithubIcon } from "@primer/octicons-react";

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

const Navbar: CFC<HTMLDivElement> = () => {
  return (
    <NavbarStarter>
      <Container>
        <NavbarWrapper>
          <NavbarBrand />
          <div className="hidden md:flex md:w-full">
            <NavbarNav items={navItems} />
            <NavbarNav items={rightnavItems} right />
          </div>
          <NavbarMobile>
            <NavbarDropdownButton />
          </NavbarMobile>
        </NavbarWrapper>
      </Container>
    </NavbarStarter>
  );
};

export default Object.assign(Navbar, {
  Wrapper: NavbarWrapper,
  Brand: NavbarBrand,
  Nav: NavbarNav,
  Link: NavbarLink,
  Collapse: NavbarCollapse,
  Mobile: NavbarMobile,
  DropdownButton: NavbarDropdownButton,
  Modal: NavbarModal,
});
