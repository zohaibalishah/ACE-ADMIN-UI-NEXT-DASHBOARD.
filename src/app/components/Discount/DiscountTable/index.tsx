'use client';

import React from 'react';
import { ActionsDropdown, TableWrapper, Typography } from '../../common';
import { IAction } from '@/app/base/types';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { IDiscount } from '@/lib/interfaces';
import moment from 'moment';

interface DiscountTableProps {
  onHandleEdit: (data: IDiscount) => void;
  data: IDiscount[];
  onDelete: (id: number) => void;
}

export const DiscountTable: React.FC<DiscountTableProps> = ({
  onHandleEdit,
  data,
  onDelete,
}) => {
  const actions: IAction[] = [
    {
      icon: <BiEditAlt />,
      title: 'Edit',
    },
    {
      icon: <AiOutlineDelete />,
      title: 'Delete',
    },
  ];

  return (
    <>
      <TableWrapper
        TableHeadData={[
          'S no',
          'Code Title',
          'Discount Usage',
          'Discount Type',
          'Discount Value',
          'Validity Period',
          'Status',
          'Action',
        ]}
      >
        {data.map((discount, index) => {
          return (
            <tr key={index} className="border-2 border-boxOutline">
              <td className="border-boxOutline border-r-2 h-[60px] pl-2">
                <Typography className="text-SecondaryColor">
                  {index + 1}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor pl-2">
                  {discount.code}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor pl-2">
                  {discount?.usageType.charAt(0).toUpperCase() +
                    discount?.usageType.slice(1)}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor">
                  {discount?.discountType}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor">
                  {discount.discountType === 'percent'
                    ? `${discount.discountValue}%`
                    : discount.discountValue}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor">
                  {`${moment(discount.fromDate).format(
                    'MM-DD-YYYY'
                  )} - ${moment(discount.toDate).format('MM-DD-YYYY')}`}
                </Typography>
              </td>
              <td>
                <div
                  className={`px-5 h-[36px] rounded-xl inline-flex justify-center items-center ${
                    discount.status === 'Expired' ? 'bg-[#E4626F]' : 'bg-boxOutline'
                  }`}
                >
                  <Typography
                    variant="bodyMedium"
                    className="text-SecondaryColor"
                  >
                    {discount.status}
                  </Typography>
                </div>
              </td>
              <td className="border-boxOutline border-l-2 h-full pl-4">
                <ActionsDropdown
                  actions={actions.map((action) => ({
                    ...action,
                    onClick:
                      action.title === 'Delete'
                        ? () => onDelete(discount?.id)
                        : action.title === 'Edit'
                        ? () => onHandleEdit(discount)
                        : undefined,
                  }))}
                />
              </td>
            </tr>
          );
        })}
      </TableWrapper>
    </>
  );
};
