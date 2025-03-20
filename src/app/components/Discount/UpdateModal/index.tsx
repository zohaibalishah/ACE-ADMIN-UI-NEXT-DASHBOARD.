'use client';
import React, { SetStateAction } from 'react';
import { DatePicker, Modal, PrimaryButton, Typography } from '../../common';
import { RadioButton, SelectField, TextField } from '../../form';
import { IDiscount } from '@/lib/interfaces';
import moment from 'moment';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  handleInputChange: (field: string, value: string) => void;
  formData: IDiscount;
  createDiscount: () => void;
  discountId: number | null;
}

export const CreateDiscountModal: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  handleInputChange,
  formData,
  createDiscount,
  discountId,
}) => {
  const handleModalClose = (): void => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={handleModalClose}
      className="border-2 border-SecondaryColor/50 p-8 rounded-xl"
    >
      <div className="flex flex-col bg-bgShadow gap-y-4">
        <Typography variant="h5Bold" className="text-SecondaryColor">
          {discountId ? 'Update' : 'Create'} discount
        </Typography>
        <TextField
          placeholder="SUMMER20"
          className="!h-[58px] !md:w-[534px]"
          value={formData.code || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('code', e.target.value)}
        />
        <div className="mt-4">
          <SelectField
            placeholder="Select type"
            options={[
              { label: 'Fixed', value: 'Fixed' },
              { label: 'Percentage', value: 'Percentage' },
            ]}
            value={{
              label: formData?.discountType,
              value: formData?.discountType,
            }}
            onChange={(value: { value: string } | null) => {
              if (value) {
                handleInputChange('discountType', value.value);
              }
            }}
          />
        </div>
        <TextField
          placeholder="SAR 10"
          className="!h-[58px] !md:w-[534px]"
          value={formData.discountValue || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('discountValue', e.target.value)}
        />
        <div className="flex gap-x-3 py-4">
          <DatePicker
            placeholder="Start date"
            defaultValue={formData.fromDate ? new Date(formData.fromDate) : undefined}
            onChange={(date: Date | undefined) => {
              if (date) {
                handleInputChange('fromDate', moment(date).format('YYYY-MM-DD'));
              }
            }}
          />
          <DatePicker
            placeholder="End date"
            defaultValue={formData.toDate ? new Date(formData.toDate) : undefined}
            onChange={(date: Date | undefined) => {
              if (date) {
                handleInputChange('toDate', moment(date).format('YYYY-MM-DD'));
              }
            }}
          />
        </div>
        <div>
          <Typography className="text-left text-SecondaryColor">
            Discount code use
          </Typography>
          <div className="flex gap-x-4 py-4">
            <Typography className="text-SecondaryColor">
              <RadioButton
                label="One time for player"
                checked={formData.usageType === 'One-Time'}
                onCheck={() => handleInputChange('usageType', 'One-Time')}
              />
            </Typography>
            <Typography
              variant="bodyMedium"
              className="flex text-SecondaryColor gap-x-2 items-center"
            >
              <RadioButton
                label="Multiple time"
                checked={formData.usageType === 'Multiple'}
                onCheck={() => handleInputChange('usageType', 'Multiple')}
              />
            </Typography>
          </div>
        </div>
        <div>
          <PrimaryButton
            title={discountId ? 'Update' : 'Create'}
            className="md:!w-[243px]"
            onClick={createDiscount}
          />
        </div>
      </div>
    </Modal>
  );
};
