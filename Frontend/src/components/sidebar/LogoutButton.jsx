import React from "react";
import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {
  return (
    <div className="upshadow1 p-2 mt-auto">
      <div className="flex gap-1 justify-center items-center cursor-pointer Logout">
        <CiLogout className="text-xl" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default LogoutButton;
