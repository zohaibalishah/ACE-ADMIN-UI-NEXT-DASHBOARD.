import React, { InputHTMLAttributes } from "react";
import { Typography } from "../../common";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  placeholder: string;
  className?: string;
  icon?: React.ReactNode;
  inputClass?: string;
}

export const TextField = ({
  label,
  type,
  placeholder,
  className,
  icon,
  inputClass,
  ...rest
}: Props): React.ReactElement => (
  <div className={`${className}`}>
    {label !== undefined && (
      <Typography className="text-body block mb-1.5">{label}</Typography>
    )}
    <div className="relative border-2 border-boxOutline bg-opacity-50 flex justify-between items-center rounded-full w-full">
      <Typography variant="bodyRegular" className="w-full">
        <input
          type={type ?? "text"}
          placeholder={placeholder}
          className={`${inputClass} w-full placeholder:text-tertiary text-white h-[46px] xl:h-[56px] px-5 rounded-full outline-none border-2 border-transparent focus:border-PrimaryColor bg-bgBox bg-opacity-80`}
          {...rest}
        />
      </Typography>

      {icon !== undefined && (
        <span className="bg-bgBox text-white text-lg md:text-2xl mx-4 cursor-pointer flex justify-center items-center ">
          {icon}
        </span>
      )}
    </div>
  </div>
);
