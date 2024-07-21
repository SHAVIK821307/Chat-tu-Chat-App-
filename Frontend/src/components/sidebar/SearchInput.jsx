import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <form className="upshadow1 p-2 flex gap-3">
      <div className="shadow1">
        <input type="text" placeholder="Search" />
      </div>
      <button className="circle text-center">
        <IoIosSearch className="mx-auto text-xl" />
      </button>
    </form>
  );
};

export default SearchInput;
