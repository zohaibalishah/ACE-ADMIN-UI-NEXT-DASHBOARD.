'use client';
import {
  DuePaymentHeader,
  DuePaymentTable,
} from '@/app/components/FinancialManagement/DuePayement';
import React, { useState, useEffect } from 'react';
import api from '@/lib/api-client';
import { IAction } from '@/app/base/types';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';
import { LuCalendarDays } from 'react-icons/lu';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { IBooking, Transaction } from '@/lib/interfaces';

interface TransactionData {
  club?: {
    name?: string;
    // Removed images property to fix the error
  };
  user?: {
    name?: string;
  };
  totalIncome?: string;
  transactionDue?: string;
  status?: {
    confirmed?: string;
    pending?: string;
  };
  action?: IAction;
}

const DuePaymentHome: React.FC = () => {
  const [isView, setIsView] = useState<boolean>(false);
  const [data, setData] = useState<TransactionData[]>([]);
  const [bookingInfo, setBookingInfo] = useState<Transaction | null>(null);
  const [bookingId, setBookingId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('booking/duePayment');
        if (response.data) {
          setData(response.data.booking.map((transaction: Transaction) => ({
            club: { name: transaction.club?.name }, // Removed images property to fix the error
            user: { name: transaction.user?.name },
            totalIncome: transaction.amount.toString(),
            transactionDue: '0',
            status: {
              confirmed: transaction.status === 'confirmed' ? transaction.status : undefined,
              pending: transaction.status === 'pending' ? transaction.status : undefined,
            },
          })));
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
        const response = await api.get(`booking/duePayment`);
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
      <DuePaymentHeader />
      <DuePaymentTable  />
    </>
  );
};

export default DuePaymentHome;
