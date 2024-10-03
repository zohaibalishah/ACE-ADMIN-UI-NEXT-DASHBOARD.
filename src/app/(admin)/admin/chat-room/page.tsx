import { MultiChat, SearchSection } from "@/app/components/ChatRoom";
import { ChatBox } from "@/app/components/ChatRoom/ChatBox";
import { Typography } from "@/app/components/common";
import React from "react";

const ChatRoomPage = () => {
  return (
    <>
      <div>
        <div className="grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
          <div className="md:col-span-1 xl:col-span-1">
            <div>
              <Typography variant="h5Bold" className="text-SecondaryColor">
                Chat room
              </Typography>
            </div>
            <SearchSection />
            <MultiChat />
          </div>
          <div className="md:col-span-1 xl:col-span-2">
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoomPage;
