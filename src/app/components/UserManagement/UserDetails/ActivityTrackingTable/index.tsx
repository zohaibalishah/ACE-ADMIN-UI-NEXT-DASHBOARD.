import { Typography } from "@/app/components/common";
import {
  ACTIVITY_TRACKING_TABLE_HEAD,
  ACTIVITY_TRACKING_TABLE_ROW,
} from "@/app/utils/data";
import React from "react";
import { ActivityTableRow } from "./ActivityTableRow";

export const AcitivityTrackingTable = (): React.ReactElement => {
  return (
    <>
      <div>
        <Typography variant="h5Bold" className="text-SecondaryColor">
          Activity tracking
        </Typography>
        <div className="py-3 w-full overflow-hidden overflow-x-scroll">
          <table className="table-auto w-full text-left min-w-[600px]">
            <thead>
              <tr>
                {ACTIVITY_TRACKING_TABLE_HEAD.map((head, index) => {
                  return (
                    <th
                      key={index}
                      className={`bg-boxOutline h-[46px] ${
                        index === 0 ? "rounded-tl-2xl pl-2" : ""
                      } ${index === 1 ? " pl-2" : ""} 
                    ${
                      index === ACTIVITY_TRACKING_TABLE_HEAD.length - 1
                        ? "rounded-tr-2xl"
                        : ""
                    }`}
                    >
                      <Typography className="text-SecondaryColor font-normal">
                        {head}
                      </Typography>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {ACTIVITY_TRACKING_TABLE_ROW.map((data, index) => (
                <ActivityTableRow data={data} key={index} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
