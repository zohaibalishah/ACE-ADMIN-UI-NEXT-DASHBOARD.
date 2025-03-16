
'use client'
import React, { useState, useEffect } from 'react';
import { Typography } from '../../common';
import api from '@/lib/api-client';
import { FeedBackTableRow } from './FeedBackTableRow';

export const FeedBackTAble = (): React.ReactElement => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('clubOwner/list');
        if (response.data) {
          setData(response.data.users);
        }
      } catch (error) {
        console.error('Error ', error);
      }
    };

    fetchData();
  }, []);

  const FEEDBACK_TABLE_HEAD = [
    'S no',
    'Type',
    'Subject',
    'Description',
    'Status',
    'Action',
  ];

  return (
    <div className="w-full overflow-hidden overflow-x-scroll">
      <table className="min-w-[700px] w-full table-auto text-left">
        <thead>
          <tr>
            {FEEDBACK_TABLE_HEAD.map((data, index) => (
              <th
                key={index}
                className={` bg-boxOutline ${
                  index === 0 ? 'pl-2 rounded-tl-2xl' : ''
                } ${index === 1 ? 'pl-2' : ''}
                  ${
                    index === FEEDBACK_TABLE_HEAD.length - 1
                      ? 'pl-3 rounded-tr-2xl'
                      : ''
                  } py-3`}
              >
                <Typography
                  variant="bodyRegular"
                  className="text-SecondaryColor font-normal"
                >
                  {data}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data &&
            data.map((data, index) => {
              return <FeedBackTableRow data={data} index={index} key={index} />;
            })}
        </tbody>
      </table>
    </div>
  );
};
