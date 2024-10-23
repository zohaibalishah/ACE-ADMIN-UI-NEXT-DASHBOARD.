import {
  UserManagmentCardSection,
  UsersTable,
} from "@/app/components/UserManagement";
import React from "react";

const UserManagementPage = () => {
  return (
    <>
      <UserManagmentCardSection />
      <UsersTable />
    </>
  );
};

export default UserManagementPage;
