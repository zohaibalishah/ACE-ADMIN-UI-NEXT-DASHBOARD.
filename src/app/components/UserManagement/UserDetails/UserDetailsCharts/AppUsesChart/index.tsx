"use client";

import { ThisMonth, Typography } from "@/app/components/common";
import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  CartesianAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    pv: 0,
  },
  {
    name: "Feb",
    pv: 350,
  },
  {
    name: "Mar",
    pv: 80,
  },
  {
    name: "Apr",
    pv: 800,
  },
  {
    name: "May",
    pv: 150,
  },
  {
    name: "Jun",
    pv: 100,
  },
  {
    name: "Jul",
    pv: 300,
  },
  {
    name: "Aug",
    pv: 800,
  },
  {
    name: "Sep",
    pv: 500,
  },
  {
    name: "Oct",
    pv: 50,
  },
  {
    name: "Nov",
    pv: 320,
  },
  {
    name: "Dec",
    pv: 10,
  },
];

export const AppUsesChart = (): React.ReactElement => {
  return (
    <div className="overflow-hidden overflow-x-scroll mt-10">
      <div className="min-w-[600px] w-full h-[374px] border-2 border-boxOutline  p-6 pl-0 bg-bgBox rounded-xl overflow-hidden overflow-x-auto ">
        <div className="flex justify-between items-center mb-3 py-3">
          <Typography variant="h5Bold" className="text-SecondaryColor pl-7">
            Number of App Uses Over Time
          </Typography>
          <ThisMonth />
        </div>
        <ResponsiveContainer width={"100%"} height="80%">
          <LineChart
            width={100}
            height={100}
            data={data}
            margin={{ top: 23, left: 40, right: 10, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <CartesianAxis y={0} />
            <XAxis
              dataKey="name"
              padding={{ left: 0, right: 0 }}
              axisLine={false}
              tickLine={false}
              tickMargin={30}
              tick={{ fill: "#E4F2F6" }}
            />
            <YAxis
              axisLine={false}
              tickCount={4}
              dataKey="pv"
              tickMargin={20}
              tick={{ fill: "#E4F2F6" }}
              tickFormatter={(value) => {
                if (value === 0) return "SAR 0";
                if (value >= 300) return `SAR ${value / 300}K`;
                return `SAR ${value}`;
              }}
            />
            <Line
              type={"basis"}
              dataKey="pv"
              stroke="#93B10B"
              strokeWidth={2}
              activeDot={false}
              dot={false}
              layout="horizontal"
              legendType="none"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
