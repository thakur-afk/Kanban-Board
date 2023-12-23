import { createContext, useContext, useState } from "react";
export const OptionContext = createContext();

export const OptionContextProvider = ({ children }) => {
  const [option1, setOption1] = useState("users");
  const [option2, setOption2] = useState("userId");
  const [option3, setOption3] = useState("priority");
  const [dark, setDark] = useState(false);
  const [flag, setFlag] = useState(false);

  window.onload = function () {
    const op1 = localStorage.getItem("option1");
    if (op1 !== "null" && op1.length > 0) {
      setOption1(op1);
      if (op1 === "users") {
        setFlag(false);
      } else {
        setFlag(true);
      }
    }
    const op2 = localStorage.getItem("option2");
    if (op2 !== "null" && op2.length > 0) {
      setOption2(op2);
    }

    const op3 = localStorage.getItem("option3");

    if (op3 !== "null" && op3.length > 0) {
      console.log(op3);
      setOption3(op3);
    }
  };

  return (
    <OptionContext.Provider
      value={{
        option1,
        option2,
        option3,
        dark,

        setOption1,
        setOption2,
        setOption3,
        setDark,
        setFlag,

        flag,
      }}
    >
      {children}
    </OptionContext.Provider>
  );
};

export const useOptionContext = () => useContext(OptionContext);
