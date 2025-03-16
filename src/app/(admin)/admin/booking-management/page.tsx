'use client';

import {
  BookingTable,
  GenerateReport,
} from '@/app/components/BookingManagement';

import React, { useState, useEffect } from 'react';
import api from '@/lib/api-client';
import { IAction } from '@/app/base/types';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';
import { LuCalendarDays } from 'react-icons/lu';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { IBooking } from '@/lib/interfaces';

const BookingManagementHome = () => {
  const [isView, setIsView] = useState<boolean>(false);
  const [data, setData] = useState<IBooking[]>([]);
  const [bookingInfo, setBookingInfo] = useState<IBooking | null>(null);
  const [bookingId, setBookingId] = useState<number | null>(null);

  const updateStatus = async (clubId: number, newStatus: string) => {
    try {
      const response = await api.post(`clubs/update-status`, {
        status: newStatus,
        clubId: clubId,
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
        const response = await api.get('booking/list');
        if (response.data) {
          setData(response.data.booking);
        }
      } catch (error) {
        console.error('Error fetching clubs:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataById = async (bookingId: number) => {
      try {
        const response = await api.get(`booking/detail/${bookingId}`);
        if (response.data) {
          setBookingInfo(response.data.booking);
        }
      } catch (error) {
        console.error('Error fetching club details:', error);
      }
    };

    if (bookingId) {
      fetchDataById(bookingId);
    }
  }, [bookingId]);

  const handleClosed = () => {
    setIsView(false);
    setBookingInfo(null);
  };

  return (
    <>
      <GenerateReport title="Booking management" />
      <BookingTable data={data} />
    </>
  );
};

export default BookingManagementHome;
