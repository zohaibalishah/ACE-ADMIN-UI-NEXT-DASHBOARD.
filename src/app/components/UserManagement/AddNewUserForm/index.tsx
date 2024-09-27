"use client";
import React, { useState } from "react";
import { UserManagmentCardSection } from "../UserCardSection";
import { DropDownMenu, PrimaryButton, Typography } from "../../common";
import { BsThreeDots } from "react-icons/bs";

export const AddNewUserForm = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [person, setPerson] = useState({
  //   name: "",
  //   email: "",
  //   phoneNumber: "",
  //   walletBalance: "",
  //   gender: "",
  //   location: "",
  // });

  // const handleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   const newPerson = {
  //     ...person,
  //     id: Date.now(),
  //   };
  //   console.log("person", newPerson);
  // };
  return (
    <>
      <div>
        <div className="py-3 md:pt-8 md:pb-4">
          <Typography variant="h5Bold" className="text-SecondaryColor">
            New Users
          </Typography>
        </div>
        <div className="w-full overflow-hidden overflow-x-scroll">
          <form className="w-[1080px]">
            <div className="text-white flex gap-x-2 text-start border-2 border-boxOutline rounded-tr-2xl rounded-tl-2xl bg-bgShadow p-3">
              <Typography className="w-[80px]">S no</Typography>

              <Typography className=" w-[170px]">Name</Typography>

              <Typography className="w-[220px] pl-3">Email</Typography>

              <Typography className="w-[180px]">Phone number</Typography>

              <Typography className="w-[130px]">Wallet balance</Typography>

              <Typography className="w-[90px]">Gender</Typography>

              <Typography className="w-[132px]">Location</Typography>
              <Typography className="pl-12 border-l-2 border-boxOutline">
                Action
              </Typography>
            </div>
            <div>
              <div>
                <div className="text-white flex items-center text-start border-[1px] border-boxOutline h-[60px] ">
                  <Typography
                    variant="bodyRegular"
                    className="w-[80px] h-full border-r-2 border-boxOutline flex items-center pl-2"
                  >
                    1
                  </Typography>

                  <div className="flex gap-x-2 items-center w-[170px] h-full pl-4">
                    <div className="w-[36px] h-[36.8px] border-[1px] border-SecondaryColor rounded-full flex justify-center items-center">
                      <Typography>IJ</Typography>
                    </div>
                    <Typography>Aqib Javid</Typography>
                  </div>

                  <Typography className="w-[220px] pl-3">
                    aqib.official@gmail.com
                  </Typography>

                  <Typography className="w-[180px]">+966148754306</Typography>

                  <Typography className="w-[130px]">SAR 100</Typography>

                  <Typography className="w-[90px]">Male</Typography>

                  <Typography className="w-[132px]">Jeddah, KSA</Typography>

                  <Typography
                    variant="h3"
                    className=" h-full flex justify-center items-center w-[100px] pl-8 border-l-[1px] border-boxOutline relative"
                  >
                    <button
                      className="cursor-pointer "
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      <BsThreeDots />
                      {isOpen && (
                        <div className="absolute top-4 right-0">
                          <DropDownMenu />
                        </div>
                      )}
                    </button>
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex justify-end py-3">
              <PrimaryButton title="Add" className="!w-[100px]" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

//---------------------------------------------------------------------//

{
  /* <div className="flex gap-x-4 justify-between items-center py-3">
          <input
            type="text"
            name="Name"
            className="w-[150px] bg-transparent"
            onChange={(event) =>
              setPerson({ ...person, name: event?.target?.value })
            }
          />
          <input
            type="text"
            name="Email"
            className="w-[150px]  bg-transparent"
            onChange={(event) =>
              setPerson({ ...person, email: event?.target?.value })
            }
          />
          <input
            type="text"
            name="PhoneNumber"
            className="w-[150px]  bg-transparent"
            onChange={(event) =>
              setPerson({ ...person, phoneNumber: event?.target?.value })
            }
          />
          <input
            type="text"
            name="WalletBalance"
            className="w-[80px]  bg-transparent"
            onChange={(event) =>
              setPerson({ ...person, walletBalance: event?.target?.value })
            }
          />
          <input
            type="text"
            name="Gender"
            className="w-[80px]  bg-transparent"
            onChange={(event) =>
              setPerson({ ...person, gender: event?.target?.value })
            }
          />
          <input
            type="text"
            name="Location"
            className="w-[150px]  bg-transparent"
            onChange={(event) =>
              setPerson({ ...person, location: event?.target?.value })
            }
          />
        </div> */
}
