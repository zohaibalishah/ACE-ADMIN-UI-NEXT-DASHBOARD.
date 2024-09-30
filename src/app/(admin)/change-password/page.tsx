import React from "react";
import { mImage } from "../../../../public/images";
import { icons } from "../../../../public/icons/index";
import { FiEye } from "react-icons/fi";
import Link from "next/link";
import { routes } from "@/app/utils/const";
import { MImage, PrimaryButton, Typography } from "@/app/components/common";
import { TextField } from "@/app/components/form";

const ChangPassword = (): React.ReactElement => {
  return (
    <>
      <section className="bg-bgDark pb-10 sm:pb-0">
        <div className="resContainer">
          <div className="flex flex-col md:flex-row">
            <div className="w-full ">
              <MImage
                src={mImage.loginBg}
                w={720}
                h={1024}
                alt="login"
                className=""
              />
            </div>

            <form className="w-full flex flex-col justify-center items-center  bg-bgBox text-SecondaryColor ">
              <div className=" flex flex-col justify-center items-center gap-y-3 md:gap-y-5">
                <MImage
                  src={icons.ACELogo}
                  w={136}
                  h={57}
                  alt="logo"
                  className="object-scale-down"
                />
                <div className="text-center">
                  <Typography variant="h4" className="sm:py-1">
                    Change Password
                  </Typography>
                  <Typography>
                    Change default password and set your own
                  </Typography>
                </div>
                <div className="flex flex-col gap-y-2 w-full lg:w-[457px]">
                  <TextField placeholder="New password" icon={<FiEye />} />
                  <TextField placeholder="Confirm password" icon={<FiEye />} />
                </div>
                <div className=" sm:py-4">
                  <Link href={routes.admin}>
                    <PrimaryButton
                      title="Update"
                      className="!w-[284px] md:!w-[280px] lg:!w-[457px] mt-1 md:mt-3"
                    />
                  </Link>
                </div>
                <div>
                  <Typography variant="bodyMedium">
                    Need help? Contact us at{" "}
                    <span className="text-PrimaryColor text-center">
                      contact@aceofficial.com
                    </span>
                  </Typography>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangPassword;
