"use client";
import {
  ApplicationConfigurationTitle,
  ConfigurationTable,
  SelectSearchComponent,
} from "@/app/components/Configuration/ApplicationConfiguration";
import React, { useState, useEffect } from 'react';
import api from '@/lib/api-client';
const ApplicationConfigurationHome = () => {
  const [data, setData] = useState<any[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('facilities/list');
        if (response.data) {
          setData(response.data.facilities);
        }
      } catch (error) {
        console.error('Error ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ApplicationConfigurationTitle />
      <SelectSearchComponent />
      <ConfigurationTable data={data} />
    </>
  );
};

export default ApplicationConfigurationHome;
