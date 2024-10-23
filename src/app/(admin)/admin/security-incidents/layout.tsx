import { SecurityStatics } from "@/app/components/SecurityIncidents";
import React from "react";

interface ILayout {
  children: React.ReactNode;
}

const SecurityLayout = ({ children }: ILayout): React.ReactElement => {
  return (
    <>
      <SecurityStatics />
      {children}
    </>
  );
};

export default SecurityLayout;
