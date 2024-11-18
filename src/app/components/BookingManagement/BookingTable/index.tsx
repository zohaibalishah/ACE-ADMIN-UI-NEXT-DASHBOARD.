import { BsThreeDots } from "react-icons/bs";
import { ActionsDropdown, TableWrapper, Typography } from "../../common";
import { TABLE_HEAD, TABLE_ROWS } from "@/app/utils/data";
import { LuEye } from "react-icons/lu";
import { IAction } from "@/app/base/types";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

export const BookingTable = () => {
  const actions: IAction[] = [
    {
      icon: <LuEye />,
      title: "View",
    },
    {
      icon: <BiEditAlt />,
      title: "Edit",
    },
    {
      icon: <AiOutlineDelete />,
      title: "Cancel",
    },
  ];
  return (
    <>
      <TableWrapper TableHeadData={TABLE_HEAD}>
        {TABLE_ROWS.map((data, index) => (
          <tr key={index} className="border-2 border-boxOutline text-nowrap">
            <td className="h-[40px] sm:h-[60px] border-r-[1px] border-boxOutline pl-3 ">
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {data.sno}
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <div className="flex items-center gap-x-3">
                <div className="w-[28px] h-[28.8px] sm:w-[36px] sm:h-[36.8px] rounded-full border-2 border-SecondaryColor flex items-center justify-center text-secondary font-normal text-sm">
                  {data.img}
                </div>
                <Typography
                  variant="bodyRegular"
                  className="text-SecondaryColor"
                >
                  {data.name}
                </Typography>
              </div>
            </td>
            <td className="px-3 text-nowrap">
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {data.clubName}
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {"Padel"}
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {data.bookingDate}
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <div className="px-5 py-1 rounded-xl bg-PrimaryColor inline-flex justify-center items-center">
                <Typography
                  variant="bodyMedium"
                  className="text-SecondaryColor"
                >
                  1/4 Confirmed
                </Typography>
              </div>
            </td>
            <td className="px-3 text-nowrap ">
              <Typography variant="bodyRegular" className="text-SecondaryColor">
                {data.location}
              </Typography>
            </td>
            <td className="border-boxOutline pl-3 relative">
              <ActionsDropdown actions={actions} />
            </td>
          </tr>
        ))}
      </TableWrapper>
    </>
  );
};
