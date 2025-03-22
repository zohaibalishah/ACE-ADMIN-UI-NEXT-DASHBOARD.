'use client';
import {
  GenerateReport,
  TransectionsTable,
} from '@/app/components/BookingManagement';
import React, { useState, useEffect } from 'react';
import api from '@/lib/api-client';
import { IAction } from '@/app/base/types';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';
import { LuCalendarDays } from 'react-icons/lu';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { IBooking, Transaction } from '@/lib/interfaces';

const TransectionPage = () => {
  const [isView, setIsView] = useState<boolean>(false);
  const [data, setData] = useState<Transaction[]>([]);
  const [bookingInfo, setBookingInfo] = useState<Transaction | null>(null);
  const [bookingId, setBookingId] = useState<number | null>(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('booking/transactions');
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
        const response = await api.get(`booking/transactions`);
        if (response.data) {
          setBookingInfo(response.data.transactions);
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
      <GenerateReport title="Transactions Management" />
      <TransectionsTable data={data} />
    </>
  );
};

export default TransectionPage;
