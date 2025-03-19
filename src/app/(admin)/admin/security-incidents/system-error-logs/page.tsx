
'use client';
import {
  LogModal,
  SecurityIncidentBar,
  SecurityIncidentsTable,
  SecurityStatics,
} from '@/app/components/SecurityIncidents';
import React, { useState, useEffect } from 'react';
import api from '@/lib/api-client';
import { ISysmetLogs } from '@/lib/interfaces';
const SystemErrorLogsHome = () => {
  const [data, setData] = useState<ISysmetLogs[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [reply, setReplay] = useState<string>('');
  const [feedback, setFeedback] = useState<ISysmetLogs | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          'systemlogs/list?logType=SystemErrorLogs'
        );
        if (response.data) {
          setData(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching clubs:', error);
      }
    };

    fetchData();
  }, []);

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

  const setResolvedData = (data: ISysmetLogs, action: string) => {
    setFeedback({ ...data, action });
    setIsOpen(true);
  };

  return (
    <>
      <SecurityIncidentBar label="Security Incidents" />
     <LogModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleChange={(event) => setReplay(event.target.value)}
        feedback={feedback as ISysmetLogs}
        submitResolved={() => submitResolved(feedback?.id || 0)}
      />
      <SecurityIncidentsTable
        data={data}
        setResolvedData={setResolvedData}
        
      />
    </>
  );
};

export default SystemErrorLogsHome;
