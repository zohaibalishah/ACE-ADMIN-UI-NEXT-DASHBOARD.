import React, { HtmlHTMLAttributes } from "react";
import { FaPlus } from "react-icons/fa";
import { Typography } from "../Typography";

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  icon?: React.ReactNode;
  loading?: boolean;
}

export const PrimaryButton = ({
  title,
  className,
  icon,
  loading = false,
  ...rest
}: Props): React.ReactElement => {
  const isIcon = typeof icon !== "undefined";
  return (
    <button
      className={`${className} bg-PrimaryColor w-full h-[46px] xl:h-[52px] flex items-center justify-center  rounded-full text-white ${
        isIcon && "gap-x-3"
      }`}
      {...rest}
    >
      <Typography variant="bodyMedium" className="flex items-center">
        {isIcon && <span className="mr-2"> {icon}</span>}
        {!loading ? title : "loading..."}
      </Typography>
    </button>
  );
};
