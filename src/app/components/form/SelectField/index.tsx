"use client";

import React from "react";
import { RxChevronDown } from "react-icons/rx";
import Select, {
  components,
  type Props as SelectProps,
  type ActionMeta,
  type SingleValue,
  type MultiValue,
} from "react-select";
import { Typography } from "../../common";
import styles from "./Select.module.css";
import { colors } from "@/app/styles/colors";

interface OptionType {
  label: string;
  value: string;
}

interface ISelectField
  extends Omit<SelectProps<OptionType>, "onChange" | "value"> {
  placeholder?: string;
  value?: OptionType | null;
  className?: string;
  label?: string;
  variant?: "primary" | "white";
  onChange?: (
    value: SingleValue<OptionType> | null,
    actionMeta: ActionMeta<OptionType>
  ) => void;
}

const customStyles = {
  control: () => ({}),
  valueContainer: (baseStyles: any) => ({
    ...baseStyles,
    paddingLeft: 20,
    paddingRight: 20,
  }),
  singleValue: (baseStyles: any) => ({
    ...baseStyles,
    color: colors.SecondaryColor,
  }),
  menu: (style: any) => ({
    ...style,
    background: colors.bgShadow,
  }),
  option: (style: any) => ({
    ...style,
    background: colors.bgShadow,
  }),
};

export const SelectField = ({
  placeholder,
  className,
  value,
  onChange,
  label,
  variant = "primary",
  ...rest
}: ISelectField): React.ReactElement => {

  const handleChange = (
    newValue: SingleValue<OptionType> | MultiValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ): void => {
    if (onChange) {
      onChange(newValue as SingleValue<OptionType>, actionMeta);
    }
  };

  return (
    <div className="flex-1 bg-bgBox bg-opacity-80 rounded-full">
      {label && (
        <Typography className="text-body text-tertiary block font-medium mb-1.5">
          {label}
        </Typography>
      )}
      <div
        className={`${className} flex-1 h-[44px] sm:h-[56px] shadow-lg shadow-black/5 rounded-full bg-transparent flex items-center text-sm sm:text-base text-left relative text-SecondaryColor placeholder-tertiary`}
      >
        <Select
          placeholder={placeholder}
          className="w-full"
          value={value}
          onChange={handleChange}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
            Menu: (props: any) => (
              <components.Menu {...props} className={styles.menu} />
            ),
          }}
          styles={{
            ...customStyles,
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: colors.PrimaryColor,
            },
          })}
          {...rest}
        />
        <button className="text-SecondaryColor text-xl -translate-y-1/2 absolute right-4 top-1/2">
          <RxChevronDown />
        </button>
      </div>
    </div>
  );
};
