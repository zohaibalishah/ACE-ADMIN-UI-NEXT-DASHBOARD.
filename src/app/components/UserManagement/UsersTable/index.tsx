import React from "react";
import { Typography } from "../../common";
import { SingleUserRecord } from "../SingleUserRecod";
import { UserTableData } from "@/app/utils/data";

export const UsersTable = (): React.ReactElement => {
  return (
    <>
      <div className="w-full overflow-hidden overflow-x-scroll">
        <div className="w-[1080px]">
          <div className="text-white flex text-start border-2 border-boxOutline rounded-tl-2xl rounded-tr-2xl bg-bgShadow p-3">
            <Typography variant="bodyRegular" className="w-[50px] ">
              S no
            </Typography>

            <Typography className="w-[160px]">Name</Typography>

            <Typography className="w-[220px]">Email</Typography>

            <Typography className="w-[180px]">Phone number</Typography>

            <Typography className="w-[130px]">Wallet balance</Typography>

            <Typography className="w-[90px]">Gender</Typography>

            <Typography className="w-[132px]">Location</Typography>

            <Typography className="w-[100px] pl-10">Action</Typography>
          </div>
          <div>
            {UserTableData.map((person, index) => (
              <div key={index}>
                <SingleUserRecord person={person} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
