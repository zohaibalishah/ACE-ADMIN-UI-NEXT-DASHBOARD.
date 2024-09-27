import { AddNewClub, ClubCardSection } from "@/app/components/ClubManagement";
import React from "react";

const AddNewClubPage = () => {
  return (
    <>
      <section className="scroll-smooth w-full h-full p-3 md:p-6 md:pl-10 bg-gradient-to-t from-black via-bgDark to-bgBox">
        <ClubCardSection />
        <AddNewClub />
      </section>
    </>
  );
};

export default AddNewClubPage;
