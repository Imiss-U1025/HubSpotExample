import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import Notification from "../components/Notification";

export default function SettingDrawer() {
  const [open, setOpen] = useState(false);
  const [subjectline, SetSubjectLine] = useState("");
  const [delaytime, SetDelayTime] = useState("");
  const [notification, setNotification] = useState("");

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const handleSubjectLine = (event) => {
    SetSubjectLine(event.target.value);
  };
  const handleDelayTime = (event) => {
    SetDelayTime(event.target.value);
  };

  const setSchedule = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    toggleDrawer(false);

    const customData = {
      subjectline: subjectline,
      delaytime: delaytime,
    };
    console.log(customData);

    axios
      .post(`${apiUrl}/api/email/send-non-openers`, customData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setNotification(`Error: ${error?.message || "Unknown error occurred"}`);
      });
  };

  const DrawerList = (
    <Box sx={{ width: 450 }} role="presentation">
      <div className=" flex justify-between items-center px-11 bg-[#00bda5] bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className=" flex items-center min-h-[68px] py-1 ">
          <h2 className=" text-white text-[22px] font-bold">
            Schedule details
          </h2>
        </div>
        <CloseIcon sx={{ fontSize: 30 }} onClick={() => toggleDrawer(false)} />
      </div>
      <List sx={{ px: 3 }}>
        <div className="py-2">
          <div className="text-[16px] font-bold text-[#3a536d]">
            Current Email name
          </div>
          <p>Get to know us better</p>
        </div>
        <div className="py-2">
          <div className="text-[16px] font-bold text-[#3a536d]">Subject</div>
          <p>Get to know us better</p>
        </div>
        <div className="py-2">
          <div className="text-[16px] font-bold text-[#3a536d]">Recipients</div>
          <p>Get to know us better</p>
        </div>
        <div className="py-2">
          <div className="text-[16px] font-bold text-[#3a536d]">Open rate</div>
          <p>o of 5</p>
        </div>
        <div className="py-2">
          <div className="text-[16px] font-bold text-[#3a536d]">
            Internal HubSpot IDs
          </div>
          <p>330302303</p>
        </div>
        <div className="py-2">
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <h2 className=" font-bold text-xl mt-6 mb-3 text-[#3a536d]">
              Subject Line
            </h2>
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder="Input New subject Line"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              sx={{ height: "50px" }}
              value={subjectline}
              onChange={handleSubjectLine}
            />
          </FormControl>
        </div>
        <div className="flex flex-wrap items-center my-5">
          <span className="text-md text-[#30445a] font-semibold mt-4">
            Resend after{" "}
          </span>
          <input
            type="number"
            className=" min-h-10 min-w-20 w-36 block mx-4 px-2 mt-2 border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            value={delaytime}
            onChange={handleDelayTime}
          />

          <span className="text-md font-semibold mt-4 text-[#30445a] ">
            {" "}
            hours
          </span>
        </div>
      </List>
      <Divider />
      <List>
        <div className=" flex justify-center items-center">
          <button
            className=" bg-[#f67854] text-white py-3 px-4 font-bold border-[#425b76] rounded-md hover:bg-[#516f8f] min-w-[20%] mt-5 mb-4 "
            // onClick={toggleDrawer(false)}
            onClick={setSchedule}
          >
            Set the Schedule
          </button>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <button
        className=" bg-[#f67854] text-white py-2 px-3 font-bold border-[#425b76] rounded-md hover:bg-[#516f8f] min-w-[20%] mt-5 mb-4 "
        onClick={() => toggleDrawer(true)}
      >
        Schedule
      </button>
      <Drawer open={open} onClose={() => toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
      <Notification content={notification} />
    </div>
  );
}
