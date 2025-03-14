"use client";

import { Modal, PrimaryButton, Typography } from "@/app/components/common";
import React, { useEffect, useState } from "react";
import { RiUploadCloud2Line } from "react-icons/ri";

export const ConfirmPayment = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showDetials, setShowDetials] = useState<boolean>(false);

  useEffect(() => {
    setShowDetials(false);
  }, [isOpen]);

  return (
    <>
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Typography
          variant="bodyMedium"
          className="text-SecondaryColor underline underline-offset-2 cursor-pointer"
        >
          Confirmed
        </Typography>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        className="w-full max-w-[624px] p-7 rounded-xl border border-SecondaryColor"
      >
        {showDetials ? (
          <div>
            <Typography
              variant="h5Bold"
              className="text-SecondaryColor text-left"
            >
              Payment details
            </Typography>
            <div className="flex justify-between items-center mt-8">
              <div>
                <Typography className="text-SecondaryColor">
                  Downtown Club
                </Typography>
                <Typography
                  variant="smallRegular"
                  className="text-left text-SecondaryColor mt-2"
                >
                  Sep 24, 2024
                </Typography>
              </div>
              <span className="px-3 py-1 bg-PrimaryColor rounded-lg text-SecondaryColor text-xs inline-flex justify-center items-center">
                Completed
              </span>
            </div>
            <div className="flex justify-between items-center mt-8">
              <div>
                <Typography className="text-SecondaryColor">
                  Total Income
                </Typography>
                <Typography className="text-left text-SecondaryColor mt-2">
                  Profit %
                </Typography>
              </div>
              <div>
                <Typography className="text-SecondaryColor">
                  SAR 10,000
                </Typography>
                <Typography className="text-left text-SecondaryColor mt-2">
                  3%
                </Typography>
              </div>
            </div>
            <div className="flex justify-between items-center mt-8">
              <div>
                <Typography className="text-SecondaryColor">
                  Due payment
                </Typography>
                <Typography className="text-left text-SecondaryColor mt-2">
                  Client
                </Typography>
              </div>
              <div>
                <Typography className="text-SecondaryColor">
                  SAR 9,700
                </Typography>
                <Typography className="text-left text-SecondaryColor mt-2">
                  Aqib Javid
                </Typography>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Typography
              variant="h5Bold"
              className="text-SecondaryColor text-left"
            >
              Upload transaction receipt
            </Typography>
            <label className="my-8 w-full max-w-[564px] h-[174px] border border-dashed border-newLinear rounded-xl flex flex-col gap-3 items-center justify-center">
              <RiUploadCloud2Line className="text-SecondaryColor text-2xl" />
              <Typography variant="bodyMedium" className="text-SecondaryColor">
                Upload branch image
              </Typography>

              <input type="file" className="hidden" />
            </label>
            <PrimaryButton
              title="Continue"
              typeof="button"
              className="max-w-[260px] w-full max-h-[48px]"
              onClick={() => {
                setShowDetials(true);
              }}
            />
          </div>
        )}
      </Modal>
    </>
  );
};
