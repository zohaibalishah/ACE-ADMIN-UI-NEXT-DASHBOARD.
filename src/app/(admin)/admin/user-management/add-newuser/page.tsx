import {
  UserManagmentCardSection,
  UsersTable,
} from "@/app/components/UserManagement";
import React from "react";

const AddNewUser = (): React.ReactElement => {
  return (
    <>
      <div>
        <UserManagmentCardSection />
        <UsersTable />
      </div>
    </>
  );
};

export default AddNewUser;
