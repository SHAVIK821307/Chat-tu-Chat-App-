import React, { useRef,useEffect } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
const Messages = () => {
  const { loading, messages } = useGetMessages();
  // console.log(messages);
  useListenMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 h-full flex-1 flex flex-col overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message}></Message>
          </div>
        ))}
      {loading?<div className="m-auto flex gap-1">
            
            <div className="h-4 w-4 bg-green-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-4 w-4 bg-green-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-4 w-4 bg-green-400 rounded-full animate-bounce"></div>
          </div>:""}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
