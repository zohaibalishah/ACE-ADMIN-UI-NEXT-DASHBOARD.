import {
  UserManagmentCardSection,
  UserSearchBar,
  UsersTable,
} from "@/app/components/UserManagement";
import React from "react";

const AddNewUser = (): React.ReactElement => {
  return (
    <>
      <div>
        <UserManagmentCardSection />
        <UserSearchBar title="New User's" />
        <UsersTable />
      </div>
    </>
  );
};

export default AddNewUser;
