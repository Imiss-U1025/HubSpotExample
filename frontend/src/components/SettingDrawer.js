import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

export default function SettingDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const setSchedule = (campaignId) => {
    toggleDrawer(true);
  };
  const DrawerList = (
    <Box sx={{ width: 450 }} role="presentation">
      <div class=" flex justify-between items-center px-11 bg-[#00bda5] bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className=" flex items-center min-h-[68px] py-1 ">
          <h2 className=" text-white text-[22px] font-bold">
            Schedule details
          </h2>
        </div>
        <CloseIcon sx={{ fontSize: 30 }} onClick={toggleDrawer(false)} />
      </div>
      <List sx={{ px: 3 }}>
        {/* {["Inbox", "Starred"].map((text, index) => ( */}
        {/* <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="sssssssss" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="bbbbbbbbbbb" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="aaaaaaaaaaa" />
          </ListItemButton>
        </ListItem> */}

        {/* ))} */}
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
            onClick={toggleDrawer(false)}
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
        onClick={toggleDrawer(true)}
      >
        Schedule
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}
