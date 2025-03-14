"use client";

import {
  ClubCardSection,
  ClubFilters,
  ClubRequestHeader,
  ReservationDetails,
} from "@/app/components/ClubManagement";
import { TableWrapper, Typography } from "@/app/components/common";
import React, { useState } from "react";

const clubsOwnersHead = [
  "S No",
  "ID",
  "Club name",
  "Address",
  "Owner name",
  "Action",
];

const ClubRequestsPage = () => {
  const [isView, setIsView] = useState<boolean>(false);
  const [dashboardCount, setDashboardCount] = useState({
    newUsers: 0,
    totalBookings: 0,
    totalClubOwners: 0,
    totalClubs: 0,
    totalRevenue: 0,
    totalUsers: 0,
  });
  return (
    <>
      <ClubCardSection dashboardCount={dashboardCount}/>
      {/* <ClubRequestHeader /> */}
      <ClubFilters title="Club Request" showButton={false} />
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
            <td className="border-boxOutline pl-3">
              <button
                className="px-5 py-1 rounded-xl bg-PrimaryColor inline-flex justify-center items-center"
                onClick={() => {
                  setIsView(true);
                }}
              >
                <Typography
                  variant="bodyMedium"
                  className="text-SecondaryColor"
                >
                  Review
                </Typography>
              </button>
            </td>
          </tr>
        ))}
      </TableWrapper>
      <ReservationDetails
        isOpen={isView}
        setIsOpen={setIsView}
        isRequest={true}
      />
    </>
  );
};

export default ClubRequestsPage;
