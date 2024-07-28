import React from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
const Messages = () => {
  const { loading, messages } = useGetMessages();
  console.log(messages);
  useListenMessages();
  return (
    <div className="px-4 h-full flex-1 flex flex-col overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => <Message message={message}></Message>)}
      {/* <Message></Message> */}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
