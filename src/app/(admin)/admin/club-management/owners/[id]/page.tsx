'use client';

import { IAction } from '@/app/base/types';
import {
  ClubDetails,
  ClubFilters,
  CreateClubModal,
  ReservationDetails,
  UpdateContract,
} from '@/app/components/ClubManagement';
import {
  ActionsDropdown,
  TableWrapper,
  ToggleButton,
  Typography,
} from '@/app/components/common';
import { useRouter, useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import api from '@/lib/api-client';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';
import { IoChevronBackOutline } from 'react-icons/io5';
import { LuCalendarDays } from 'react-icons/lu';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import toast from 'react-hot-toast';
import { IClub, IClubInfo } from '@/lib/interfaces';

const clubsOwnersHead: string[] = [
  'S No',
  'Club name',
  'Contract duration',
  'Contract date',
  'Address',
  'Action',
];

interface User {
  name: string;
}

const OwnerClubsPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isView, setIsView] = useState<boolean>(false);
  const [isContractOpen, setIsContractOpen] = useState<boolean>(false);
  const [isOpenRes, setIsOpenRes] = useState<boolean>(false);
  const [clubInfo, setClubInfo] = useState<IClubInfo | undefined>(undefined);

  const router = useRouter();
  const { id } = useParams(); // Get id from params
  const [data, setData] = useState<IClub[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const actions = (club: IClubInfo): IAction[] => [
    {
      icon: <FiEye />,
      title: 'View',
      onClick: () => setIsView(true),
    },
    {
      icon: <MdOutlineLibraryBooks />,
      title: 'Contract',
      onClick: () => setIsContractOpen(true),
    },
    {
      icon: <LuCalendarDays />,
      title: 'Reservation',
      onClick: () => {
        setIsOpenRes(true);
        setClubInfo(club);
      },
    },
    {
      icon: <BiEditAlt />,
      title: 'Edit',
    },
    {
      icon: <AiOutlineDelete />,
      title: 'Delete',
      onClick: () => handleDelete(club.id),
    },
  ];

  useEffect(() => {
    const fetchDataCount = async (userId: string) => {
      try {
        const response = await api.get(`clubs/list-by-userId/${userId}`);
        if (response.data) {
          setData(response.data.clubs);
          setUser(response.data.user);
        }
      } catch (error) {
        console.error('Error ', error);
      }
    };

    if (typeof id === 'string') {
      fetchDataCount(id);
    }
  }, [id]);

  const handleDelete = async (clubId: number) => {
    try {
      const response = await api.delete(`clubs/delete/${clubId}`);
      if (response.data.status === 1) {
        toast.success('Club deleted successfully');
        setData((prevData) => prevData.filter((c) => c.id !== clubId));
      }
    } catch (error: any) {
      toast.error(error?.message || 'An error occurred');
    }
  };

  const handleClosed = () => {
    setClubInfo(undefined);
    setIsOpenRes(false);
  };

  return (
    <section>
      <button
        className="flex gap-1 items-center"
        onClick={() => {
          router.back();
        }}
      >
        <IoChevronBackOutline className="text-SecondaryColor text-xl mt-0.5" />
        <Typography className="text-SecondaryColor">Back</Typography>
      </button>
      <Typography variant="h5Light" className="text-SecondaryColor mt-6">
        {user?.name}
      </Typography>
      <TableWrapper TableHeadData={clubsOwnersHead}>
        {data &&
          data.map((td, index) => (
            <tr className="border-b border-boxOutline h-[60px]" key={index}>
              <td className="px-3 text-nowrap border-r-2 border-boxOutline">
                <Typography className="text-SecondaryColor">
                  {index + 1}
                </Typography>
              </td>
              <td className="border-boxOutline px-3 text-nowrap">
                <Typography className="text-SecondaryColor">
                  {td?.name}
                </Typography>
              </td>
              <td className="border-boxOutline px-3 text-nowrap">
                <Typography className="text-SecondaryColor">-</Typography>
              </td>
              <td className="border-boxOutline px-3 text-nowrap">
                <Typography className="text-SecondaryColor">-</Typography>
              </td>
              <td className="border-boxOutline px-3 text-nowrap">
                <Typography className="text-SecondaryColor">
                  {td.address}
                </Typography>
              </td>
              <td className="border-boxOutline px-3 text-nowrap">
                <ActionsDropdown actions={actions(td)} />
              </td>
            </tr>
          ))}
      </TableWrapper>
      <CreateClubModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <ClubDetails isOpen={isView} setIsOpen={setIsView} />
      <UpdateContract isOpen={isContractOpen} setIsOpen={setIsContractOpen} />
      <ReservationDetails
        clubInfo={clubInfo}
        isOpen={isOpenRes}
        handleClosed={handleClosed}
      />
    </section>
  );
};

export default OwnerClubsPage;
