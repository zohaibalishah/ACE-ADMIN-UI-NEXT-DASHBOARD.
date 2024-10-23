"use client";
import {
  DatePicker,
  MImage,
  ThisMonth,
  Typography,
} from "@/app/components/common";
import { Calendar } from "@/components/ui/calendar"; // Assuming Calendar is a custom component
import React, { useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { IoIosArrowDown } from "react-icons/io";

const data = [
  {
    name: "Jan",
    pv: 10000,
    value: 18478,
  },
  {
    name: "Feb",
    pv: 10000,
    value: 38478,
  },
  {
    name: "Mar",
    pv: 10000,
    value: 28478,
  },
  {
    name: "Apr",
    pv: 10000,
    value: 48478,
  },
  {
    name: "May",
    pv: 10000,
    value: 40478,
  },
  {
    name: "Jun",
    pv: 10000,
    value: 28478,
  },
  {
    name: "Jul",
    pv: 10000,
    value: 48000,
  },
  {
    name: "Aug",
    pv: 10000,
    value: 48478,
  },
  {
    name: "Sep",
    pv: 10000,
    value: 38478,
  },
  {
    name: "Oct",
    pv: 10000,
    value: 45000,
  },
  {
    name: "Nov",
    pv: 10000,
    value: 25000,
  },
  {
    name: "Dec",
    pv: 10000,
    value: 30000,
  },
];

export const TotalTimeSpentChart = (): React.ReactElement => {
  return (
    <div className="py-10 overflow-hidden overflow-x-auto">
      <div className="min-w-[600px] h-[351px] w-full border-2 border-boxOutline p-3 pl-0 bg-bgBox rounded-xl">
        <div className="px-3 pl-10 flex justify-between items-center ">
          <Typography variant="h5Bold" className="text-SecondaryColor">
            Total Time Spent on App
          </Typography>
          <div className="flex items-center gap-x-3">
            <ThisMonth />
          </div>
        </div>
        <ResponsiveContainer width={"100%"} height="80%">
          <BarChart
            width={150}
            height={40}
            data={data}
            margin={{ bottom: 10, top: 10, left: 10 }}
          >
            <Bar
              dataKey="value"
              fill="#93B10B"
              barSize={18}
              radius={[4, 4, 4, 4]}
            />
            <XAxis
              dataKey="name"
              tick={{ fill: "#E4F2F6" }}
              tickLine={false}
              tickMargin={20}
              axisLine={false}
            />
            <YAxis
              dataKey="pv"
              tick={{ fill: "#E4F2F6" }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}h`}
              domain={[10000, 50000]} // Set the range from 10K to 50K
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
