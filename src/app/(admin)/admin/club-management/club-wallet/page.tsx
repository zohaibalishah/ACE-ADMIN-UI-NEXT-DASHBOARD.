"use client";
import {
  ClubCardSection,
  ClubFilters,
  ClubRequestHeader,
  ClubWalletHistory,
} from "@/app/components/ClubManagement";
import { TableWrapper, Typography } from "@/app/components/common";
import { IoAlertCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { routes } from "@/app/utils/const";
import React, { useState, useEffect } from 'react';
import api from '@/lib/api-client';

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
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('clubs/wallet/list');
        if (response.data) {
          setData(response.data.wallets);
        }
      } catch (error) {
        console.error('Error ', error);
      }
    };

    fetchData();
  }, []);

  const [dashboardCount, setDashboardCount] = useState({
    totalClubs: 0,
    newClubs: 0,
    totalCourts: 0,
  });


  useEffect(() => {
    const fetchDataCount = async () => {
      try {
        const response = await api.get('dashbaord/club-management');
        if (response.data) {
          setDashboardCount(response.data);
        }
      } catch (error) {
        console.error('Error ', error);
      }
    };

    fetchDataCount();
  }, []);

  return (
    <>
      <ClubCardSection dashboardCount={dashboardCount}/>
      {/* <ClubFilters title="Club Wallet" showButton={false} /> */}
      <TableWrapper TableHeadData={clubsOwnersHead}>
        {data&& data.map((td, index) => (
          <tr className="border-b border-boxOutline h-[60px]" key={index}>
            <td className="pl-2 border-r-2 border-boxOutline">
              <Typography className="text-SecondaryColor">
                {index + 1}
              </Typography>
            </td>
            <td className="border-boxOutline pl-4">
              <Typography className="text-SecondaryColor">{td.id}</Typography>
            </td>
            <td className="border-boxOutline">
              <Typography className="text-SecondaryColor">
                {td.club.name}
              </Typography>
            </td>
            <td className="border-boxOutline">
              <Typography className="text-SecondaryColor">
              {td.club.address}
              </Typography>
            </td>
            <td className="border-boxOutline">
              <Typography className="text-SecondaryColor">
              {td.club?.owner?.name  || ''}
              </Typography>
            </td>
            <td className="border-boxOutline pl-3 relative">
              <div className="flex gap-4 items-center">
                <div className="flex gap-1.5 items-center group">
                  <IoAlertCircleOutline className="text-xl text-SecondaryColor" />
                  <Typography className="text-SecondaryColor">
                    SAR   {td.balance}
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
                <Link href={`${routes.clubWallet}/33`}>
                  <button className="w-[90px] h-[34px] rounded-xl bg-boxOutline inline-flex justify-center items-center">
                    <Typography
                      variant="smallRegular"
                      className="text-SecondaryColor"
                    >
                      History
                    </Typography>
                  </button>
                </Link>
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
