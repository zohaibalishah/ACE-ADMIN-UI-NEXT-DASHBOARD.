import { userManagementCardData } from "@/app/utils/data";
import React from "react";
import { DashboardCard } from "../../common";

export const UserManagmentCardSection = (): React.ReactElement => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {userManagementCardData.map((card, index) => (
            <div key={index}>
              <DashboardCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
