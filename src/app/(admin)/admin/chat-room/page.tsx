"use client";

import { MultiChat, SearchSection } from "@/app/components/ChatRoom";
import { ChatBox } from "@/app/components/ChatRoom/ChatBox";
import { Typography } from "@/app/components/common";
import React, { useState } from "react";

const ChatRoomPage = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <Typography variant="h5Bold" className="text-SecondaryColor">
        Chat room
      </Typography>
      <div className="grid gap-x-8 md:grid-cols-2 xl:grid-cols-3 mt-6">
        <div className="md:col-span-1">
          <SearchSection />
          <MultiChat setShow={setShow} />
        </div>
        <div
          className={`md:col-span-1 xl:col-span-2 fixed inset-0 md:static z-10 bg-bgBox md:bg-transparent transition-all duration-300 ${
            show
              ? "visible opacity-100 translate-x-0"
              : "invisible opacity-0 -translate-x-full md:visible md:opacity-100 md:translate-x-0"
          }`}
        >
          <ChatBox hideChat={() => setShow(false)} />
        </div>
      </div>
    </>
  );
};

export default ChatRoomPage;
