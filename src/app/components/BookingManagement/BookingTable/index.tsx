import { BsThreeDots } from "react-icons/bs";
import { Typography } from "../../common";
import { TABLE_HEAD, TABLE_ROWS } from "@/app/utils/data";
import { TableRow } from "./TableRow";

export const BookingTable = () => {
  return (
    <div className="flex-1 overflow-hidden overflow-x-scroll">
      <table className="min-w-[800px] w-full table-auto text-left">
        <thead>
          <tr className="border-2 border-boxOutline bg-boxOutline">
            {TABLE_HEAD.map((head, index) => (
              <th
                key={head}
                className={`py-3 ${index === 1 ? "pl-4" : ""} ${
                  index === 0 ? "pl-2" : ""
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
          {TABLE_ROWS.map((data, index) => {
            return <TableRow data={data} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
