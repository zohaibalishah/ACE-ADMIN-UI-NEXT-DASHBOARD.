'use client';
import {
  ConfigurationTable,
  CountryTitle,
  AddCountryModal,
} from '@/app/components/Configuration/CountryConfiguration';
import React, { useState, useEffect } from 'react';
import api from '@/lib/api-client';
import { toast } from 'react-hot-toast';

const ApplicationConfigurationHome = () => {
  const [data, setData] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [newCountryTitle, setNewCountryTitle] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('country/list');
        console.log('response.data', response.data);
        if (response.data) {
          setData(response.data);
        }
      } catch (error: any) {
        console.error('Error  country', error);
        toast.error(error?.message);
      }
    };

    fetchData();
  }, []);

  const addCountry = async () => {
    try {
      const response = await api.post('country/create', {
        title: newCountryTitle,
      });
      if (response.data) {
        setData((prevData) => [...prevData, response.data.country]);
        setNewCountryTitle(''); // Clear the input field after adding
        setIsOpen(false);
        toast.success('Country added successfully');
      }
    } catch (error: any) {
      console.error('Error added country', error);
      toast.error(error?.message);
    }
  };

  const deleteCountry = async (id: number) => {
    try {
      const response = await api.delete(`country/delete/${id}`);
      if (response.status === 200) {
        setData((prevData) => prevData.filter((country) => country.id !== id));
        toast.success('Country deleted successfully');
      } else {
        toast.error('Failed to delete country');
      }
    } catch (error: any) {
      console.error('Error deleting country', error);
      toast.error(error?.message);
    }
  };

  return (
    <>
      <CountryTitle setIsOpen={setIsOpen} />
      <AddCountryModal
        isOpen={isOpen}
        placeholder="Country Title"
        setIsOpen={setIsOpen}
        onChangeTitle={setNewCountryTitle}
        onSubmit={addCountry}
      />
      <ConfigurationTable data={data} onDelete={deleteCountry} />
    </>
  );
};

export default ApplicationConfigurationHome;
