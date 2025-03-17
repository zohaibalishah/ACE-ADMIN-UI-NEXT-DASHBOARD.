'use client';

import { IAction } from '@/app/base/types';
import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { LuEye } from 'react-icons/lu';
import { BiEditAlt } from 'react-icons/bi';
import { UserSearchBar } from '../UserSearchBar';
import { TableWrapper, Typography } from '../../common';
import { EditUser } from '../EditUser';
import { routes } from '@/app/utils/const';
import { useRouter } from 'next/navigation';
import api from '@/lib/api-client';
import { toast } from 'react-hot-toast';
import { ActionsDropdown } from './ActionsDropdown';
const tableHead = [
  'S no',
  'Name',
  'Email',
  'Phone number',
  'Wallet balance',
  'Gender',
  'Status',
  'Action',
];

export const UsersTable = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    gender: 'Male',
    confirmPassword: '',
    role: 'player',
    dob: '',
  });

  const [data, setData] = useState<any[]>([]);

  const handleDelete = async (id: number) => {
    try {
      const response = await api.delete(`users/delete/${id}`);
      if (response.data.status === 1) {
        toast.success('Owner deleted successfully');
        setData((prevData) => prevData.filter((user) => user.id !== id));
      }
    } catch (error: any) {
      toast.error(error?.message || 'An error occurred');
    }
  };

  const handleStatusToggle = async (id: number, currentStatus: string) => {
    const newStatus = currentStatus === 'Activated' ? 'Suspended' : 'Activated';
    try {
      const response = await api.put(`users/update/${id}`, {
        accountStatus: newStatus,
      });
      if (response.data.status === 1) {
        toast.success(`User ${newStatus.toLowerCase()} successfully`);
        setData((prevData) =>
          prevData.map((user) =>
            user.id === id ? { ...user, accountStatus: newStatus } : user
          )
        );
      }
    } catch (error: any) {
      toast.error(error?.message || 'An error occurred');
    }
  };

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

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.dob ||
      !formData.gender
    ) {
      toast.error('All fields are required');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      toast.error('Invalid email format');
      return;
    }

    try {
      const response = await api.post('users/create', formData);
      if (response.data.status === 1) {
        toast.success('User created successfully');
        setData((u) => [...u, response.data.user]);
        setIsOpen(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          role: 'player',
          gender: 'Male',
          dob: '',
        });
      }
    } catch (error: any) {
      toast.error(error?.message || 'An error occurred');
    }
  };

  const handleUpdate = async (id: number, updatedData: any) => {
    try {
      const response = await api.put(`users/update/${id}`, updatedData);
      if (response.data.status === 1) {
        toast.success('User updated successfully');
        setData((prevData) =>
          prevData.map((user) =>
            user.id === id ? { ...user, ...updatedData } : user
          )
        );
      }
    } catch (error: any) {
      toast.error(error?.message || 'An error occurred');
    }
  };

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
                  SAR {td?.wallet?.balance || 0}
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
                  {' '}
                  {td?.accountStatus}
                </Typography>
              </td>
              <td className="border-boxOutline pl-3">
                <ActionsDropdown
                  actions={[
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
                      title:
                        td?.accountStatus === 'Activated' ? 'Suspended' : 'Activated',
                      onClick: () =>
                        handleStatusToggle(td.id, td.accountStatus),
                    },
                  ]}
                />
              </td>
            </tr>
          ))}
      </TableWrapper>
      <EditUser
        handleSubmit={handleSubmit}
        formData={formData}
        handleChange={handleInputChange}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isEdit={isEdit}
      />
    </>
  );
};
