"use client";

import React, { SetStateAction, useState } from "react";
import { Modal, PrimaryButton, Typography } from "../../common";
import { DatePickerField, SelectField, TextField } from "../../form";
import { icons } from "../../../../../public/icons";
import Image from "next/image";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  isRequest?: boolean;
}
const facilities = [
  { name: "Free Parking", icon: icons.fp },
  { name: "WiFi", icon: icons.wifi },
  { name: "Camera", icon: icons.camera },
  { name: "Locker Room", icon: icons.lr },
  { name: "Restaurant", icon: icons.restaurant },
  { name: "Changing Room", icon: icons.cr },
];
export const ReservationDetails = ({
  isOpen,
  setIsOpen,
  isRequest = false,
}: IProps) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="w-full md:w-[760px] p-3.5 sm:p-6 rounded-xl bg-bgShadow border border-SecondaryColor/70"
    >
      <div>
        <Typography variant="h4" className="text-PrimaryColor text-start">
          Elite Sports Club
        </Typography>

        <Typography
          variant="bodyRegular"
          className="text-SecondaryColor text-start mt-2"
        >
          Malaz Dist ,High Way, B.O.Box: 126613, Riyadh Saudi Arabia
        </Typography>
      </div>
      <div className="mt-6">
        <Typography variant="h5" className="text-SecondaryColor text-start">
          Facilities
        </Typography>
        <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-5">
          {facilities.map((item, index) => (
            <div className="flex gap-2 items-center" key={index}>
              <Image src={item.icon} alt={item.name} width={24} height={24} />
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {item.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <Typography variant="h5" className="text-SecondaryColor text-start">
          Opening hours
        </Typography>
        <div className="mt-5 flex flex-col gap-5">
          <div className="flex justify-between items-center gap-x-3 gap-y-5">
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              Mon - Fri
            </Typography>
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              08:00am - 10:00pm
            </Typography>
          </div>
          <div className="flex justify-between items-center gap-x-3 gap-y-5">
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              Sat
            </Typography>
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              08:00am - 10:00pm
            </Typography>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Typography variant="h5" className="text-SecondaryColor text-start">
          Contract details
        </Typography>
        <div className="mt-5 flex flex-col gap-5">
          <div className="flex justify-between items-center gap-x-3 gap-y-5">
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              Profit percentage
            </Typography>
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              5%
            </Typography>
          </div>
          <div className="flex justify-between items-center gap-x-3 gap-y-5">
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              Contract duration
            </Typography>
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              one year
            </Typography>
          </div>
          <div className="flex justify-between items-center gap-x-3 gap-y-5">
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              Contract start date
            </Typography>
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              31-07-2024
            </Typography>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11548.647282772172!2d-79.39744238548901!3d43.64480148763663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d034de1ea5%3A0x179beb81d9aa1511!2sEntertainment%20District%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2s!4v1731597550010!5m2!1sen!2s"
          width="100%"
          height="301"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Show if is request */}
      {isRequest && (
        <div className="mt-7 flex gap-6 items-center">
          <button
            className={`bg-bgBox flex-1 h-[46px] xl:h-[52px] flex items-center justify-center  rounded-full text-white`}
          >
            <Typography variant="bodyMedium" className="flex items-center">
              Decline
            </Typography>
          </button>
          <PrimaryButton title="Accept" className="flex-1" />
        </div>
      )}
    </Modal>
  );
};
