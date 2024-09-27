"use client";
import React, { useState } from "react";
import { PrimaryButton, Typography } from "../../common";
import { TotalClubsSingleRecord } from "../TotalClubsSingleRecord";
import { TotalClubsData } from "@/app/utils/data";

export const AddNewClub = (): React.ReactElement => {
  //   const [club, setClub] = useState({
  //     id: "",
  //     clubName: "",
  //     address: "",
  //     ownerName: "",
  //     walletBalance: "",
  //   });

  //   const handleSubmit = (e: { preventDefault: () => void }) => {
  //     e.preventDefault();
  //     console.log("club details...", club);
  //   };
  return (
    <div className="py-5 w-full overflow-hidden overflow-x-scroll">
      <div className="min-w-[800px] w-full">
        <div className=" text-SecondaryColor bg-boxOutline border-2 border-boxOutline rounded-tr-2xl rounded-tl-2xl p-3 flex items-center">
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

        <div className="flex justify-end py-3">
          <PrimaryButton title="Add" className="!w-[100px]" />
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------//
{
  /* <div className="">
<div className="text-SecondaryColor flex items-center justify-between w-full border-2 border-boxOutline py-3 px-4">
  <input
    type="text"
    name="Id"
    className="bg-transparent"
    onChange={(event) => setClub({ ...club, id: event?.target?.value })}
  />
  <input
    type="text"
    name="ClubName"
    className="bg-transparent"
    onChange={(event) =>
      setClub({ ...club, clubName: event?.target?.value })
    }
  />
  <input
    type="text"
    name="Address"
    className="bg-transparent"
    onChange={(event) =>
      setClub({ ...club, address: event?.target?.value })
    }
  />
  <input
    type="text"
    name="OwnerName"
    className="mr-4 bg-transparent"
    onChange={(event) =>
      setClub({ ...club, ownerName: event?.target?.value })
    }
  />
  <input
    type="text"
    name="WalletBalance"
    className="ml-10 bg-transparent"
    onChange={(event) =>
      setClub({ ...club, walletBalance: event?.target?.value })
    }
  />
</div>
</div> */
}
