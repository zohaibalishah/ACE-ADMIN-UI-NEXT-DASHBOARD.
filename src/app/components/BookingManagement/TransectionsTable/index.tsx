import { Transaction } from "@/lib/interfaces";
import { clubManagementIcons } from "../../../../../public/icons/clubManagementIcons";
import { MImage, TableWrapper, Typography } from "../../common";



interface TransectionsTableProps {
  data: Transaction[];
}

export const TransectionsTable: React.FC<TransectionsTableProps> = ({ data }) => {
  const TRANSECTIONS_TABLE_HEAD = [
    'S no',
    'Type',
    'User Name',
    'Club name',
    'Amount',
    'Type',
    'Date',
    'Status',
    'Action',
  ];

  return (
    <TableWrapper TableHeadData={TRANSECTIONS_TABLE_HEAD}>
      {data && data.map((tr, index) => (
        <tr key={index} className="border-2 border-boxOutline">
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
              {tr.type}
            </Typography>
          </td>
          <td>
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              {tr.user?.name}
            </Typography>
          </td>
          <td>
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              {tr.club?.name}
            </Typography>
          </td>
          <td>
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              {tr.amount}
            </Typography>
          </td>
          <td>
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              {tr.status}
            </Typography>
          </td>
          <td>
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              {tr.createdAt}
            </Typography>
          </td>
          <td>
            <Typography variant="bodyRegular" className="text-SecondaryColor">
              {tr.paymentMethod}
            </Typography>
          </td>
          <td className="w-[100px] border-l-[1px] border-boxOutline pl-3">
            <div className="flex items-center gap-x-2">
              <MImage
                src={clubManagementIcons.iconPreview}
                w={24}
                h={24}
                alt="preview"
              />
              <Typography variant="bodyMedium" className="text-SecondaryColor">
                View
              </Typography>
            </div>
          </td>
        </tr>
      ))}
    </TableWrapper>
  );
};
