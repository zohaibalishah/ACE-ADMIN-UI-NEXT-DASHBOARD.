"use client";
import { MImage, Typography } from "@/app/components/common";
import React, { useState } from "react";
import { userManagementIcons } from "../../../../../../public/icons/userManagement";
import { BsThreeDots } from "react-icons/bs";
import { mImage } from "../../../../../../public/images";
import { routes } from "@/app/utils/const";
import Link from "next/link";
import { DropEditMenu } from "@/app/components/ClubManagement";

export const ProfileSection = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section>
      {/* backward button and three dots button  */}
      <div className="flex justify-between items-center">
        <Link href={routes.usermanagement}>
          <div className="flex items-center gap-x-2 cursor-pointer">
            <MImage
              src={userManagementIcons.backward}
              w={6}
              h={5}
              alt="backward"
            />
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              Back
            </Typography>
          </div>
        </Link>
        <div
          className="text-SecondaryColor text-2xl cursor-pointer relative"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <BsThreeDots />
          {isOpen && <DropEditMenu />}
        </div>
      </div>

      {/* profile  */}

      <div className="py-5  flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-x-3">
          <div className="w-[90px] h-[90px] rounded-full">
            <MImage src={mImage.userProfile} w={90} h={90} alt="user" />
          </div>
          <div className="flex flex-col gap-y-1">
            <Typography
              variant="extraSmallRegular"
              className="w-[54px] h-[20] bg-bgSucces text-SecondaryColor rounded-full py-0.5 px-1 flex items-center justify-center"
            >
              Active
            </Typography>
            <Typography variant="h5Bold" className="text-SecondaryColor">
              Aqib Javid
            </Typography>
            <Typography
              variant="smallRegular"
              className="text-SecondaryColor py-1"
            >
              aqib.example@gmail.com
            </Typography>
          </div>
        </div>

        <ol className="marker:text-SecondaryColor list-outside list-disc pl-6">
          <li>
            <Typography variant="bodyMedium" className="text-SecondaryColor">
              Gender: Male
            </Typography>
          </li>
          <li>
            <Typography variant="bodyMedium" className="text-SecondaryColor">
              Age: 26y
            </Typography>
          </li>
        </ol>

        <div className="pr-10">
          <ol className="marker:text-SecondaryColor list-outside list-disc pl-6">
            <li>
              <Typography variant="bodyMedium" className="text-SecondaryColor">
                Address: 123 Main St, Riyadh, KSA
              </Typography>
            </li>
            <li>
              <Typography variant="bodyMedium" className="text-SecondaryColor">
                Phone number: +966148754306
              </Typography>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};
