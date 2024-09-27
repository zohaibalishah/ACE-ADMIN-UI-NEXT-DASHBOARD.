import { Typography } from "@/app/components/common";
import React from "react";

export const ActivityTracking = (): React.ReactElement => {
  return (
    <section>
      <Typography variant="h5Bold" className="text-SecondaryColor pb-3">
        Activity tracking
      </Typography>
      <div className="w-full overflow-hidden overflow-x-scroll">
        <div className="w-[1080px]">
          <div className="h-[46px] bg-boxOutline rounded-tl-2xl rounded-tr-2xl text-SecondaryColor flex items-center px-2">
            <Typography className="w-[58px] ">S no</Typography>
            <Typography className="w-[280px] pl-3">
              Number of App Uses
            </Typography>
            <Typography className="w-[330px]">
              Total Time Spent on App
            </Typography>
            <Typography className="w-[412px]">Last active</Typography>
          </div>
          <div>
            <div className="h-[60px] border-[1px] border-boxOutline  text-SecondaryColor flex items-center px-2">
              <Typography className="w-[58px] border-r-2 h-full flex items-center  border-boxOutline">
                1
              </Typography>
              <Typography className="w-[280px] pl-3">150 times</Typography>
              <Typography className="w-[330px]">35 hours</Typography>
              <Typography className="w-[412px]">2024-07-14 14:30:00</Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
