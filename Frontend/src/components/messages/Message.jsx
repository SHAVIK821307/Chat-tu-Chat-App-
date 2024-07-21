import React from "react";

const Message = () => {
  return (
    <>
      <div className="chat-message py-2">
        <div className="flex items-end">
          <img
            src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
            alt="My profile"
            className="w-6 h-6 rounded-full "
          />
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#242424] text-gray-100">
                Can be verified on any platform using docker
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="chat-message py-2 ">
         <div class="flex items-end justify-end">
            <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-2"/>
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 items-end">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-gray-100 text-[#242424] ">Your error message says permission denied, npm global installs must be given root privileges.</span></div>
            </div>
         </div>
      </div> */}
    </>
  );
};

export default Message;
