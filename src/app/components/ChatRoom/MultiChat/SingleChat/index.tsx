import { MImage, Typography } from "@/app/components/common";
import React from "react";
import { mImage } from "../../../../../../public/images";
import { icons } from "../../../../../../public/icons";

export const SingleChat = ({
  openChat,
}: {
  openChat: () => void;
}): React.ReactElement => {
  return (
    <div
      className="flex items-center justify-between bg-bgBox border-[1px] border-boxOutline rounded-xl  p-2 h-[46px] sm:h-[66px] cursor-pointer"
      onClick={openChat}
    >
      <div className="flex items-center gap-x-2">
        <MImage
          src={mImage.avatar1}
          w={46}
          h={46}
          alt="avatar1"
          className="w-[32px] h-[32px] sm:w-[46px] sm:h-[46px]"
        />
        <Typography variant="bodyMedium" className="text-SecondaryColor">
          Lilly Palker
        </Typography>
      </div>
      <div>
        <MImage
          src={icons.chatEllipsi}
          w={28}
          h={28}
          alt="chatEllipsi"
          className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px]"
        />
      </div>
      <div className="flex items-center gap-x-2">
        <MImage
          src={mImage.avatar2}
          w={46}
          h={46}
          alt="avatar2"
          className="w-[32px] h-[32px] sm:w-[46px] sm:h-[46px]"
        />
        <Typography variant="bodyMedium" className="text-SecondaryColor">
          Matto keller
        </Typography>
      </div>
    </div>
  );
};
