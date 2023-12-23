import React from "react";
import { IoAddSharp } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useOptionContext } from "../context/UserContextApi";
import ColumnIcon from "./ColumnIcon";

const Column = ({ title, length }) => {
  const { dark, option2 } = useOptionContext();

  return (
    <div className={` text-[#8D8D8D] flex justify-between px-5 items-center `}>
      <div className=" flex gap-1  items-center">
        <ColumnIcon title={title} from={option2} />
        <span
          className={` text-sm md:text-base ${
            dark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </span>
        <span>{length}</span>
      </div>
      <div className="flex">
        <IoAddSharp size={20} />
        <HiOutlineDotsHorizontal size={20} />
      </div>
    </div>
  );
};

export default Column;
