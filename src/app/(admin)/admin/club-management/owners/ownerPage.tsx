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
import api from '@/lib/api-client';
import { toast } from 'react-hot-toast';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { MdOutlineLibraryBooks } from 'react-icons/md';

const clubsOwnersHead = [
  'S No',
  'Name',
  'Email',
  'Phone number',
  'Total clubs',
  'Action',
];

function ClubManagement() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClubOpen, setIsClubOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<number |null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'club_owner',
  });
  const router = useRouter();

  const handleDelete = async (id: number) => {
    try {
      const response = await api.delete(`clubOwner/delete/${id}`);
      if (response.data.status === 1) {
        toast.success('Owner deleted successfully');
        setData((prevData) => prevData.filter((user) => user.id !== id));
      }
    } catch (error: any) {
      toast.error(error?.message || 'An error occurred');
    }
  };



  const [data, setData] = useState<any[]>([]);

  const actions = (user: any): IAction[] => [
    {
      icon: <BiEditAlt />,
      title: 'Edit',
      onClick: () => handleEdit(user),
    },
    {
      icon: <AiOutlineDelete />,
      title: 'Delete',
      onClick: () => handleDelete(user.id),
    },
    {
      icon: <MdOutlineLibraryBooks />,
      title: 'Club',
      onClick: () => router.push(`${routes.ownersManagement}/${user.id}`),
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
        const response = await api.get('dashboard/club-management');
        console.log(response.data);
        if (response.data) {
          setDashboardCount(response.data);
        }
      } catch (error) {
        console.error('Error ', error);
      }
    };

    fetchDataCount();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('clubOwner/list');
        if (response.data) {
          setData(response.data.users);
        }
      } catch (error) {
        console.error('Error ', error);
      }
    };

    fetchData();
  }, []);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      (!userId && (!formData.password || !formData.confirmPassword))
    ) {
      toast.error('All fields are required');
      return;
    }

    try {
      let response:any;
      if (userId) {
        response = await api.put(`clubOwner/update/${userId}`, formData);
        if (response.data.status === 1) {
          toast.success('Owner updated successfully');
          setData((prevData) =>
            prevData.map((user) =>
              user.id === userId ? response.data.user : user
            )
          );
        }
      } else {
        response = await api.post('clubOwner/create', formData);
        if (response.data.status === 1) {
          toast.success('Owner created successfully');
          setData((u) => [...u, response.data.user]);
        }
      }
      setIsOpen(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: 'club_owner',
      });
    } catch (error: any) {
      toast.error(error?.message || 'An error occurred');
    }
  };
  
  const handleEdit = async (user: any) => {
    setFormData(user);
    setIsOpen(true);
    setUserId(user.id)

  };

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
              <td className="border-boxOutline">
                <Typography className="text-SecondaryColor">
                  {td?.clubCount}
                </Typography>
              </td>
              <td className="border-boxOutline pl-3">
                <ActionsDropdown actions={actions(td)} />
              </td>
            </tr>
          ))}
      </TableWrapper>
      <CreateOwnerModal
        handleSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        userId={userId}
      />
      <OwnerClubs isOpen={isClubOpen} setIsOpen={setIsClubOpen} />
    </>
  );
}

export default ClubManagement;
