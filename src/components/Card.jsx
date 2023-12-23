import React from "react";
import { useOptionContext } from "../context/UserContextApi";
import Avatar from "react-avatar";
import { WiMoonFull } from "react-icons/wi";
import {
  LuCircleDashed as BacklogIcon,
  LuCircle as TodoIcon,
} from "react-icons/lu";
import { TbProgressCheck as InProgressIcon } from "react-icons/tb";

import {
  BiSignal1,
  BiDotsHorizontal as Signal0,
  BiSignal2 as Signal1,
  BiSignal3 as Signal2,
  BiSignal4 as Signal3,
} from "react-icons/bi";
import { AiTwotoneWarning as Signal4 } from "react-icons/ai";
import ColumnIcon from "./ColumnIcon";

const Card = ({ item, userData }) => {
  let username = userData.filter((v) => item.userId === v.id);
  console.log(username);
  username = username[0].name;

  const { dark, option1, option2 } = useOptionContext();
  // let Signal;
  // if (item.priority === 0) {
  //   Signal = Signal0;
  // } else if (item.priority === 1) {
  //   Signal = Signal1;
  // } else if (item.priority === 2) {
  //   Signal = Signal2;
  // } else if (item.priority === 2) {
  //   Signal = Signal2;
  // } else if (item.priority === 3) {
  //   Signal = Signal3;
  // } else if (item.priority === 4) {
  //   Signal = Signal4;
  // }

  // let StatusIcon;

  // if (item.status === "Backlog") {
  //   StatusIcon = BacklogIcon;
  // } else if (item.status === "Todo") {
  //   StatusIcon = TodoIcon;
  // } else if (item.status === "In progress") {
  //   StatusIcon = InProgressIcon;
  // }
  return (
    <div
      className={` rounded-md flex flex-col gap-1 bg-white  max-w-[270px] py-2 px-4 ${
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
