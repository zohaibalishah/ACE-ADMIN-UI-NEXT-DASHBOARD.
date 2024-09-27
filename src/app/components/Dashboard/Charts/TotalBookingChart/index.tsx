import { ThisMonth, Typography } from "@/app/components/common";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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

export const TotalBookingChart = (): React.ReactElement => {
  return (
    <div className="md:col-span-2 sm:h-[374px] overflow-hidden overflow-x-auto">
      <div className=" border-2 border-boxOutline p-6 pl-0 bg-bgBox rounded-xl min-w-[600px] ">
        <div className="flex justify-between items-center mb-3 py-3">
          <Typography variant="h5Bold" className="text-SecondaryColor pl-7">
            Total Booking
          </Typography>
          <div>
            <ThisMonth />
          </div>
          {/* <div className="text-SecondaryColor flex items-center justify-center gap-x-2 cursor-pointer w-[126px] h-[46px] rounded-lg bg-boxOutline">
            <Typography>This month</Typography>
            <IoIosArrowDown />
          </div> */}
        </div>
        <ResponsiveContainer width={"100%"} height={250}>
          <LineChart
            width={100}
            height={100}
            data={data}
            margin={{ top: 23, left: 10, right: 10, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <CartesianAxis y={0} />
            <XAxis
              dataKey="name"
              padding={{ left: 0, right: 0 }}
              axisLine={false}
              tickLine={false}
              tickMargin={30}
              tickCount={4}
              tick={{ fill: "#E4F2F6" }}
            />
            <YAxis
              axisLine={false}
              tickCount={4}
              dataKey="pv"
              tickMargin={20}
              tick={{ fill: "#E4F2F6" }}
            />
            <Line
              type={"monotone"}
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
