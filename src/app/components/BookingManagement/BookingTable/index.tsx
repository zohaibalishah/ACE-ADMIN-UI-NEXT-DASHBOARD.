import { BsThreeDots } from 'react-icons/bs';
import { ActionsDropdown, TableWrapper, Typography } from '../../common';
import { LuEye } from 'react-icons/lu';
import { IAction } from '@/app/base/types';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { IBooking } from '@/lib/interfaces';

interface BookingTableProps {
  data: IBooking[];
}

export const BookingTable: React.FC<BookingTableProps> = ({ data }) => {
  const actions: IAction[] = [
    {
      icon: <LuEye />,
      title: 'View',
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

  const statusColors: Record<string, string> = {
    confirmed: '#93B10B',
    cancel: '#DC2626',
    refund: '#10B981',
  };

  return (
    <>
      <TableWrapper
        TableHeadData={[
          'S No',
          'Name',
          'Club Name',
          'Sport',
          'Booking Date',
          'Booking Time',
          'Status',
          // 'Location',
          'Actions',
        ]}
      >
        {data.map((booking, index) => (
          <tr key={index} className="border-2 border-boxOutline text-nowrap">
            <td className="h-[40px] sm:h-[60px] border-r-[1px] border-boxOutline pl-3 ">
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {index + 1}
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <div className="flex items-center gap-x-3">
                <div className="w-[28px] h-[28.8px] sm:w-[36px] sm:h-[36.8px] rounded-full border-2 border-SecondaryColor flex items-center justify-center text-secondary font-normal text-sm">
                  {booking?.user?.name.charAt(0) || ''}
                </div>
                <Typography
                  variant="bodyRegular"
                  className="text-SecondaryColor"
                >
                  {booking?.user?.name || ''}
                </Typography>
              </div>
            </td>
            <td className="px-3 text-nowrap">
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {booking?.club.name}
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {booking?.court?.sport}
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {booking.bookingDate}
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {new Date(`1970-01-01T${booking.startTime}`).toLocaleTimeString(
                  [],
                  { hour: '2-digit', minute: '2-digit', hour12: true }
                )}{' '}
                -{' '}
                {new Date(`1970-01-01T${booking.endTime}`).toLocaleTimeString(
                  [],
                  { hour: '2-digit', minute: '2-digit', hour12: true }
                )}
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <div
                className="px-5 py-1 rounded-xl bg-PrimaryColor inline-flex justify-center items-center"
                style={{
                  backgroundColor: statusColors[booking.status],
                }}
              >
                <Typography
                  variant="bodyMedium"
                  className="text-SecondaryColor"
                >
                  {booking.status}
                </Typography>
              </div>
            </td>
            {/* <td className="px-3 text-nowrap ">
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {booking.club.address}
              </Typography>
            </td> */}
            <td className="border-boxOutline pl-3 relative">
              <ActionsDropdown actions={actions} />
            </td>
          </tr>
        ))}
      </TableWrapper>
    </>
  );
};
