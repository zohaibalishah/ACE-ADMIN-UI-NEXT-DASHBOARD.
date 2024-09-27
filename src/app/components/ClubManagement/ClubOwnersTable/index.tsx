import React from "react";
import { MImage, Typography } from "../../common";
import { clubOwnersTableData } from "@/app/utils/data";

import { clubManagementIcons } from "../../../../../public/icons/clubManagementIcons/index";
import { SingleRecordTable } from "../SingleRecordTable";

export const ClubOwnersTable = (): React.ReactElement => {
  return (
    <>
      <div>
        <section className=" w-full overflow-hidden overflow-x-scroll">
          <div className="w-[900px] md:w-[1080px] ">
            <div className="text-SecondaryColor flex items-center border-2 border-boxOutline py-3 bg-boxOutline rounded-tl-2xl rounded-tr-2xl px-2  overflow-hidden">
              <Typography className="whitespace-nowrap w-[46px]">
                S no
              </Typography>
              <div className="flex text-SecondaryColor w-full ">
                <Typography className="w-[250px] pl-8">Name</Typography>
                <Typography className="w-[190px] md:w-[272px]">
                  Email
                </Typography>
                <Typography className="w-[190px] md:w-[240px]">
                  Phone Number
                </Typography>
                <Typography className="w-[130px] md:w-[160px]">
                  Total courts
                </Typography>
                <Typography className="w-[100px] pl-4 md:pl-0">
                  Action
                </Typography>
              </div>
            </div>
            <div>
              {clubOwnersTableData.map((item, index) => (
                <div key={index}>
                  <SingleRecordTable item={item} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* pagination back next buttons  */}
        <div className="mt-6 md:mt-14">
          <div className="flex items-center justify-end gap-x-4">
            <Typography className="text-SecondaryColor">
              Showing 1-10 out of 102
            </Typography>
            <div className="flex items-center gap-x-4">
              <MImage
                src={clubManagementIcons.iconBack}
                w={30}
                h={30}
                alt="Back"
                className="cursor-pointer"
              />
              <MImage
                src={clubManagementIcons.iconNext}
                w={30}
                h={30}
                alt="Next"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
