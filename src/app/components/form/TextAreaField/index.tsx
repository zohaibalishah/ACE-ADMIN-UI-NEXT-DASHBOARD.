"use client";

import React, { type InputHTMLAttributes } from "react";
import { Typography } from "../../common";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder: string;
  className?: string;
  icon?: React.ReactElement;
  rows?: number;
  variant?: "primary" | "white";
}

export const TextAreaField = ({
  label,
  type,
  placeholder,
  className,
  icon,
  rows = 4,
  ...rest
}: Props): React.ReactElement => (
  <div className={` ${className}`}>
    {typeof label !== "undefined" && (
      <Typography className="text-body block mb-1.5">{label}</Typography>
    )}
    <textarea
      rows={rows}
      placeholder={placeholder}
      className={`w-full py-3 px-4 sm:px-5  text-body focus:shadow-primary/10 text-sm sm:text-base shadow-lg shadow-black/5 focus:outline-none resize-none "placeholder:text-tertiary text-tertiary  outline-none bg-bgBox rounded-xl
      }`}
      {...rest}
    />
  </div>
);
