"use client";
import React, { useState } from "react";
import { MImage } from "../MImage";
import { clubManagementIcons } from "../../../../../public/icons/clubManagementIcons";
import { Typography } from "../Typography";
import Link from "next/link";

type ILink = {
  link?: string;
};

export const DropDownMenu = ({ link }: ILink): React.ReactElement => {
  return (
    <div className=" z-10 bg-bgBox border-2 border-boxOutline w-[107px] h-[122px] rounded-lg flex flex-col items-start justify-center gap-y-2 pl-3 ">
      <div className="flex items-center gap-x-2">
        <Link ref={link} className="flex items-center gap-x-2" href={""}>
          <MImage
            src={clubManagementIcons.iconPreview}
            w={21}
            h={21}
            alt="preview"
          />
          <Typography variant="bodyMedium" className="text-SecondaryColor">
            View
          </Typography>
        </Link>
      </div>

      <div className="flex items-center gap-x-2">
        <MImage
          src={clubManagementIcons.iconEdit}
          w={21}
          h={21}
          alt="preview"
        />
        <button>
          <Typography variant="bodyMedium" className="text-SecondaryColor">
            Edit
          </Typography>
        </button>
      </div>
      <div className="flex items-center gap-x-2">
        <MImage
          src={clubManagementIcons.iconDelete}
          w={21}
          h={21}
          alt="preview"
        />
        <Typography variant="bodyMedium" className="text-SecondaryColor">
          Delete
        </Typography>
      </div>
    </div>
  );
};
