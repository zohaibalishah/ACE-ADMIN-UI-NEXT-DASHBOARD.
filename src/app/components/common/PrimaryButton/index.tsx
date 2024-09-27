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
}: Props): React.ReactElement => (
  <button
    className={`${className} bg-PrimaryColor w-full h-[46px]  xl:h-[52px] flex items-center justify-center gap-x-3 rounded-full text-white`}
    {...rest}
  >
    <Typography variant="bodyMedium" className="flex items-center gap-x-2">
      <span> {typeof icon !== "undefined" && icon}</span>
      {!loading ? title : "loading..."}
    </Typography>
  </button>
);
