import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useSelectedContext } from "../../context/SelectedContext";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const {selectedConversation}=useSelectedContext()
  const fromMe = message.senderId === authUser._id;
  return (
    <>
      {!fromMe ? (
        <div className="chat-message py-2">
          <div className="flex items-end">
            <img
              src={selectedConversation.profimg}
              alt="My profile"
              className="w-6 h-6 rounded-full "
            />
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#242424] text-gray-100">
                  {message.message}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="chat-message py-2 ">
          <div className="flex items-end justify-end">
            <img
              src={authUser.prof_pic}
              alt="My profile"
              className="w-6 h-6 rounded-full order-2"
            />
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-gray-100 text-[#242424] ">
                  {message.message}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
