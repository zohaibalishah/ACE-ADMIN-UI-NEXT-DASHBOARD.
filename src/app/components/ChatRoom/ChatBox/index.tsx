import React from "react";
import { SingleChatAction } from "./SingleChatAction";
import { MImage, Typography } from "../../common";
import { mImage } from "../../../../../public/images";
import { chatRoomData } from "@/app/utils/data";
import { icons } from "../../../../../public/icons";

export const ChatBox = ({
  hideChat,
}: {
  hideChat: () => void;
}): React.ReactElement => {
  return (
    <div>
      <SingleChatAction hideChat={hideChat} />
      <div className="bg-bgShadow rounded-xl lg:p-3 mt-3 h-[90vh] md:h-[65vh] overflow-y-auto">
        <div className="flex justify-center py-3">
          <div className="w-[70px] h-[36px] bg-bgBox rounded-xl flex items-center justify-center">
            <Typography className="text-SecondaryColor">Today</Typography>
          </div>
        </div>
        {chatRoomData.map((data, index) => (
          <div key={index}>
            {/* Check if msgSent exists and render it */}
            {data.msgSent && (
              <div>
                <li className="flex gap-x-2 justify-end list-none p-2 ">
                  <div
                    className={`flex bg-bgBox border-2 border-boxOutline rounded-xl p-3 ${data.className}`}
                  >
                    <Typography className="text-SecondaryColor">
                      {data.msgSent}
                    </Typography>
                  </div>
                  <div className="w-[26px] h-[26px] rounded-full bg-gray-400 flex items-center justify-center">
                    <Typography className="text-secondary">I</Typography>
                  </div>
                </li>
                <div className="flex justify-end pr-12">
                  <div className="flex items-center gap-x-2">
                    <MImage
                      src={icons.msgsent}
                      w={12}
                      h={12}
                      alt="check-check"
                    />
                    <Typography
                      variant="smallRegular"
                      className="text-tertiary"
                    >
                      Sent
                    </Typography>
                  </div>
                </div>
              </div>
            )}

            {/* Check if msgReceived exists and render it */}
            {data.msgReceived && (
              <li className={`flex gap-x-2 list-none p-2 `}>
                {data.icon && (
                  <div>
                    <MImage src={data.icon} w={26} h={26} alt="icon" />
                  </div>
                )}
                <div
                  className={`flex bg-bgBox p-3 border-2 border-boxOutline rounded-xl ${data.className}`}
                >
                  <Typography className="text-SecondaryColor">
                    {data.msgReceived}
                  </Typography>
                </div>
              </li>
            )}
          </div>
        ))}
        <div className="flex justify-end items-end gap-x-2 p-2">
          <div>
            <MImage src={mImage.chatBoximg} w={199} h={193} alt="img" />

            <div className="flex items-center justify-end gap-x-2 py-1">
              <MImage src={icons.msgsent} w={12} h={12} alt="check-check" />
              <Typography variant="smallRegular" className="text-tertiary">
                Sent
              </Typography>
            </div>
          </div>
          <div className="w-[26px] h-[26px] rounded-full bg-gray-400 flex items-center justify-center">
            <Typography className="text-secondary">I</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
