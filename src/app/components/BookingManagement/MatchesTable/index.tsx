import { ActionsDropdown, TableWrapper, Typography } from "../../common";
import { MATCHES_TABLE_HEAD, MATCHES_TABLE_ROW } from "@/app/utils/data";
import { IAction } from "@/app/base/types";
import { LuEye } from "react-icons/lu";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

export const MatchesTable = () => {
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
    <TableWrapper TableHeadData={MATCHES_TABLE_HEAD}>
      {MATCHES_TABLE_ROW.map((data, index) => (
        <tr key={data.name} className="border-2 border-boxOutline">
          <td className="h-[40px] sm:h-[60px] border-r-[1px] border-boxOutline pl-3 ">
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              {index + 1}
            </Typography>
          </td>
          <td>
            <Typography
              variant="bodyRegular"
              className="text-SecondaryColor pl-3"
            >
              {data.name}
            </Typography>
          </td>
          <td>
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              {data.clubName}
            </Typography>
          </td>
          <td>
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              {data.matcheDate}
            </Typography>
          </td>
          <td>
            <div className="px-5 py-1 rounded-xl bg-PrimaryColor inline-flex justify-center items-center">
              <Typography variant="bodyMedium" className="text-SecondaryColor">
                {data.status}
              </Typography>
            </div>
          </td>
          <td>
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
  );
};
