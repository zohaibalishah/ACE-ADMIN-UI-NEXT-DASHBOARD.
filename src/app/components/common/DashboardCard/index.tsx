import React from "react";
import { MImage, Monthly, Typography } from "../../common";
import { dashboardIcons } from "../../../../../public/icons/dashboardIcons";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface ICard {
  card: {
    user: string;
    figure: string | number;
    up?: boolean;
    down?: boolean;
    select?: boolean;
    link?: Url | undefined;
  };
}

export const DashboardCard = ({ card }: ICard): React.ReactElement => {
  const CardContent = () => (
    <div className="bg-bgBox p-4 rounded-xl border-[1px] border-newLinear/30">
      <div className="text-SecondaryColor flex items-start justify-between">
        <div>
          <Typography variant="bodyRegular">{card.user}</Typography>
          <Typography variant="h2" className="text-PrimaryColor py-4">
            {card.figure}
          </Typography>
        </div>
        <div className="w-[48px] h-[48px] bg-boxOutline flex items-center justify-center rounded-xl cursor-pointer">
          <MImage src={dashboardIcons.userIcon} w={24} h={24} alt="user" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          {card.up ? (
            <Typography
              variant="bodyMedium"
              className="flex items-center text-SecondaryColor"
            >
              <span className="text-bgSucces pr-2">
                <GoArrowUp />
              </span>
              <span className="text-bgSucces pr-1">+6%</span>Since last week
            </Typography>
          ) : (
            <Typography
              variant="bodyMedium"
              className="flex items-center text-SecondaryColor"
            >
              <span className="text-bgdanger pr-2">
                <GoArrowDown />
              </span>
              <span className="text-bgdanger pr-1">-10% </span>Since last week
            </Typography>
          )}
        </div>
        <div>{card.select ? <Monthly /> : null}</div>
      </div>
    </div>
  );

  return (
    <div>
      {card.link ? (
        <Link href={card.link}>
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </div>
  );
};
