'use client';
import {
  ClubCardSection,
  ClubFilters,
  ClubRequestHeader,
  ReservationDetails,
} from '@/app/components/ClubManagement';
import {
  TableWrapper,
  ActionsDropdown,
  Typography,
} from '@/app/components/common';
import React, { useState, useEffect } from 'react';
import api from '@/lib/api-client';
import { IAction } from '@/app/base/types';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';
import { LuCalendarDays } from 'react-icons/lu';
import { MdOutlineLibraryBooks } from 'react-icons/md';

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

const ClubRequestsPage: React.FC = () => {
  const [isView, setIsView] = useState<boolean>(false);
  const [data, setData] = useState<IClub[]>([]);
  const [clubInfo, setClubInfo] = useState<IClub | null>(null);
  const [clubId, setClubId] = useState<number | null>(null);

  const updateStatus = async (clubId: number, newStatus: string) => {
    try {
      const response = await api.post(`clubs/update-status`, {
        status: newStatus,
        clubId:clubId,
      });
      if (response.data.status == 1) {
        console.log('Club status updated successfully:', response.data.message);
        setData((prevData) =>
          prevData.map((club) =>
            club.id === clubId ? { ...club, status: newStatus } : club
          )
        );
      }
    } catch (error) {
      console.error('Error updating club status:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('clubs/list-requested');
        if (response.data) {
          setData(response.data.clubs);
        }
      } catch (error) {
        console.error('Error fetching clubs:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataById = async (clubId: number) => {
      try {
        const response = await api.get(`clubs/detail/${clubId}`);
        if (response.data) {
          setClubInfo(response.data.club);
        }
      } catch (error) {
        console.error('Error fetching club details:', error);
      }
    };

    if (clubId) {
      fetchDataById(clubId);
    }
  }, [clubId]);

  const handleClosed = () => {
    setIsView(false);
    setClubInfo(null);
  };

  return (
    <>
      {/* <ClubCardSection dashboardCount={dashboardCount}/> */}
      {/* <ClubRequestHeader /> */}
      <ClubFilters title="Club Request" showButton={false} />
      <TableWrapper
        TableHeadData={[
          'S No',
          'ID',
          'Club name',
          'Address',
          'Owner Name',
          'Status',
          'Action',
        ]}
      >
        {data &&
          data.map((club, index) => (
            <tr className="border-b border-boxOutline h-[60px]" key={index}>
              <td className="px-3 text-nowrap border-r-2 border-boxOutline">
                <Typography className="text-SecondaryColor">
                  {index + 1}
                </Typography>
              </td>
              <td className="px-3 text-nowrap">
                <Typography className="text-SecondaryColor">
                  {club.id}
                </Typography>
              </td>
              <td className="px-3 text-nowrap">
                <Typography className="text-SecondaryColor">
                  {club?.name}
                </Typography>
              </td>
              <td className="px-3 text-nowrap">
                <Typography className="text-SecondaryColor">
                  {club?.address}
                </Typography>
              </td>
              <td className="px-3 text-nowrap">
                <Typography className="text-SecondaryColor">
                  {club?.owner?.name}
                </Typography>
              </td>
              <td className="px-3 text-nowrap">
                <Typography className="text-SecondaryColor">
                  {club.status}
                </Typography>
              </td>
              <td className="border-boxOutline pl-3">
                <button
                  className="px-5 py-1 rounded-xl bg-PrimaryColor inline-flex justify-center items-center"
                  onClick={() => {
                    setIsView(true);
                    setClubId(club.id);
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

      {clubInfo && (
        <ReservationDetails
          isOpen={isView}
          handleClosed={handleClosed}
          isRequest={true}
          clubInfo={clubInfo}
          updateStatus={updateStatus}
        />
      )}
    </>
  );
};

export default ClubRequestsPage;
