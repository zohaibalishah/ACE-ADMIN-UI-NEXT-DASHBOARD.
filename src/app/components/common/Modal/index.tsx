"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import React from "react";

interface Props {
  readonly children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  className: string;
}

export const Modal = ({
  children,
  isOpen,
  setIsOpen,
  className,
}: Props): React.ReactElement => (
  <Dialog
    open={isOpen}
    as="div"
    className="relative z-[99] focus:outline-none"
    onClose={() => {
      setIsOpen(false);
    }}
  >
    <div className="fixed bg-bgShadow/60 inset-0 z-[99] w-screen overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-2.5 sm:p-4">
        <DialogPanel
          transition
          className={`${className} w-[598px] h-[594px] transform bg-bgShadow transition-all shadow-xl duration-500 data-[closed]:opacity-0 data-[closed]:transform-[scale(95%)] ease-in`}
        >
          {children}
        </DialogPanel>
      </div>
    </div>
  </Dialog>
);
