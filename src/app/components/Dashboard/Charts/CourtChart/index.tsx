import { Typography } from "@/app/components/common";
import { colors } from "@/app/styles/colors";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

interface ILabel {
  cx: string;
  cy: string;
  midAngle: string;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}

const data = [
  { name: "Group A", value: 40 },
  { name: "Group B", value: 60 },
];

const COLORS = ["#283135", "#93B10B"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: ILabel) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "middle" : "middle"}
      dominantBaseline="middle"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const CourtChart = () => {
  return (
    <div className="md:col-span-1 overflow-hidden overflow-x-scroll">
      <div className="relative border border-boxOutline rounded-xl flex flex-col z-0  items-center bg-bgBox w-full min-w-[344px] h-[374px] ">
        <ResponsiveContainer width="100%" height={310}>
          <PieChart width={233} height={233}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
              stroke="none" // This removes the white border
              startAngle={60}
              endAngle={480}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* Centered content */}
        <div className="absolute top-[42%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center bg-boxOutline w-[110px] h-[110px] rounded-full flex flex-col items-center justify-center ">
          <Typography variant="h5" className="text-SecondaryColor">
            780
          </Typography>
          <Typography variant="smallRegular" className="text-SecondaryColor">
            Total Court
          </Typography>
        </div>
        <div className="flex justify-between gap-x-8">
          <div className="flex items-center gap-x-3">
            <div className="w-[10px] h-[10px] rounded-full bg-PrimaryColor"></div>
            <Typography className="text-SecondaryColor">
              Court Booked
            </Typography>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="w-[10px] h-[10px] rounded-full bg-boxOutline"></div>
            <Typography className="text-SecondaryColor">
              Court Booked
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
