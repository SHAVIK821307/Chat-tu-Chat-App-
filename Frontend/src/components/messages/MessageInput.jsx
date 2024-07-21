import React from "react";
import { IoMdSend } from "react-icons/io";
const MessageInput = () => {
  return (
    <form className=" p-2 flex gap-3">
      <div className="shadow1">
        <input type="text" placeholder="Search" />
      </div>
      <button className="circle text-center">
        <IoMdSend className="mx-auto text-xl" />
      </button>
    </form>
  );
};

export default MessageInput;
