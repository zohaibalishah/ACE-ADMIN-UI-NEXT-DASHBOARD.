import React from "react";
import { Typography } from "../../common";
import { TotalClubsData } from "@/app/utils/data";
import { TotalClubsSingleRecord } from "../TotalClubsSingleRecord";

export const TotalClubsTable = (): React.ReactElement => {
  return (
    <div className="w-full overflow-hidden overflow-x-scroll">
      <section className="min-w-[800px] w-full ">
        <div className="text-SecondaryColor bg-boxOutline border-2 border-boxOutline rounded-tr-2xl rounded-tl-2xl p-3 w-full flex items-center l">
          <Typography>S no</Typography>
          <Typography className="pl-7 pr-4">ID</Typography>
          <Typography className="pl-6 pr-12">Club name</Typography>
          <Typography className="pl-14 pr-24">Address</Typography>
          <Typography className="pl-28 pr-10">Owner name</Typography>
          <Typography className="pl-8 pr-4">Wallet balance</Typography>
          <Typography className="pl-6 pr-8">Status</Typography>
          <Typography className="pl-14">Action</Typography>
        </div>

        <div>
          {TotalClubsData.map((record, index) => (
            <div key={index}>
              <TotalClubsSingleRecord record={record} index={index} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
