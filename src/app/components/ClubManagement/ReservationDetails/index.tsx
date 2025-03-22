'use client';
import React, { SetStateAction } from 'react';
import { Modal, PrimaryButton, Typography } from '../../common';
import Image from 'next/image';
import { IClubInfo } from '@/lib/interfaces';



interface IProps {
  isOpen: boolean;
  handleClosed: React.Dispatch<SetStateAction<boolean>>;
  isRequest?: boolean;
  clubInfo?: IClubInfo;
  updateStatus?: (clubId: number, status: string) => void;
}

export const ReservationDetails: React.FC<IProps> = ({
  isOpen,
  clubInfo,
  handleClosed,
  isRequest = false,
  updateStatus,
}) => {
  const handleUpdateStatus = (status: string) => {
    if (clubInfo?.id !== undefined && updateStatus) {
      updateStatus(clubInfo.id, status);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={handleClosed}
      className="w-full md:w-[760px] p-3.5 sm:p-6 rounded-xl bg-bgShadow border border-SecondaryColor/70"
    >
      <div>
        <Typography variant="h4" className="text-PrimaryColor text-start">
          {clubInfo?.name}
        </Typography>

        <Typography
          variant="bodyRegular"
          className="text-SecondaryColor text-start mt-2"
        >
          {clubInfo?.address},{clubInfo?.street} ,{clubInfo?.zip},
          {clubInfo?.city.title} ,{clubInfo?.country?.title}
        </Typography>
      </div>
      <div className="mt-6">
        <Typography variant="h5" className="text-SecondaryColor text-start">
          Facilities
        </Typography>
        <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-5">
          {clubInfo?.facilities.map((item, index) => (
            <div className="flex gap-2 items-center" key={index}>
              <Image src={item.image} alt={item.title} width={24} height={24} />
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {item.title}
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
          {clubInfo?.openingHours.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-x-3 gap-y-5"
            >
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {item?.day}
              </Typography>
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {item?.openingTime} - {item?.closingTime}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="mt-6">
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
      </div> */}
      {/* <div className="mt-6 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11548.647282772172!2d-79.39744238548901!3d43.64480148763663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d034de1ea5%3A0x179beb81d9aa1511!2sEntertainment%20District%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2s!4v1731597550010!5m2!1sen!2s"
          width="100%"
          height="301"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}

      {isRequest && updateStatus && (
        <div className="mt-7 flex gap-6 items-center">
          <button
            className={`bg-bgBox flex-1 h-[46px] xl:h-[52px] flex items-center justify-center  rounded-full text-white`}
            onClick={() => handleUpdateStatus('declined')}
          >
            <Typography variant="bodyMedium" className="flex items-center">
              Decline
            </Typography>
          </button>
          <PrimaryButton
            title="Accept"
            className="flex-1"
            onClick={() => handleUpdateStatus('approved')}
          />
        </div>
      )}
    </Modal>
  );
};
