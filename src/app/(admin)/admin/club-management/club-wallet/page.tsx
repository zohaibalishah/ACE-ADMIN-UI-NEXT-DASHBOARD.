"use client";

import React, { useState } from "react";
import {
  ClubRequestHeader,
  ClubWalletHistory,
} from "@/app/components/ClubManagement";
import { TableWrapper, Typography } from "@/app/components/common";
import { IoAlertCircleOutline } from "react-icons/io5";

const clubsOwnersHead = [
  "S No",
  "ID",
  "Club name",
  "Address",
  "Owner name",
  "Club wallet",
];

const ClubWalletPage = () => {
  const [isView, setIsView] = useState<boolean>(false);

  return (
    <>
      <ClubRequestHeader title="Club Wallet" />
      <TableWrapper TableHeadData={clubsOwnersHead}>
        {Array.from({ length: 7 }).map((td, index) => (
          <tr className="border-b border-boxOutline h-[60px]" key={index}>
            <td className="pl-2 border-r-2 border-boxOutline">
              <Typography className="text-SecondaryColor">
                {index + 1}
              </Typography>
            </td>
            <td className="border-boxOutline pl-4">
              <Typography className="text-SecondaryColor">101</Typography>
            </td>
            <td className="border-boxOutline">
              <Typography className="text-SecondaryColor">
                Downtown Club
              </Typography>
            </td>
            <td className="border-boxOutline">
              <Typography className="text-SecondaryColor">
                Markazi Dist, Riyadh, KSA
              </Typography>
            </td>
            <td className="border-boxOutline">
              <Typography className="text-SecondaryColor">
                Najee Abid
              </Typography>
            </td>
            <td className="border-boxOutline pl-3 relative">
              <div className="flex gap-4 items-center">
                <div className="flex gap-1.5 items-center group">
                  <IoAlertCircleOutline className="text-xl text-SecondaryColor" />
                  <Typography className="text-SecondaryColor">
                    SAR 276
                  </Typography>

                  <div className="px-5 py-3 bg-boxOutline rounded-lg absolute top-full left-0 w-full max-w-[223px] hidden group-hover:block z-10">
                    <Typography
                      variant="smallRegular"
                      className="text-SecondaryColor !leading-loose"
                    >
                      Club wallet balance will be affected by match cancellation
                      money because it will be added until user use that wallet
                      money on something else
                    </Typography>
                  </div>
                </div>
                <button
                  className="w-[90px] h-[34px] rounded-xl bg-boxOutline inline-flex justify-center items-center"
                  onClick={() => {
                    setIsView(true);
                  }}
                >
                  <Typography
                    variant="smallRegular"
                    className="text-SecondaryColor"
                  >
                    History
                  </Typography>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </TableWrapper>
      <ClubWalletHistory isOpen={isView} setIsOpen={setIsView} />
    </>
  );
};

export default ClubWalletPage;
