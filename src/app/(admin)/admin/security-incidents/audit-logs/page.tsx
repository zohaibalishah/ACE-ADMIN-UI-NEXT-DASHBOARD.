'use client';

import { SecurityIncidentBar } from '@/app/components/SecurityIncidents';
import { AudtiLogsTable } from '@/app/components/SecurityIncidents/Audit-Logs';
import React, { useState, useEffect } from 'react';
import api from '@/lib/api-client';
import { ISysmetLogs } from '@/lib/interfaces';

const AuditLogsHome = () => {
  const [data, setData] = useState<ISysmetLogs[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('systemlogs/list?logType=AuditLogs');
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
      <SecurityIncidentBar label="Audit Logs" />
      <AudtiLogsTable data={data} />
    </>
  );
};

export default AuditLogsHome;
