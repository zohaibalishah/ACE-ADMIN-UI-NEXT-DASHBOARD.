'use client';
import {
  TablePagination,
  PrimaryButton,
  Typography,
} from '@/app/components/common';
import {
  MarketingTable,
  MarketingModal,
} from '@/app/components/MarketingNotification';
import React, { useState, useEffect } from 'react';
import api from '@/lib/api-client';
import { INotification } from '@/lib/interfaces';
import { toast } from 'react-hot-toast';

const MarketingNotificationHome = () => {
  const [data, setData] = useState<INotification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    schedule: '',
  });
  // ?notificationType=Marketing
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('notifications/list');
        if (response.data) {
          setData(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchData();
  }, []);
  const postNotification = async () => {
    if (!formData.title || !formData.message) {
      toast.error('Title and Message are required fields.');
      return;
    }
    try {
      const newNotification = {
        title: formData.title,
        description: formData.message,
        notificationType: 'Marketing',
        schedule: formData.schedule,
      };
      const response = await api.post('notifications/create', newNotification);
      if (response.data.data) {
        toast.success('Notification posted successfully.');
        setData((prevData) => [response.data.data, ...prevData]);
      }
    } catch (error:any) {
      console.error('Error posting notification:', error);
      toast.error(error?.message);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Typography variant="h5Bold" className="text-SecondaryColor">
            Marketing Notification
          </Typography>
          <PrimaryButton
            title="Send notification"
            className="!w-[164px] !h-[42px] !rounded-xl"
            onClick={() => setIsOpen(true)}
          />
        </div>
        {isOpen && (
          <MarketingModal
            formData={formData}
            handleInputChange={handleInputChange}
            isOpen={isOpen}
            postNotification={postNotification}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
      <MarketingTable data={data} />
      {/* <TablePagination /> */}
    </>
  );
};

export default MarketingNotificationHome;
