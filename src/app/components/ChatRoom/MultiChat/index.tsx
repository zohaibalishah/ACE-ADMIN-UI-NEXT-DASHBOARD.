import React from "react";
import { SingleChat } from "./SingleChat";

export const MultiChat = (): React.ReactElement => {
  return (
    <div className="flex flex-col md:min-w-[310px] w-full">
      {Array.from({ length: 10 }).map((_, i) => (
        <SingleChat key={i} />
      ))}
    </div>
  );
};
