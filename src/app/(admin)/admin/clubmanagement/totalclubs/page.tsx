import {
  ClubCardSection,
  TotalClubsTable,
  TotalClubs,
} from "@/app/components/ClubManagement";
import React from "react";

const TotalClubsHome = () => {
  return (
    <>
      <section className=" w-full h-full scroll-smooth p-2 md:p-6 md:pl-10 pb-20 md:pb-0 bg-gradient-to-t from-black via-bgDark to-bgBox">
        <div>
          <ClubCardSection />
          <TotalClubs />
          <TotalClubsTable />
        </div>
      </section>
    </>
  );
};

export default TotalClubsHome;
