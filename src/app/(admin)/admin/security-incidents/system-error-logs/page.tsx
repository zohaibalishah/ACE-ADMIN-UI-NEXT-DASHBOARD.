

'use client';
import {
  SecurityIncidentBar,
  SecurityIncidentsTable,
  SecurityStatics,
} from '@/app/components/SecurityIncidents';
import React, { useState, useEffect } from 'react';
import api from '@/lib/api-client';
import { ISysmetLogs } from '@/lib/interfaces';

const SystemErrorLogsHome = () => {
  const [data, setData] = useState<ISysmetLogs[]>([]);

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

  return (
    <>
         <SecurityIncidentBar label="System Error Logs" />
      <SecurityIncidentsTable data={data} />

   
    </>
  );
};

export default SystemErrorLogsHome;
