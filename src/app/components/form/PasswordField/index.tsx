"use client";

import React, { InputHTMLAttributes, useState } from "react";
import { Typography } from "../../common";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string;
  className?: string;
}

export const PasswordField = ({
  label,
  placeholder,
  className,
  ...rest
}: Props): React.ReactElement => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className={`${className}`}>
      {label !== undefined && (
        <Typography className="text-body block mb-1.5">{label}</Typography>
      )}
      <div className="relative border-2 border-boxOutline bg-opacity-50 my-1 md:my-2 flex justify-between items-center rounded-full w-full ">
        <Typography variant="bodyRegular" className="w-full">
          <input
            type={show ? "text" : "password"}
            placeholder={placeholder}
            className={` w-full placeholder:text-tertiary text-white h-[46px] xl:h-[56px] px-5 rounded-full outline-none border-2 border-transparent focus:border-PrimaryColor bg-bgBox bg-opacity-80`}
            {...rest}
          />
        </Typography>

        <button
          type="button"
          onClick={() => {
            setShow((prev) => !prev);
          }}
          className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-lg md:text-2xl mx-4 inline-flex justify-center items-center "
        >
          {show ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </button>
      </div>
    </div>
  );
};
