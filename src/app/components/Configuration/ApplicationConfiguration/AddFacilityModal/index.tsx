import {
  MImage,
  Modal,
  PrimaryButton,
  Typography,
} from "@/app/components/common";
import { TextField } from "@/app/components/form";
import { icons } from "lucide-react";
import React, { SetStateAction, useState } from "react";

import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
export const AddFacilityModal = ({
  isOpen,
  setIsOpen,
}: IProps): React.ReactElement => {
  const [file, setFile] = useState(null);
  const handleChange = (file: React.SetStateAction<null>) => {
    setFile(file);
  };
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="w-full sm:w-[598px] !h-[355px] border-2 border-SecondaryColor/50 rounded-xl"
    >
      <div className="p-6 flex flex-col gap-y-4">
        <Typography variant="h5Bold" className="text-SecondaryColor">
          Add new facility
        </Typography>
        <TextField placeholder="Title of facility" />

        <div className="flex items-center justify-center w-full">
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          >
            <div className="w-full h-[78px] rounded-xl flex items-center justify-center cursor-pointer bg-bgBox border-2 border-dashed border-SecondaryColor/20 border-b-0 ">
              <div className="flex items-center justify-center gap-x-4">
                <MImage src={"/icons/upload.png"} w={24} h={24} alt="upload" />
                <Typography
                  variant="bodyMedium"
                  className="text-SecondaryColor"
                >
                  Upload icon
                </Typography>
              </div>
            </div>
          </FileUploader>
        </div>
        <div className="w-full mt-4">
          <PrimaryButton
            title="Add"
            className="w-full sm:w-[222px] h-[48px] "
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </Modal>
  );
};
