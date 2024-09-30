import { ClubManagementCardData } from "@/app/utils/data";
import React from "react";
import { DashboardCard } from "../../common";

export const ClubCardSection = (): React.ReactElement => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 ">
        {ClubManagementCardData.map((card, index) => (
          <div key={index}>
            <DashboardCard card={card} />
          </div>
        ))}
      </div>
    </>
  );
};
