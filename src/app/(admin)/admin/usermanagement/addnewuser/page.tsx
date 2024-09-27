import {
  AddNewUserForm,
  UserManagmentCardSection,
} from "@/app/components/UserManagement";
import React from "react";

const AddNewUser = (): React.ReactElement => {
  return (
    <>
      <div className="p-3 md:p-6 md:pl-10">
        <UserManagmentCardSection />
        <AddNewUserForm />
      </div>
    </>
  );
};

export default AddNewUser;
