import { BsThreeDots } from "react-icons/bs";
import { Typography } from "../../common";
import {
  MATCHES_TABLE_HEAD,
  MATCHES_TABLE_ROW,
  TABLE_HEAD,
  TABLE_ROWS,
} from "@/app/utils/data";
import { MatchesTableRow } from "./MatchesTableRow";

export const MatchesTable = () => {
  return (
    <div className="flex-1 overflow-hidden overflow-x-scroll">
      <table className="min-w-[700px] w-full table-auto text-left">
        <thead>
          <tr>
            {MATCHES_TABLE_HEAD.map((head, index) => (
              <th
                key={head}
                className={`py-3 bg-boxOutline ${index === 1 ? "pl-4 " : ""} ${
                  index === 0 ? "pl-2 rounded-tl-2xl" : ""
                }
                ${
                  index === MATCHES_TABLE_HEAD.length - 1
                    ? "rounded-tr-2xl"
                    : ""
                }`}
              >
                <Typography
                  variant="bodyRegular"
                  className="text-SecondaryColor font-normal"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {MATCHES_TABLE_ROW.map((data, index) => {
            return <MatchesTableRow data={data} key={index} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
