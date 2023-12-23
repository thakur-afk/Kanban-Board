import React, { useEffect, useState } from "react";
import { useOptionContext } from "../context/UserContextApi";
import Card from "./Card";
import Column from "./Column";

const Display = () => {
  const [data, setData] = useState(null);

  const { option1, option2, option3, dark, flag } = useOptionContext();

  //   const option1 = "users";
  //   const option2 = "userId";
  //   const option3 = "title";
  //   const flag = false;
  //   const dark = false;

  useEffect(() => {
    console.log("inside");
    async function fetchData() {
      console.log("s");
      const res = await fetch(
        "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
      ).then((res) => res.json());
      if (res) {
        setData(res);
        console.log(option3);
        // console.log(data);
      }
    }
    fetchData();
  });

  return (
    <div className={` bg-[#F4F5F8] min-h-[92vh] ${dark ? "dark2" : ""} `}>
      {data ? (
        <div className="">
          <div className={`flex flex-col ${dark ? "dark2" : ""}`}>
            <div className="grid lg:grid-cols-5 px-4 gap-4 pt-3 md:grid-cols-3 sm:grid-cols-2 justify-center">
              {data[option1]
                ?.map((v) => (flag ? v[option2] : v))
                .sort()
                .filter((item, index, arr) =>
                  flag ? arr.indexOf(item) === index : true
                )
                .map((val, id) => {
                  let userId = val.id || val;

                  let user;
                  if (val === 0) {
                    user = "No Priority";
                  } else if (val === 1) {
                    user = "Low";
                  } else if (val === 2) {
                    user = "Mid";
                  } else if (val === 3) {
                    user = "High";
                  } else if (val === 4) {
                    user = "Urgent";
                  } else {
                    user = val.name || val;
                  }
                  const ticket = data?.tickets.filter(
                    (tick) => tick[option2] === userId
                  );
                  if (option3 === "priority") {
                    ticket.sort((a, b) => b.priority - a.priority);
                  } else {
                    ticket.sort((a, b) => {
                      let fa = a.title.toLowerCase(),
                        fb = b.title.toLowerCase();

                      if (fa < fb) {
                        return -1;
                      }
                      if (fa > fb) {
                        return 1;
                      }
                      return 0;
                    });
                  }

                  console.log(ticket);

                  return (
                    <div key={id} className=" flex flex-col gap-2 pt-4">
                      {/* <h1>
                        {user}
                        {ticket.length}
                      </h1> */}
                      <Column title={user} length={ticket.length} />
                      <div className="flex flex-col gap-4 pt-4 w-full">
                        {ticket.map((item, i) => (
                          <Card key={i} item={item} userData={data.users} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              {option2 === "status" ? (
                <div className=" flex flex-col gap-2 pt-4">
                  <Column title={"Done"} length={0} />
                </div>
              ) : (
                ""
              )}
              {option2 === "status" ? (
                <div className=" flex flex-col gap-2 pt-4">
                  <Column title={"Cancelled"} length={0} />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Display;
//flex gap-2 justify-between px-4 flex-wrap
