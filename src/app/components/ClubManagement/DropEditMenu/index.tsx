"use client";
import { useState } from "react";
import { clubManagementIcons } from "../../../../../public/icons/clubManagementIcons";
import { MImage, Typography } from "../../common";
import { EditUserModal } from "../../UserManagement/UserDetails";

export const DropEditMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="absolute top-4 right-0 bg-bgShadow  border-2 border-newLinear/50 z-10 rounded-xl transition-all duration-500 ">
      <div className="w-[107px] h-[86px] flex flex-col justify-center items-start pl-4 gap-y-3">
        <button
          className="flex items-start justify-center gap-x-3"
          onClick={() => setIsOpen(true)}
        >
          <MImage src={clubManagementIcons.iconEdit} w={21} h={21} alt="edit" />
          <Typography variant="bodyMedium">Edit</Typography>
        </button>
        {isOpen ? <EditUserModal /> : ""}
        <div className="flex items-center justify-center gap-x-3">
          <MImage
            src={clubManagementIcons.iconDelete}
            w={21}
            h={21}
            alt="edit"
          />
          <Typography variant="bodyMedium">Delete</Typography>
        </div>
      </div>
    </div>
  );
};
