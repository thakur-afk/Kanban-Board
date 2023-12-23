import React from "react";
import { useOptionContext } from "../context/UserContextApi";
import { IoCheckmarkDoneCircle as DoneIcon } from "react-icons/io5";
import { TbCircleDotted as BacklogIcon } from "react-icons/tb";
import Avatar from "react-avatar";
import { MdCancel as CancellIcon } from "react-icons/md";
import { LuCircle as TodoIcon } from "react-icons/lu";
import { TbProgressCheck as InProgressIcon } from "react-icons/tb";
import {
  BiDotsHorizontal as Signal0,
  BiSignal2 as Signal1,
  BiSignal3 as Signal2,
  BiSignal4 as Signal3,
} from "react-icons/bi";
import { AiOutlineWarning as Signal4 } from "react-icons/ai";

const ColumnIcon = ({ title, from, size, color }) => {
  //   const { option2 } = useOptionContext();

  if (from === "userId") {
    return <Avatar name={title} size="20" round />;
  } else if (from === "status") {
    if (title === "Backlog") {
      return <BacklogIcon color="red" />;
    } else if (title === "Todo") {
      return <TodoIcon color="gold" />;
    } else if (title === "In progress") {
      return <InProgressIcon size={20} color="green" />;
    } else if (title === "Done") {
      return <DoneIcon color="blue" size={20} />;
    } else if (title === "Cancelled") {
      return <CancellIcon color="red" size={20} />;
    }
  } else if (from === "priority") {
    console.log(title);
    if (title === "No Priority" || title === 0) {
      return <Signal0 size={18} />;
    } else if (title === "Low" || title === 1) {
      return <Signal1 size={18} />;
    } else if (title === "Mid" || title === 2) {
      return <Signal2 size={18} />;
    } else if (title === "High" || title === 3) {
      return <Signal3 size={18} />;
    } else if (title === "Urgent" || title === 4) {
      return <Signal4 color="orange" size={20} />;
    } else {
      return <Signal4 color="" />;
    }
  }
  return <div>ColumnIcon</div>;
};

export default ColumnIcon;
