"use client";
import React from "react";
import { useState } from "react";
import { MImage } from "../../common";
import { Calendar } from "lucide-react";

interface props {
  placeholder: string;
  className?: string;
}

export const DatePickerField = ({
  placeholder,
  className,
  ...rest
}: props): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`${className} w-full h-[56px] bg-bgBox border-2 border-boxOutline rounded-full flex justify-between items-center py-3 px-5 relative`}
      {...rest}
    >
      <input
        type="text"
        placeholder={placeholder}
        readOnly
        className="w-full bg-transparent rounded-full p-3 read-only placeholder:text-tertiary"
      />
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <MImage
          src={"/icons/Calendar.png"}
          w={18}
          h={20}
          alt="calendar"
          className="cursor-pointer"
        />
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0">
          <Calendar />
        </div>
      )}
    </div>
  );
};
