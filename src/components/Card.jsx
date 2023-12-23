import React from "react";
import { useOptionContext } from "../context/UserContextApi";
import { WiMoonFull } from "react-icons/wi";

import ColumnIcon from "./ColumnIcon";

const Card = ({ item, userData }) => {
  let username = userData.filter((v) => item.userId === v.id);
  username = username[0].name;

  const { dark, option1, option2 } = useOptionContext();
  return (
    <div
      className={` rounded-md flex flex-col gap-1 bg-white w-full  py-2 px-4 ${
        dark ? "dark" : ""
      }`}
    >
      <div className=" flex justify-between text-[#8D8D8D]">
        <h1>{item.id}</h1>
        <h2>
          {option1 === "users" ? (
            ""
          ) : (
            <ColumnIcon title={username} from="userId" />
          )}
        </h2>
      </div>
      <div className="flex gap-2 items-Start justify-start">
        <div
          className={`flex items-start justify-center ${
            option2 === "status" ? "hidden" : ""
          }`}
        >
          <div className={`flex items-center justify-center`}>
            <ColumnIcon
              title={item.status}
              from={"status"}
              size={20}
              color="yellow"
            />
          </div>
        </div>
        <span className=" text-sm font-semibold">{item.title}</span>
      </div>
      <div className="flex gap-2">
        <div
          className={`border-[#e6e7eb] border rounded-sm px-1 flex items-center justify-center ${
            option2 === "priority" ? "hidden" : ""
          }`}
        >
          <div className="flex items-center justify-center ">
            {<ColumnIcon title={item.priority} from={"priority"} size={18} />}
          </div>
        </div>
        <div className=" border-[#e6e7eb] border rounded-sm px-1 py-0">
          <span className=" text-[0.85rem] text-[#8D8D8D] text-center flex justify-center items-center gap-1">
            <WiMoonFull /> Feature Request
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
