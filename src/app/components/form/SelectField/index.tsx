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

interface ISelectField<OptionType>
  extends Omit<SelectProps<OptionType>, "onChange" | "value"> {
  placeholder?: string;
  value?: SingleValue<OptionType> | null;
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

export const SelectField = <OptionType,>({
  placeholder,
  className,
  value,
  onChange,
  label,
  variant = "primary",
  ...rest
}: ISelectField<OptionType>): React.ReactElement => {
  const handleChange = (
    newValue: SingleValue<OptionType> | MultiValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ): void => {
    if (typeof onChange !== "undefined") {
      onChange(newValue as SingleValue<OptionType>, actionMeta);
    }
  };

  return (
    <div className="flex-1 bg-bgBox bg-opacity-80 rounded-full">
      {typeof label !== "undefined" && (
        <Typography className="font-medium text-body block mb-1.5 text-tertiary">
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
        <button className="absolute top-1/2 -translate-y-1/2 right-4  text-SecondaryColor text-xl">
          <RxChevronDown />
        </button>
      </div>
    </div>
  );
};
