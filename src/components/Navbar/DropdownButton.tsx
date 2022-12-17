/**
 * A React component that displays the hidden content on some actions.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { useState, useCallback } from "react";
import { KebabHorizontalIcon } from "@primer/octicons-react";

import { CFC } from "@typings/react";

import NavbarModal from "./Modal";

const NavbarDropdownButton: CFC<HTMLButtonElement> = ({ ...args }) => {
  const [opening, setOpening] = useState(false);

  const onCloseCallback = useCallback(() => {
    setOpening(false);
  }, []);

  const onClickCallback = useCallback(() => {
    setOpening((previous) => !previous);
  }, []);

  return (
    <>
      <button
        {...args}
        type="button"
        className="inline-flex justify-center rounded-md border border-transparent px-2 py-2 text-sm font-medium hover:bg-blue-200  dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ml-auto"
        onClick={onClickCallback}
      >
        <KebabHorizontalIcon size={24} />
      </button>
      <NavbarModal opening={opening} onCloseCallback={onCloseCallback} />
    </>
  );
};

export default NavbarDropdownButton;
