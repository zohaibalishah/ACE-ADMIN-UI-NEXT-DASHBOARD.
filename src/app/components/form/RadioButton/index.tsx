import React from "react";
import { Typography } from "../../common";

interface IRadioButton {
  checked: boolean;
  label?: string;
  onCheck?: () => void;
}

export const RadioButton = ({
  checked = false,
  label,
  onCheck,
}: IRadioButton): React.ReactElement => (
  <div className="flex gap-x-2 items-center cursor-pointer" onClick={onCheck}>
    <span
      className={`w-5 h-5 rounded-full border-2  p-1 inline-flex justify-center items-center transition-all duration-300 ${
        checked ? "border-PrimaryColor" : "border-SecondaryColor"
      }`}
    >
      {checked && (
        <span className="w-full h-full inline-block bg-PrimaryColor border-PrimaryColor rounded-full" />
      )}
    </span>
    {label !== null && <Typography className="text-white">{label}</Typography>}
  </div>
);
