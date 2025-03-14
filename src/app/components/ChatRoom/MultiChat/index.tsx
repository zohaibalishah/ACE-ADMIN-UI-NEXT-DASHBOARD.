import React from "react";
import { SingleChat } from "./SingleChat";

export const MultiChat = ({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}): React.ReactElement => {
  return (
    <div className="flex flex-col gap-5 md:min-w-[310px] w-full lg:h-[66vh] overflow-y-auto">
      {Array.from({ length: 10 }).map((_, i) => (
        <SingleChat key={i} openChat={() => setShow(true)} />
      ))}
    </div>
  );
};
