import React from "react";
import { Tooltip } from "react-tooltip";

const HoverInfo = ({ text }) => {
  return (
    <div className="relative inline-block">
      <div
        data-tooltip-id="hover-tooltip"
        data-tooltip-content={text}
        className="w-4 h-4 ml-2 flex items-center justify-center bg-gray-500 text-white text-xs rounded-full cursor-pointer"
      >
        ?
      </div>
      <Tooltip
        id="hover-tooltip"
        place="top"
        type="dark"
        effect="solid"
        className="w-48 text-xs"
      />
    </div>
  );
};

export default HoverInfo;
