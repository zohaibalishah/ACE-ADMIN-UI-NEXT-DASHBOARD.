'use client';

import { IAction } from '@/app/base/types';
import {
  ClubCardSection,
  ClubFilters,
  CreateOwnerModal,
  OwnerClubs,
} from '@/app/components/ClubManagement';
import {
  ActionsDropdown,
  TableWrapper,
  Typography,
} from '@/app/components/common';
import { routes } from '@/app/utils/const';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import api from '@/lib/api-client';

const clubsOwnersHead = [
  'S No',
  'Name',
  'Email',
  'Phone number',

  'Total clubs',
  'Action',
];
// 'Contract duration',
// 'Contract date',
function ClubManagement() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClubOpen, setIsClubOpen] = useState<boolean>(false);
  const router = useRouter();

  const actions: IAction[] = [
    {
      icon: <BiEditAlt />,
      title: 'Edit',
    },

    {
      icon: <AiOutlineDelete />,
      title: 'Delete',
    },
    {
      icon: <MdOutlineLibraryBooks />,
      title: 'Club',
      onClick: () => router.push(`${routes.ownersManagement}/44`),
    },
  ];

  const [data, setData] = useState([]);

  const [dashboardCount, setDashboardCount] = useState({
    newUsers: 0,
    totalBookings: 0,
    totalClubOwners: 0,
    totalClubs: 0,
    totalRevenue: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('clubOwner/list');
        if (response.data) {
          // console.log("response",response)
          setData(response.data.users);
        }
      } catch (error) {
        console.error('Error ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ClubCardSection dashboardCount={dashboardCount} />
      <ClubFilters onAdd={() => setIsOpen(true)} title="Owner's Management" />
      <TableWrapper TableHeadData={clubsOwnersHead}>
        {data &&
          data.map((td, index) => (
            <tr className="border-b border-boxOutline h-[60px]" key={index}>
              <td className="pl-2 border-r-2 border-boxOutline">
                <Typography className="text-SecondaryColor">
                  {index + 1}
                </Typography>
              </td>
              <td className="pl-4 border-boxOutline">
                <div className="flex gap-3 items-center">
                  <span className="w-9 h-9 rounded-full border border-white text-white inline-flex justify-center items-center">
                    AJ
                  </span>
                  <Typography className="text-SecondaryColor">
                    {td?.name}
                  </Typography>
                </div>
              </td>
              <td className="border-boxOutline">
                <Typography className="text-SecondaryColor">
                  {td?.email}
                </Typography>
              </td>
              <td className="border-boxOutline">
                <Typography className="text-SecondaryColor">
                  {td?.phone}
                </Typography>
              </td>
              {/* <td className="border-boxOutline">
                <Typography className="text-SecondaryColor">
                  One year
                </Typography>
              </td>
              <td className="border-boxOutline">
                <Typography className="text-SecondaryColor">
                  2024-07-31
                </Typography>
              </td> */}
              <td className="border-boxOutline">
                <Typography className="text-SecondaryColor">
                  {td?.clubCount}
                </Typography>
              </td>
              <td className="border-boxOutline pl-3">
                <ActionsDropdown actions={actions} />
              </td>
            </tr>
          ))}
      </TableWrapper>
      <CreateOwnerModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <OwnerClubs isOpen={isClubOpen} setIsOpen={setIsClubOpen} />
    </>
  );
}

export default ClubManagement;
