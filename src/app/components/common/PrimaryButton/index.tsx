import React, { ButtonHTMLAttributes } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Typography } from '../Typography';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  icon?: React.ReactElement;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const PrimaryButton = ({
  title,
  className = '',
  icon,
  loading = false,
  type = "button",
  ...rest
}: Props): React.ReactElement => {
  const isIcon = Boolean(icon);
  return (
    <button
      type={type}
      className={`${className} bg-PrimaryColor w-full h-[46px] xl:h-[52px] flex items-center justify-center rounded-full text-white ${
        isIcon ? 'gap-x-3' : ''
      }`}
      {...rest}
    >
      <Typography variant="bodyMedium" className="flex items-center">
        {isIcon && <span className="mr-2">{icon}</span>}
        {!loading ? title : 'loading...'}
      </Typography>
    </button>
  );
};
