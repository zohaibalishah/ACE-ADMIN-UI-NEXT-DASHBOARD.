"use client";
import { MImage, Typography } from "@/app/components/common";
import React, { SetStateAction, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { clubManagementIcons } from "../../../../../../public/icons/clubManagementIcons";
import { EditClubModal } from "../EditClubModal";

interface DiscountEditMenuProps {
  index: number;
}

export const ClubTableActionMenu = ({
  index,
}: DiscountEditMenuProps): React.ReactElement => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div>
      <button
        className="text-SecondaryColor "
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <Typography className="text-SecondaryColor ">
          <BsThreeDots />
        </Typography>
      </button>

      {openMenu && <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
    </div>
  );
};

interface IMenu {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ openMenu, setOpenMenu }: IMenu) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <div className="absolute top-8 right-[80%]  rounded-lg z-10">
        <div className="bg-bgShadow border-2 border-newLinear/50 z-10 rounded-xl transition-all duration-500 p-1">
          <div className="w-[107px] h-[86px] flex flex-col justify-center items-start  gap-y-3 pl-2 ">
            <button
              className="flex items-start justify-center gap-x-3"
              onClick={() => setShow(true)}
            >
              <MImage
                src={clubManagementIcons.iconEdit}
                w={21}
                h={21}
                alt="edit"
              />
              <Typography variant="bodyMedium" className="text-SecondaryColor">
                Edit
              </Typography>
            </button>

            <div className="flex items-center justify-center gap-x-3">
              <MImage
                src={clubManagementIcons.iconDelete}
                w={21}
                h={21}
                alt="suspend"
              />
              <Typography variant="bodyMedium" className="text-SecondaryColor">
                Suspends
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {show ? <EditClubModal isOpen={show} setIsOpen={setShow} /> : ""}
    </>
  );
};
