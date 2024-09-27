"use client";
import { Switch } from "@headlessui/react";
import { useState } from "react";

export const ToggleButton = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group relative flex items-center h-[18px] w-8 cursor-pointer rounded-full bg-bgShadow p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[checked]:bg-PrimaryColor"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-[15px] translate-x-0 rounded-full bg-bgDark ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-3 group-data-[checked]:bg-black"
      />
    </Switch>
  );
};
