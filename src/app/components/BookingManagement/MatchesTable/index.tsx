'use client';
import { ActionsDropdown, TableWrapper, Typography } from '../../common';
import { IAction } from '@/app/base/types';
import { LuEye } from 'react-icons/lu';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { MatchDetails } from './MatchDetails';
import { useState, FC } from 'react';
import moment from 'moment';
import { IMatch } from '@/lib/interfaces';


interface MatchesTableProps {
  data: IMatch[];
}

export const MatchesTable: FC<MatchesTableProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const actions: IAction[] = [
    {
      icon: <LuEye />,
      title: 'View',
      onClick: () => setIsOpen(true),
    },
    {
      icon: <BiEditAlt />,
      title: 'Edit',
    },
    {
      icon: <AiOutlineDelete />,
      title: 'Cancel',
    },
  ];
  return (
    <>
      <TableWrapper
        TableHeadData={[
          'S no',
          'Name',
          'Club Name',
          'Matches Date',
          'Status',
          'Location',
          'Action',
        ]}
      >
        {data && data.map((match, index) => (
          <tr
            key={index}
            className="border-2 border-boxOutline text-nowrap px-3"
          >
            <td className="border-boxOutline border-r-[1px] h-[40px] sm:h-[60px]">
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {index + 1}
              </Typography>
            </td>
            <td className="text-nowrap px-3">
              <Typography
                variant="bodyRegular"
                className="text-SecondaryColor pl-3"
              >
                {match.creator.name}
              </Typography>
            </td>
            <td className="text-nowrap px-3">
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {match.club.name}
              </Typography>
            </td>
            <td className="text-nowrap px-3">
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {moment(match.date).format("MM-DD-YYYY")} | {moment(match.startTime, "HH:mm").format("hh:mm A")} - {moment(match.endTime, "HH:mm").format("hh:mm A")}
              </Typography>
            </td>
            <td className="text-nowrap px-3">
              <div className="bg-PrimaryColor justify-center rounded-xl inline-flex items-center px-5 py-1">
                <Typography
                  variant="bodyMedium"
                  className="text-SecondaryColor"
                >
                 {match.participants.length} / {match.maxParticipants} Confirmed
                </Typography>
              </div>
            </td>
            <td className="text-nowrap px-3">
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {match.club.address}
              </Typography>
            </td>
            <td className="border-boxOutline text-nowrap pl-3 px-3 relative">
              <ActionsDropdown actions={actions} />
            </td>
          </tr>
        ))}
      </TableWrapper>
      <MatchDetails isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
