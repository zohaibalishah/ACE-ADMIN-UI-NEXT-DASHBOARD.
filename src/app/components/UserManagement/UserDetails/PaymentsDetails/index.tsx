import { Typography } from "@/app/components/common";
import { ReactElement } from "react";

export const PaymentDetails = (): ReactElement => {
  return (
    <div className="pt-3">
      <Typography variant="h5Bold" className="text-SecondaryColor pb-3">
        Payment Details
      </Typography>
      <div className="w-full overflow-hidden overflow-x-scroll">
        <div className="w-[1080px]">
          <div className="flex items-center bg-boxOutline text-SecondaryColor h-[46px] border-2 border-boxOutline rounded-tr-2xl rounded-tl-2xl px-2 ">
            <Typography className="w-[240px] text-SecondaryColor">
              Payment method
            </Typography>
            <Typography className="w-[240px] text-SecondaryColor">
              Card number
            </Typography>
            <Typography className="w-[240px] text-SecondaryColor">
              Expiry date
            </Typography>
            <Typography className="w-[240px] text-SecondaryColor">
              Billing address
            </Typography>
          </div>
          <div className="h-[60px] flex  px-2 border-2 border-boxOutline">
            <Typography className="w-[240px] text-SecondaryColor flex items-center">
              Credit card
            </Typography>
            <Typography className="w-[240px] text-SecondaryColor flex items-center">
              **** **** **** 1234
            </Typography>
            <Typography className="w-[240px] text-SecondaryColor flex items-center">
              12/25
            </Typography>
            <Typography className="w-[240px] text-SecondaryColor flex items-center">
              123 Main St, Riyadh, KSA
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
