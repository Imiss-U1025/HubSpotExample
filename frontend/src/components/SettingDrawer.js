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
        <CloseIcon sx={{ fontSize: 30 }} />
      </div>
      <List>
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

        <div></div>
        <div></div>
        <div>
          <FormControl sx={{ px: 3, width: "100%" }} variant="outlined">
            <h2 className=" font-bold text-xl mt-6 mb-3">New Subject Line</h2>
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
      </List>
      <Divider />
      <List onClick={toggleDrawer(false)}></List>
    </Box>
  );

  return (
    <div>
      <button
        className=" bg-[#f67854] text-white py-2 px-3 font-bold border-[#425b76] rounded-md hover:bg-[#516f8f] min-w-[20%] mt-5 "
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
