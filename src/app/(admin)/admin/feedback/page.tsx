'use client';
import { FeedBackTable, FeedbackModal } from '@/app/components/FeedBack';
import React, { useState, useEffect } from 'react';
import api from '@/lib/api-client';
import { Typography } from '@/app/components/common';

interface IFeedBack {
  id: number;
  subject: string;
  type: string;
  description: string;
  status: string;
  action: string;
  reply?: string;
}

const ApplicationConfigurationHome: React.FC = () => {
  const [data, setData] = useState<IFeedBack[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [reply, setReplay] = useState<string>('');
  const [feedback, setFeedback] = useState<IFeedBack | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('support/list');
        if (response.data) {
          setData(response.data.support);
        }
      } catch (error) {
        console.error('Error ', error);
      }
    };

    fetchData();
  }, []);

  const setResolvedData = (data: IFeedBack, action: string) => {
    setFeedback({ ...data, action });
    setIsOpen(true);
  };

  const submitResolved = async (id: number) => {
    if (!reply) {
      console.error('reply is required to resolve feedback.');
      return;
    }
    try {
      if (feedback) {
        const response = await api.post('support/resolved', {
          reply,
          id: feedback.id,
          status: 'Resolved',
        });
        if (response.status === 200) {
          setData((prevData) =>
            prevData.map((item) =>
              item.id === id
                ? { ...item, status: 'Resolved', reply: reply }
                : item
            )
          );
          setIsOpen(false);
          setFeedback(null);
        } else {
          console.error(
            'Failed to update status, status code:',
            response.status
          );
        }
      }
    } catch (error) {
      console.error('Error updating status', error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <Typography variant="h5Bold" className="text-SecondaryColor">
          Feedback and Support
        </Typography>
      </div>
      <FeedbackModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleChange={(event) => setReplay(event.target.value)}
        feedback={feedback as IFeedBack}
        submitResolved={() => submitResolved(feedback?.id || 0)}
      />
      <FeedBackTable
        data={data}
        setResolvedData={(data, action) =>
          setResolvedData(data as IFeedBack, action)
        }
      />
    </>
  );
};

export default ApplicationConfigurationHome;
