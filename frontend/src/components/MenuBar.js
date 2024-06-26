import React from "react";
import { NavLink } from "react-router-dom";
import HoverInfo from "../components/HoverInfo";

const MenuBar = () => {
  return (

    <div className="flex justify-between items-center px-10 py-3 border-b-2 border-gray-200 min-h-[60px] h-[60px]">
      <div className="flex flex-wrap items-center">
        {/* <PiFlask style={{ color: "#0091AE", fontSize: "1.5em" }} />
        <h3 className="text-[#0091AE] font-bold ">Create A/B test</h3> */}
        <HoverInfo text="After completing the necessary settings, click the Send button on the Setting page" />

      </div>
      <div className="flex justify-center border-gray-200">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink

                to="/authorize"
                className={({ isActive }) =>
                  isActive
                    ? "py-4 px-4 mb-0 font-semibold text-md h-[100%] border-b-4 border-[#ff7959] text-darkb"
                    : "py-4 px-4 mb-0 font-semibold text-md h-[100%]"
                }
              >
                Connect Hubspot
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mail-list"
                className={({ isActive }) =>
                  isActive
                    ? "py-4 px-4 mb-0 font-semibold text-md h-[100%] border-b-4 border-[#ff7959] text-darkb"
                    : "py-4 px-4 mb-0 font-semibold text-md h-[100%]"
                }
              >
                Email List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/guide"
                className={({ isActive }) =>
                  isActive
                    ? "py-4 px-4 mb-0 font-semibold text-md h-[100%] border-b-4 border-[#ff7959] text-darkb"
                    : "py-4 px-4 mb-0 font-semibold text-md h-[100%]"
                }
              >
                How to use
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
