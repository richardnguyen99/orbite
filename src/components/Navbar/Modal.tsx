/**
 * A React component that displays a dialog, or modal, by calling the open
 * method.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { CFC } from "@typings/react";
import { XIcon } from "@primer/octicons-react";

export interface NavbarModalProps {
  opening: boolean;
  onCloseCallback: () => void;
}

const NavbarModal: CFC<HTMLDivElement, NavbarModalProps> = ({
  opening,
  onCloseCallback,
  ...args
}) => {
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <Transition.Root show={opening} as={Fragment}>
      <Dialog
        {...args}
        as="div"
        className="relative z-[5000]"
        initialFocus={cancelButtonRef}
        onClose={onCloseCallback}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black blur" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full h-80 transform overflow-hidden rounded-2xl bg-neutral-300 dark:bg-neutral-900/90 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h1"
                  className="text-3xl font-medium leading-6 text-gray-900 dark:text-white"
                >
                  <div className="flex items-center">
                    <p>
                      <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r to-violet-500 from-purple-800 mr-2">
                        Orbite
                      </span>
                      Modal
                    </p>
                    <button
                      ref={cancelButtonRef}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-2 py-2 text-sm font-medium hover:bg-blue-200  dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ml-auto"
                      onClick={onCloseCallback}
                    >
                      <XIcon size={24} />
                    </button>
                  </div>
                </Dialog.Title>
                <hr className="my-4 h-[2px] bg-gray-200 border-0 dark:bg-neutral-800" />
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We&apos;ve
                    sent you an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NavbarModal;
