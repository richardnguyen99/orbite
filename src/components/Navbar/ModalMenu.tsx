/**
 * A React component that displays the content of the <Navbar.Modal /> component.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import Icon from "@components/Icon";
import NavbarModalItem from "./ModalItem";

const NavbarModalMenu = () => {
  return (
    <>
      <ul className="flex flex-col space-y-2">
        <NavbarModalItem
          className=""
          color="indigo"
          to="/about"
          text="About"
          icon={<Icon.ShadedGear color="slate" active />}
        />

        <NavbarModalItem
          className=""
          color="lime"
          to="/setting"
          text="Setting"
          icon={<Icon.ShadedGear color="slate" active />}
        />
      </ul>
    </>
  );
};

export default NavbarModalMenu;
