import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {
  const [sendmsg,setSendMsg]=useState("")

  const {loading,sendMessage}=useSendMessage()

  const handleSubmit = async (e) => {
		e.preventDefault();
		if (!sendmsg) return;
		await sendMessage(sendmsg);
		setSendMsg(""); 
	};
  return (
    <form className=" p-2 flex gap-3" onSubmit={handleSubmit}>
      <div className="shadow1">
        <input type="text" placeholder="Search" value={sendmsg} onChange={(e)=>{
          setSendMsg(e.target.value)
        }} />
      </div>
      <button className="circle text-center" type="submit">
        <IoMdSend className="mx-auto text-xl" />
      </button>
    </form>
  );
};

export default MessageInput;
