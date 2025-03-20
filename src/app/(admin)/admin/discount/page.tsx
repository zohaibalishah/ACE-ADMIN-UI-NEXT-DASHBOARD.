'use client';
import {
  DiscountHeader,
  DiscountTable,
  CreateDiscountModal,
} from '@/app/components/Discount';
import React, { useState, useEffect } from 'react';
import api from '@/lib/api-client';
import { IDiscount } from '@/lib/interfaces';
import { toast } from 'react-hot-toast';
import { Typography } from '@/app/components/common';

const DiscountHome: React.FC = () => {
  const [data, setData] = useState<IDiscount[]>([]);
  const [discountId, setDiscountId] = useState<number | null>(null);

  const initialFormData: any = {
    code: '',
    discountValue: null,
    discountType: 'Fixed',
    usageType: 'One-Time',
    fromDate: '',
    toDate: '',
  };

  const [formData, setFormData] = useState<IDiscount>(initialFormData);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await api.get('discount/list');
        if (response.data) {
          setData(response.data.discounts);
        }
      } catch (error) {
        console.error('Error fetching Discount:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const saveDiscount = async () => {
    try {
      let response: any;
      if (discountId) {
        response = await api.put(`discount/update/${discountId}`, formData);
        if (response.status === 200) {
          setData((prevData) =>
            prevData.map((discount) =>
              discount.id === discountId
                ? { ...discount, ...formData }
                : discount
            )
          );
          toast.success('Discount updated successfully');
        } else {
          toast.error('Failed to update discount');
        }
      } else {
        response = await api.post('discount/create', formData);
        if (response.status === 201) {
          setData((prevData) => [...prevData, response.data.discount]);
          toast.success('Discount created successfully');
        } else {
          toast.error('Failed to create discount');
        }
      }
    } catch (error: any) {
      console.error(
        `Error ${discountId ? 'updating' : 'creating'} discount`,
        error
      );
      toast.error(error?.message);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const [show, setShow] = useState<boolean>(false);

  const onHandleEdit = (data: IDiscount) => {
    setDiscountId(data.id);
    setFormData(data);
    setShow(true);
  };

  const deleteDiscount = async (id: number) => {
    try {
      const response = await api.delete(`discount/delete/${id}`);
      if (response.status === 200) {
        toast.success('Discount deleted successfully');
        setData((prevData) =>
          prevData.filter((discount) => discount.id !== id)
        );
      } else {
        toast.error('Failed to delete discount');
      }
    } catch (error: any) {
      console.error('Error deleting discount', error);
      toast.error(error?.message);
    }
  };

  const handleModalClose = () => {
    setShow(false);
    setFormData(initialFormData);
  };

  return (
    <>
      <DiscountHeader
        onAdd={() => {
          setShow(true);
        }}
      />
      {loading ? (
        <Typography className="text-SecondaryColor">Loading...</Typography>
      ) : (
        <DiscountTable
          data={data}
          onHandleEdit={onHandleEdit}
          onDelete={deleteDiscount}
        />
      )}
      <CreateDiscountModal
        discountId={discountId}
        createDiscount={saveDiscount}
        handleInputChange={
          handleInputChange as (field: string, value: string) => void
        }
        formData={formData}
        isOpen={show}
        setIsOpen={handleModalClose}
      />
    </>
  );
};

export default DiscountHome;
