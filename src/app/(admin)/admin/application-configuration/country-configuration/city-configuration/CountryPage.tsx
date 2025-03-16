'use client';
import {
  ConfigurationTable,
  CountryTitle,
  AddCountryModal,
} from '@/app/components/Configuration/CountryConfiguration';
import React, { useState, useEffect } from 'react';
import api from '@/lib/api-client';
interface IProps {
  id: number;

}

const CityConfiguration = ({ id }:IProps) => {
  const [data, setData] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [newCityTitle, setNewCityTitle] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`country/countries/${id}/cities`);
        console.log('response.data', response.data);
        if (response.data) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error ', error);
      }
    };

    fetchData();
  }, [id]);

  const addCountry = async () => {
    try {
      const response = await api.post('country/city/create', {
        title: newCityTitle,
        countryId:id
      });
      if (response.data) {
        setData((prevData) => [...prevData, response.data.city]);
        setNewCityTitle(''); // Clear the input field after adding
        setIsOpen(false);
      }
    } catch (error) {
      console.error('Error adding country', error);
    }
  };

  const deleteCity = async (id: number) => {
    try {
      const response = await api.delete(`country/city/delete/${id}`);
      if (response.status === 200) {
        setData((prevData) => prevData.filter((country) => country.id !== id));
      } else {
        console.error(
          'Failed to delete country, status code:',
          response.status
        );
      }
    } catch (error) {
      console.error('Error deleting country', error);
    }
  };

  return (
    <>
      <CountryTitle setIsOpen={setIsOpen} />
      <AddCountryModal
      placeholder={"City Title"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onChangeTitle={setNewCityTitle}
        onSubmit={addCountry}
      />
      <ConfigurationTable data={data} onDelete={deleteCity} />
    </>
  );
};

export default CityConfiguration;
