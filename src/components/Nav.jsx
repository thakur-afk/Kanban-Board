import { useState } from "react";
import { VscSettings } from "react-icons/vsc";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
import { useOptionContext } from "../context/UserContextApi";

const Nav = () => {
  const { dark, setDark, setOption1, setOption2, setOption3, setFlag } =
    useOptionContext();

  const [displayOption, setDisplayOption] = useState(false);

  const handledisplay = () => {
    setDisplayOption(!displayOption);
  };

  return (
    <div
      className={`flex justify-between h-28 px-5 py-3 ${
        dark ? "dark" : ""
      } h-fit`}
    >
      <div>
        <div>
          <div>
            <div
              className=" cursor-pointer border  border-[#e6e7eb] flex items-center gap-2 shadow-lg rounded-md w-fit px-3 py-1"
              onClick={handledisplay}
            >
              <VscSettings />
              Display
              {displayOption ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div
              className={`px-4 mt-2 absolute border-[#e6e7eb] border bg-white py-4 rounded-md shadow-lg flex flex-col gap-3 ${
                displayOption ? "" : "hidden"
              } ${dark ? "dark" : ""}
              `}
            >
              <div className={`flex   items-center gap-10 `}>
                <h1>Grouping</h1>
                <select
                  value={localStorage.getItem("option2")}
                  onChange={(e) => {
                    setOption2(e.target.value);
                    localStorage.setItem("option2", e.target.value);
                    if (e.target.value === "userId") {
                      setOption1("users");
                      localStorage.setItem("option1", "users");
                      setFlag(false);
                    } else {
                      setOption1("tickets");
                      localStorage.setItem("option1", "tickets");
                      setFlag(true);
                    }
                    handledisplay();
                  }}
                  className={`${
                    dark ? "dark" : ""
                  } border-[#e6e7eb] border rounded-md  px-2`}
                >
                  <option value={"userId"}>User</option>
                  <option value={"status"}>Status</option>
                  <option value={"priority"}>Priority</option>
                </select>
              </div>
              <div className=" flex items-center gap-11">
                <h1>Ordering</h1>
                <select
                  value={localStorage.getItem("option3")}
                  onChange={(e) => {
                    setOption3(e.target.value);
                    localStorage.setItem("option3", e.target.value);
                    handledisplay();
                  }}
                  className={`${
                    dark ? "dark" : ""
                  } border-[#e6e7eb] border rounded-md px-2`}
                >
                  <option value={"title"}>Title</option>
                  <option value={"priority"}>Priority</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setDark(!dark)}
        className=" cursor-pointer flex justify-center items-center w-9"
      >
        {dark ? <WiDaySunny size={30} /> : <FaMoon size={15} />}
      </div>
    </div>
  );
};

export default Nav;
