import React from "react";
import { Typography } from "../../common";
import { UserTableRow } from "./UserTableRow";

const USER_TABLE_HEAD = [
  "S no",
  "Name",
  "Email",
  "Phone number",
  "Wallet balance",
  "Gender",
  "Location",
  "Action",
];

const USER_TABLE_ROW = [
  {
    profile: "GU",
    name: "Gul khan",
    email: "gulkhan@gmail.com",
    phoneNumber: +3382933298,
    walletBalance: 344,
    gender: "Male",
    location: "Riyadh KSA",
  },
  {
    profile: "GU",
    name: "Gul khan",
    email: "gulkhan@gmail.com",
    phoneNumber: +3382933298,
    walletBalance: 344,
    gender: "Male",
    location: "Riyadh KSA",
  },
  {
    profile: "GU",
    name: "Gul khan",
    email: "gulkhan@gmail.com",
    phoneNumber: +3382933298,
    walletBalance: 344,
    gender: "Male",
    location: "Riyadh KSA",
  },
];

export const UsersTable = (): React.ReactElement => {
  return (
    <>
      <div className="w-full overflow-hidden overflow-x-scroll py-6">
        <table className="table-auto w-full min-w-[800px] text-left">
          <thead>
            <tr>
              {USER_TABLE_HEAD.map((data, index) => (
                <th
                  key={index}
                  className={`bg-boxOutline h-[46px] ${
                    index === 0 ? "pl-2 rounded-tl-2xl" : ""
                  } 
                     ${index === 1 ? "pl-2 " : ""}  ${
                    index === USER_TABLE_HEAD.length - 1
                      ? "pl-2 rounded-tr-2xl"
                      : ""
                  }`}
                >
                  <Typography className="text-SecondaryColor font-normal">
                    {data}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {USER_TABLE_ROW.map((data, index) => (
              <UserTableRow data={data} index={index} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
