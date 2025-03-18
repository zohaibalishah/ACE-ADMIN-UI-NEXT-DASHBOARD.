'use client';
import {
  SecurityIncidentBar,
  SecurityIncidentsTable,
  SecurityStatics,
} from '@/app/components/SecurityIncidents';
import React, { useState, useEffect } from 'react';
import api from '@/lib/api-client';
import { ISysmetLogs } from '@/lib/interfaces';

const SecurityIncidentsHome = () => {
  const [data, setData] = useState<ISysmetLogs[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          'systemlogs/list?logType=SecurityIncidents'
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
      <SecurityIncidentBar label="Security Incidents" />
      <SecurityIncidentsTable data={data} />
    </>
  );
};

export default SecurityIncidentsHome;
