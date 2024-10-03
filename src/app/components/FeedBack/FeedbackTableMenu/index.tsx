"use client";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MImage, Typography } from "../../common";
import { clubManagementIcons } from "../../../../../public/icons/clubManagementIcons";
import { FeedbackModal } from "../FeedbackModal";

export const FeedbackTableMenu = (): React.ReactElement => {
  const [isShow, setIsShow] = useState(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  return (
    <div className="relative">
      <button
        className="text-SecondaryColor cursor-pointer text-xl"
        onClick={() => setIsShow((prev) => !prev)}
      >
        <BsThreeDots />
      </button>
      {isShow && (
        <div className=" absolute top-4 right-16 w-[116px] h-[86px] border-2 border-boxOutline flex flex-col justify-center items-center rounded-lg bg-bgBox z-20  gap-y-2 translate-x-0 duration-500 ">
          <div
            className="flex items-center gap-x-2 cursor-pointer"
            onClick={() => setIsShow(false)}
          >
            <MImage
              src={clubManagementIcons.iconPreview}
              w={24}
              h={24}
              alt="eye"
            />
            <Typography variant="bodyMedium" className="text-SecondaryColor">
              View
            </Typography>
          </div>
          <div onClick={() => setIsModal(true)}>
            <div
              className="flex items-center gap-x-2 cursor-pointer"
              onClick={() => setIsShow(false)}
            >
              <MImage
                src={clubManagementIcons.iconEdit}
                w={24}
                h={24}
                alt="edit"
              />
              <Typography variant="bodyMedium" className="text-SecondaryColor">
                Resolve
              </Typography>
            </div>
          </div>
        </div>
      )}
      {isModal ? <FeedbackModal isOpen={isModal} setIsOpen={setIsModal} /> : ""}
    </div>
  );
};
