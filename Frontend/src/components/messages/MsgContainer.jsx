import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
const MsgContainer = () => {
  const selectedConversation = false;
  return (
    <div className="col-span-2 bg-zinc-900  p-3 flex flex-col gap-3 h-full rounded-r-[32px]">
      <div className=" flex flex-col h-[550px] upshadow1 p-2 gap-3">
        {!selectedConversation ? (
          <NoChatSelected></NoChatSelected>
        ) : (
          <>
            <div className="bg-[#242424] p-4 rounded-[12px]">
              <span className="label-text">To: </span>
              <span className="text-gray-100 font-bold">John doe</span>
            </div>
            <Messages></Messages>
            <MessageInput></MessageInput>
          </>
        )}
      </div>
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-100 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Shardul ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MsgContainer;
