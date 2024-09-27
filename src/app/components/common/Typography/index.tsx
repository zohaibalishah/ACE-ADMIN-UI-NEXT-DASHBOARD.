import React, { ElementType } from "react";

type variant =
  | "title"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h4Light"
  | "h5"
  | "h5Light"
  | "h5Bold"
  | "bodyRegular"
  | "bodyMedium"
  | "bodyBold"
  | "smallRegular"
  | "smallMedium"
  | "smallBold"
  | "extraSmallRegular"
  | "extraSmallMedium"
  | "extraSmallBold";

const tags: Record<variant, ElementType> = {
  title: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h4Light: "h4",
  h5: "h5",
  h5Light: "h5",
  h5Bold: "h5",

  bodyRegular: "p",
  bodyMedium: "p",
  bodyBold: "p",

  smallRegular: "p",
  smallMedium: "p",
  smallBold: "p",

  extraSmallBold: "span",
  extraSmallMedium: "span",
  extraSmallRegular: "span",
};

const sizes: Record<variant, string> = {
  title: "text-xl sm:text-2xl leading-auto font-bold font-haeding",
  h1: "text-xl sm:text-2xl lg:text-3xl !leading-auto font-bold font-heading",
  h2: "text-xl sm:text-xl lg:text-[26px] leading-auto font-bold font-heading",
  h3: "text-lg md:text-xl lg:text-[24px] !leading-[34px] font-bold font-heading",
  h4: "text-lg md:text-xl lg:text-[20px] !leading-[24px] font-bold font-heading",
  h4Light:
    "text-lg md:text-xl lg:text-2xl !leading-auto font-normal font-heading",
  h5: "text-base sm:text-lg leading-auto font-normal font-heading",
  h5Light: "text-base sm:text-lg leading-auto font-heading",
  h5Bold: "text-base sm:text-lg !leading-[21.48px] font-medium font-heading",

  bodyRegular:
    "text-sm sm:text-base !leading-[18px] sm:!leading-[26px] font-body",
  bodyMedium:
    "text-[13px] sm:text-[14px] font-normal !leading-[23.8px] font-body",
  bodyBold: "text-[13px] sm:text-sm font-bold leading-auto font-body",

  smallRegular: "text-[11px] sm:text-xs leading-[20.8px] font-body",
  smallMedium: "text-[11px] sm:text-xs leading-auto font-body",
  smallBold: "text-[11px] sm:text-xs font-bold leading-auto font-body",

  extraSmallRegular:
    "text-[9px] sm:text-[10px] font-normal !leading-[12px] font-body",
  extraSmallMedium:
    "text-[9px] sm:text-[10px] font-meduim leading-auto font-body",
  extraSmallBold: "text-[9px] sm:text-[10px] font-bold leading-auto font-body",
};

interface Props {
  variant?: variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

export const Typography = ({
  variant = "bodyRegular",
  children,
  className,
  as,
}: Props) => {
  const sizesCalsses = sizes[variant];
  const Tag = as ?? tags[variant];
  return <Tag className={`${sizesCalsses} ${className}`}>{children}</Tag>;
};
