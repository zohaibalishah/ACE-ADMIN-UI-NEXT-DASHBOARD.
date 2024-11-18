"use client";

import React, { SetStateAction, useState } from "react";
import { Modal, PrimaryButton, Typography } from "../../common";
import { DatePickerField, SelectField, TextField } from "../../form";
import { icons } from "../../../../../public/icons";
import Image from "next/image";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
const facilities = [
  { name: "Free Parking", icon: icons.fp },
  { name: "WiFi", icon: icons.wifi },
  { name: "Camera", icon: icons.camera },
  { name: "Locker Room", icon: icons.lr },
  { name: "Restaurant", icon: icons.restaurant },
  { name: "Changing Room", icon: icons.cr },
];
export const ClubWalletHistory = ({ isOpen, setIsOpen }: IProps) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="w-full md:w-[600px] p-3.5 sm:p-6 rounded-xl bg-bgShadow border border-SecondaryColor/70"
    >
      <div>
        <Typography variant="h5" className="text-SecondaryColor text-start">
          Club wallet history
        </Typography>

        <div className="flex flex-col gap-3 items-center pt-5 pb-7">
          <Typography variant="h2" className="text-SecondaryColor !font-medium">
            SAR 276
          </Typography>
          <Typography className="text-SecondaryColor">Downtown Club</Typography>
          <Typography variant="bodyMedium" className="text-SecondaryColor">
            Markazi Dist, Riyadh, KSA
          </Typography>
        </div>

        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex gap-4 items-start relative pb-7 last:pb-4"
          >
            <div className="flex flex-col mt-1">
              <span className="w-4 h-4 rounded-full bg-SecondaryColor" />
              <span
                className="absolute top-4 left-1.5 w-[3px] bg-SecondaryColor/30"
                style={{ height: "calc(100% - 1rem)" }}
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <Typography className="text-SecondaryColor text-left">
                Match cancelled | Wallet balance + SAR50
              </Typography>
              <Typography
                variant="bodyMedium"
                className="text-SecondaryColor text-left"
              >
                Match cancelled and player Abdur Rehman & Jawad got SAR50 in
                their wallet
              </Typography>
              <Typography
                variant="bodyMedium"
                className="text-SecondaryColor text-left"
              >
                22 Oct, 2024
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};
