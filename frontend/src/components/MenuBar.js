import React, { useState } from "react";
import { PiFlask } from "react-icons/pi";
import HoverInfo from "../components/HoverInfo";
import { Link, useNavigate, NavLink } from "react-router-dom";
import SendSchedulePage from "../pages/SendSchedulePage";

const MenuBar = () => {
  const [activeTab, setActiveTab] = useState("Send or Schedule");
  const tabs = ["Edit", "Settings", "Send or Schedule", "Automation"];
  const navigate = useNavigate();
  const EditClick = () => {
    navigate("/edit");
  };

  return (
    <div className="flex justify-between items-center px-10 py-3 border-b-2 border-gray-200">
      <div className="flex flex-wrap items-center">
        <PiFlask style={{ color: "#0091AE", fontSize: "1.5em" }} />
        <h3 className="text-[#0091AE] font-bold ">Create A/B test</h3>
        <HoverInfo text=" A/B testing compares two webpage versions to see which performs better in driving SEO and user engagement." />
      </div>
      <div className="flex justify-center border-gray-200">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/edit"
                end
                className={({ isActive }) =>
                  isActive
                    ? "py-4 px-8 mb-0 font-semibold text-md h-[100%] border-b-4 border-gray-600 text-darkb"
                    : "py-4 px-8 mb-0 font-semibold text-md h-[100%]"
                }
              >
                Edit
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/success"
                className={({ isActive }) =>
                    isActive
                    ? "py-4 px-8 mb-0 font-semibold text-md h-[100%] border-b-4 border-gray-600 text-darkb"
                    : "py-4 px-8 mb-0 font-semibold text-md h-[100%]"
                }
              >
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/send-schedule"
                className={({ isActive }) =>
                    isActive
                    ? "py-4 px-8 mb-0 font-semibold text-md h-[100%] border-b-4 border-gray-600 text-darkb"
                    : "py-4 px-8 mb-0 font-semibold text-md h-[100%]"
                }
              >
                Send or Schedule
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/automation"
                className={({ isActive }) =>
                    isActive
                    ? "py-4 px-8 mb-0 font-semibold text-md h-[100%] border-b-4 border-gray-600 text-darkb"
                    : "py-4 px-8 mb-0 font-semibold text-md h-[100%]"
                }
              >
                Automation
              </NavLink>
            </li>
          </ul>
        </nav>
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
  );
};
export default MenuBar;
