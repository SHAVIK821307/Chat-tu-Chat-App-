import React from "react";

const Conversation = () => {
  return (
    <div className="p-2 border-b border-gray-700 border-dotted flex cursor-pointer">
      <div className="prof-shadow flex justify-center items-center rounded-full">
        <img
          src="https://img.freepik.com/free-photo/front-view-portrait-businessman-with-glasses_23-2148816831.jpg"
          className="w-11 h-11 rounded-full "
          alt="profile_image"
        />
      </div>
      <div className="flex flex-col flex-1 justify-center">
        <div className="p-2">
          <p className="font-bold text-gray-100">Shardul Vikram</p>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
