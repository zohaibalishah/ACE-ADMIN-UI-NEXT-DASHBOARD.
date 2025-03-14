'use client';

import { IAction } from '@/app/base/types';
import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { LuEye } from 'react-icons/lu';
import { BiEditAlt } from 'react-icons/bi';
import { UserSearchBar } from '../UserSearchBar';
import { ActionsDropdown, TableWrapper, Typography } from '../../common';
import { EditUser } from '../EditUser';
import { routes } from '@/app/utils/const';
import { useRouter } from 'next/navigation';
import api from '@/lib/api-client';

const tableHead = [
  'S no',
  'Name',
  'Email',
  'Phone number',
  'Wallet balance',
  'Gender',
  'Location',
  'Action',
];

export const UsersTable = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const actions: IAction[] = [
    {
      icon: <LuEye />,
      title: 'View',
      onClick: () => router.push(routes.userdetails),
    },
    {
      icon: <BiEditAlt />,
      title: 'Edit',
      onClick: () => {
        setIsOpen(true);
        setIsEdit(true);
      },
    },
    {
      icon: <AiOutlineDelete />,
      title: 'Suspend',
    },
  ];

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('users/list');
        if (response.data) {
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
      <UserSearchBar
        title="Total User's"
        onAddUser={() => {
          setIsEdit(false);
          setIsOpen(true);
        }}
      />
      <TableWrapper TableHeadData={tableHead}>
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
              <td className="border-boxOutline">
                <Typography className="text-SecondaryColor">
                  SAR {td?.wallet.balance || 0}
                </Typography>
              </td>
              <td className="border-boxOutline">
                <Typography className="text-SecondaryColor">
                  {' '}
                  {td?.gender}
                </Typography>
              </td>
              <td className="border-boxOutline">
                <Typography className="text-SecondaryColor">
                  {td?.address || ''}
                </Typography>
              </td>
              <td className="border-boxOutline pl-3">
                <ActionsDropdown actions={actions} />
              </td>
            </tr>
          ))}
      </TableWrapper>
      <EditUser isOpen={isOpen} setIsOpen={setIsOpen} isEdit={isEdit} />
    </>
  );
};
