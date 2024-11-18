import { DropDownProfile, MImage, Typography } from "@/app/components/common";
import React, { SetStateAction } from "react";
import { icons } from "../../../../../../public/icons";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { routes } from "@/app/utils/const";
import { RxHamburgerMenu } from "react-icons/rx";
import { ProfileDropdown } from "../PorfileDropdown";
import { ClubDropdown } from "../ClupDropdown";

interface Props {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
export const TopNavbar = ({ setIsOpen }: Props): React.ReactElement => {
  return (
    <nav className="navBottom w-full h-[100px] bg-gradient-to-b from-black via-bgDark to-bgBox sticky top-0 flex items-center z-10">
      <div className="flex justify-between items-center py-3 w-full px-4 lg:px-24">
        <div className="flex items-center">
          <button
            className="text-SecondaryColor sm:mr-4 xl:mr-0 border-[1px] border-boxOutline cursor-pointer p-2 bg-boxOutline rounded-lg  text-lg sm:text-xl lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <RxHamburgerMenu />
          </button>
          <Link href={routes.admin} className="hidden sm:block">
            <MImage src={icons.ACELogo} w={76} h={32} alt="headerLogo" />
          </Link>
        </div>

        <div className="flex items-center gap-x-2 sm:gap-x-5 ">
          <div className="w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] rounded-lg bg-bgBox border-2 border-boxOutline flex justify-center items-center cursor-pointer">
            <MImage src={icons.Notification} w={24} h={24} alt="notification" />
          </div>
          <div className="text-SecondaryColor flex items-center gap-x-3 sm:gap-x-6">
            <ClubDropdown />
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};
