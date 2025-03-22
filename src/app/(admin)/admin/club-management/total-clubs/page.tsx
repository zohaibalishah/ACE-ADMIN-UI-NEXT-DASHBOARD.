"use client";
import api from '@/lib/api-client';
import { IAction } from "@/app/base/types";
import {
  ClubCardSection,
  ClubDetails,
  CreateClubModal,
  ReservationDetails,
} from "@/app/components/ClubManagement";
import {
  ActionsDropdown,
  TableWrapper,
  Typography,
} from "@/app/components/common";
import React, { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";

interface Country {
  id: number;
  title: string;
}

interface City {
  id: number;
  title: string;
}

interface IClub {
  id: number;
  name: string;
  address: string;
  owner?: {
    name: string;
  };
  status: string;
  wallet: {
    balance: number;
  };
  street: string;
  zip: string;
  country: Country;
  city: City;
  facilities: Array<{ title: string; image: string }>;
  openingHours: Array<{
    day: string;
    openingTime: string;
    closingTime: string;
  }>;
}

const clubsOwnersHead: string[] = [
  "S No",
  "ID",
  "Club name",
  "Address",
  "Owner name",
  "Wallet obligation",
  "Action",
];

const TotalClubsHome: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isView, setIsView] = useState<boolean>(false);
  const [isOpenRes, setIsOpenRes] = useState<boolean>(false);
  const [data, setData] = useState<IClub[]>([]);
  const [clubInfo, setClubInfo] = useState<IClub | null>(null);
  
  const handleDelete = async (id: number): Promise<void> => {
    try {
      const response = await api.delete(`clubs/delete/${id}`);
      if (response.data.status === 1) {
        console.log('Club deleted successfully:', response.data.status);
        setData((prevData) => prevData.filter((club) => club.id !== id));
      }
    } catch (error) {
      console.error('Error deleting club:', error);
    }
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await api.get('clubs/list?status=approved');
        if (response.data) {
          setData(response.data.clubs);
        }
      } catch (error) {
        console.error('Error fetching clubs:', error);
      }
    };

    fetchData();
  }, []);


  
  const actions = (id: number): IAction[] => [
    {
      icon: <FiEye />,
      title: "View",
      onClick: () => setIsView(true),
    },
    {
      icon: <LuCalendarDays />,
      title: "Reservation",
      onClick: () => setIsOpenRes(true),
    },
    {
      icon: <BiEditAlt />,
      title: "Edit",
    },
    {
      icon: <AiOutlineDelete />,
      title: "Delete",
      onClick: () => handleDelete(id),
    },
  ];

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
      <ClubCardSection dashboardCount={dashboardCount} />
        {/* <ClubFilters
        onAdd={() => setIsOpen(true)}
        title="Clubs Management"
        showButton={false}
      /> */}
      <TableWrapper TableHeadData={clubsOwnersHead}>
        {data && data.map((club, index) => (
          <tr className="border-b border-boxOutline h-[60px]" key={index}>
            <td className="px-3 text-nowrap border-r-2 border-boxOutline">
              <Typography className="text-SecondaryColor">
                {index + 1}
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <Typography className="text-SecondaryColor">{club.id}</Typography>
            </td>
            <td className="px-3 text-nowrap">
              <Typography className="text-SecondaryColor">
                {club.name}
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <Typography className="text-SecondaryColor">
                {club.address}
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <Typography className="text-SecondaryColor">
                {club?.owner?.name}
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <Typography className="text-SecondaryColor">
                {club?.wallet?.balance || 0}
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <ActionsDropdown actions={actions(club.id)} />
            </td>
          </tr>
        ))}
      </TableWrapper>
      <CreateClubModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <ClubDetails isOpen={isView} setIsOpen={setIsView} />
      <ReservationDetails 
        clubInfo={clubInfo as IClub}
        isOpen={isOpenRes} handleClosed={setIsOpenRes} />
    </>
  );
};

export default TotalClubsHome;
