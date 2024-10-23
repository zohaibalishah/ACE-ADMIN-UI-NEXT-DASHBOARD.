"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
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
  <>
    <Dialog open={isOpen} onClose={setIsOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-bgShadow bg-opacity-60 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed top-10 inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 text-center sm:items-center ">
          <DialogPanel
            transition
            className={`${className} transform bg-bgShadow transition-all shadow-xl duration-500 data-[closed]:opacity-0 data-[closed]:transform-[scale(95%)] ease-in`}
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </>
);
