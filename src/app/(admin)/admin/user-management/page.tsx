import {
  UserManagmentCardSection,
  UserSearchBar,
  UsersTable,
} from "@/app/components/UserManagement";

import React from "react";

const UserManagementPage = () => {
  return (
    <>
      <section>
        <UserManagmentCardSection />
        <UserSearchBar title="Total User's" />
        <UsersTable />
      </section>
    </>
  );
};

export default UserManagementPage;
