import React, { useState } from "react";
import { PiFlask } from "react-icons/pi";
import SendSchedule from "../pages/SendSchedule";
import HoverInfo from "./HoverInfo";

const MenuBar = () => {
  const [activeTab, setActiveTab] = useState("Send or Schedule");
  const tabs = ["Automation", "Send or Schedule", "Edit", "Settings"];

  return (
    <div className="w-full  ">
      <div className="flex justify-between items-center px-10 border-b-2 border-gray-200">
        <div className="flex flex-wrap items-center">
          <PiFlask style={{ color: "#0091AE", fontSize: "1.5em" }} />
          <h3 className="text-[#0091AE] font-bold ">Create A/B test</h3>
          <HoverInfo text=" A/B testing compares two webpage versions to see which performs better in driving SEO and user engagement." />
        </div>
        <div className="flex justify-center border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-4 px-8 mb-0 font-semibold text-md h-[100%] ${
                activeTab === tab ? "border-b-4 border-darkb text-darkb" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div>
          <button className="min-w-[8%] h-[100%] mr-5 p-2 border-[1.5px] border-[#CBD6E2] bg-[#EAF0F5] rounded-sm text-[#4F6E91] text-sm">
            Send Email
          </button>
          <button className="min-w-[8%] h-[100%] mr-5 p-2 border-[1.5px] border-[#CBD6E2] bg-[#EAF0F5] rounded-sm text-[#4F6E91] text-sm">
            Actions
          </button>
        </div>
      </div>
      <div className="">
        {activeTab === "Automation" && <div>Content for Automation</div>}
        {activeTab === "Send or Schedule" && <SendSchedule />}
        {activeTab === "Edit" && <div>Content for Edit</div>}
        {activeTab === "Settings" && <div>Content for Settings</div>}
      </div>
    </div>
  );
};

export default MenuBar;
