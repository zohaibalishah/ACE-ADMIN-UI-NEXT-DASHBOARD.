"use client";
import React from "react";
import { MImage, PrimaryButton, Typography } from "../common";
import { mImage } from "../../../../public/images";
import { icons } from "../../../../public/icons/index";
import { TextField } from "../form";
import { FiEye } from "react-icons/fi";
import Link from "next/link";
import { routes } from "@/app/utils/const";

export const LoginPage = (): React.ReactElement => {
  return (
    <>
      <section className="bg-bgDark pb-10 sm:pb-0">
        <div className="resContainer">
          <div className="flex flex-col md:flex-row xl:flex-row">
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
              <div className=" flex flex-col justify-center items-center md:gap-y-5">
                <MImage
                  src={icons.ACELogo}
                  w={136}
                  h={57}
                  alt="logo"
                  className="object-scale-down shrink-0 pt-2"
                />
                <div className="text-center py-1">
                  <Typography variant="h4" className="py-1">
                    Welcome Back, login
                  </Typography>
                  <Typography>
                    Login to admin dashboard to see and mange app
                  </Typography>
                  and court owner
                </div>
                <div className="flex flex-col gap-y-2">
                  <TextField
                    placeholder="Email"
                    className="w-full lg:!w-[457px]"
                  />
                  <div>
                    <TextField placeholder="Password" icon={<FiEye />} />
                    <Link href={routes.changepassword}>
                      <Typography>Forget Password?</Typography>
                    </Link>
                  </div>
                </div>
                <div className="py-2 xl:py-4">
                  <Link href={routes.admin}>
                    <PrimaryButton
                      title="Login"
                      className="!w-[250px] md:!w-[27s0px] lg:!w-[457px] mt-1 sm:mt-3"
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
