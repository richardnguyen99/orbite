import { Menu, Transition } from "@headlessui/react";
import { FC, Fragment, HTMLAttributes, ReactFragment } from "react";

import { CFC } from "@typings/react";
import { DropdownProps } from "./types";
import { combineClassName } from "../../utils/combine-classname";
import DropdownToggler from "./Toggler";
import DropdownList from "./List";
import DropdownItem from "./Item";

type WithTransitionProps = {
  animation: boolean;
  open: boolean;
};

const WithTransition: CFC<ReactFragment, WithTransitionProps> = ({
  animation,
  open,
  children,
}) => {
  if (!animation) return <Fragment>{children}</Fragment>;

  return (
    <Transition
      show={open}
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      {children}
    </Transition>
  );
};

/**
 * A simple component that displays a hidden menu by clicking on the toggler.
 *
 * @example
 *
 * ```tsx
 * import Dropdown from "@components";
 *
 * <Dropdown {...otherProps}>
 *    <Dropdown.Toggler
 *      as="button"
 *      onDisplay={someCallback()}>
 *      Menu
 *    </Dropdown.Toggler>
 *    <Dropdown.Menu>
 *      <Dropdown.Item></Dropdown.Item>
 *      <Dropdown.Item></Dropdown.Item>
 *      <Dropdown.Item></Dropdown.Item>
 *    </Dropdown.Menu>
 * </Dropdown>
 * ```
 */
const Dropdown: FC<DropdownProps & HTMLAttributes<HTMLDivElement>> = ({
  animation = false,
  children,
  ...rest
}) => {
  if (!Array.isArray(children) || children.length !== 2) {
    throw new Error(
      "<Dropdown /> requires two child components. One is the Toggler and the other is the Dropdown Menu."
    );
  }

  const Toggler = children[0];
  const List = children[1];

  return (
    <Menu
      as="div"
      {...rest}
      className={combineClassName(
        "relative inline-block text-left",
        rest.className
      )}
    >
      {({ open }) => (
        <>
          <div>{Toggler}</div>

          <WithTransition animation={animation} open={open}>
            {List}
          </WithTransition>
        </>
      )}
    </Menu>
  );
};

export default Object.assign(Dropdown, {
  Toggler: DropdownToggler,
  List: DropdownList,
  Item: DropdownItem,
});
