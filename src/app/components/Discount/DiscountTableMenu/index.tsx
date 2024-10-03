"use client";
import React, { SetStateAction, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { clubManagementIcons } from "../../../../../public/icons/clubManagementIcons";
import { MImage, Typography } from "../../common";
import { UpdateModal } from "../UpdateModal";

interface DiscountEditMenuProps {
  index: number;
}

export const DiscountEditMenu = ({
  index,
}: DiscountEditMenuProps): React.ReactElement => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        className="text-SecondaryColor relative"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <Typography className="text-SecondaryColor">
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
      <div className="absolute top-4 right-16  rounded-lg z-10">
        <div className="bg-bgShadow border-2 border-newLinear/50 z-10 rounded-xl transition-all duration-500">
          <div className="w-[107px] h-[86px] flex flex-col justify-center items-start pl-4 gap-y-3">
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
                alt="delete"
              />
              <Typography variant="bodyMedium" className="text-SecondaryColor">
                Delete
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {show ? <UpdateModal isOpen={show} setIsOpen={setShow} /> : ""}
    </>
  );
};
