import { clubManagementIcons } from "../../../../../public/icons/clubManagementIcons";
import { MImage } from "../MImage";
import { Typography } from "../Typography";

export const TablePagination = () => {
  return (
    <div className="mt-32 flex justify-end items-end">
      <div className="flex items-center justify-end gap-x-3">
        <Typography className="text-SecondaryColor">
          Showing 1-10 out of 102
        </Typography>
        <div className="flex items-center gap-x-3">
          <MImage
            src={clubManagementIcons.iconBack}
            w={30}
            h={30}
            alt="btnBack"
          />
          <MImage
            src={clubManagementIcons.iconNext}
            w={30}
            h={30}
            alt="btnnext"
          />
        </div>
      </div>
    </div>
  );
};
