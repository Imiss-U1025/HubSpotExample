import React, { useEffect, useState } from "react";
import { Grid, Paper, Container } from "@mui/material";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import Dns from "@mui/icons-material/Dns";
import Checkbox from "@mui/material/Checkbox";
import CommentIcon from "@mui/icons-material/Comment";
import axios from "axios";
import Notification from "../components/Notification";
import SettingDrawer from "../components/SettingDrawer";

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

const useStyles = {
  paper: {
    padding: "16px",
    textAlign: "center",
    color: "black",
  },
};






const apiUrl = process.env.REACT_APP_API_URL;
const CustomizedList = () => {
  const [open, setOpen] = React.useState(true);
  const [notification, setNotification] = useState("");
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get(`${apiUrl}/api/email/get-contacts?accessToken=${accessToken}`)
      .then((response) => {
        setContacts(response.data.contacts);
      })
      .catch((error) => {
        setNotification(`Error: ${error?.message || "Unknown error occurred"}`);
      });
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "#ffffff" },
            background: { paper: "#ff7959" },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: "100%", width: "100%" }}>
          <FireNav component="nav" disablePadding>
            <Divider />
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemText
                  primary="All contact list"
                  primaryTypographyProps={{
                    color: "primary",
                    fontWeight: "medium",
                    variant: "body2",
                    fontSize: "20px"
                  }}
                />
              </ListItemButton>
              <Tooltip title="Project Settings">
                <IconButton
                  size="large"
                  sx={{
                    "& svg": {
                      color: "rgba(255,255,255,0.8)",
                      transition: "0.2s",
                      transform: "translateX(0) rotate(0)",
                    },
                    "&:hover, &:focus": {
                      bgcolor: "unset",
                      "& svg:first-of-type": {
                        transform: "translateX(-4px) rotate(-20deg)",
                      },
                      "& svg:last-of-type": {
                        right: 0,
                        opacity: 1,
                      },
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      height: "80%",
                      display: "block",
                      left: 0,
                      width: "1px",
                      bgcolor: "divider",
                    },
                  }}
                >
                  <Settings />
                  <ArrowRight
                    sx={{ position: "absolute", right: 4, opacity: 0 }}
                  />
                </IconButton>
              </Tooltip>
            </ListItem>
            <Divider />
            <Box
              sx={{
                bgcolor: open ? "#fffffff2" : null,
                pb: open ? 2 : 0,
                maxHeight: "490px", overflowY:"auto" 
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Recipients"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                    color: "#33465b"
                  }}
                  secondary="Name, Company, Email Address"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                    color: "#e5764a"
                  }}
                />
              </ListItemButton>
              {open &&
                contacts.map((item) => (
                  <ListItemButton
                    key={item.id}
                    sx={{ py: 0, minHeight: 32, color: "#33465b", "&:hover": { backgroundColor: "#28385514" } }}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      <People />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${item.firstName} ${item.lastName}`}
                      secondary={`${item.company} - ${item.email}`}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                      secondaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                        color: "#33465b"
                      }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
      <Notification content={notification} />
    </Box>
  );
};

const RightList = (props) => {
  const [checked, setChecked] = useState([]);
  const [nonopeners, SetNonopeners] = useState([]);
  const [notification, setNotification] = useState("");

  const campaignId = props.campaignId;
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get(
        `${apiUrl}/api/email/get-non-openers?accessToken=${accessToken}&campaignId=${campaignId}`
      )
      .then((response) => {
        SetNonopeners(response.data);
        const allChecked = response.data.map((_, index) => index);
        setChecked(allChecked);
      })
      .catch((error) => {
        console.log(error);
        setNotification(`Error: ${error?.message || "Unknown error occurred"}`);
      });
  }, [campaignId]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper", maxHeight: "416px", overflowY:"auto"  }}>
      {nonopeners.map((email, index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem key={index} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(index)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(index) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${email}`} />
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
        );
      })}
      <Notification content={notification} />
    </List>
  );
};

const EmailCampaign = (props) => {
  const [open, setOpen] = React.useState(true);
  const [notification, setNotification] = useState("");
  const [emailcampaigns, SetEmailCampaigns] = useState([]);
  const [campaignStatus, SetCampaignStatus] = useState([]);

  const SetCampaignId = props.SetCampaignId;

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    axios
      .get(`${apiUrl}/api/email/get-email-campaigns?accessToken=${accessToken}`)
      .then((response) => {
        console.log(response.data);
        SetEmailCampaigns(response.data.emailCampaigns);
        SetCampaignStatus(response.data.campaignStatus);
      })
      .catch((error) => {
        console.log(error);
        setNotification(`Error: ${error?.message || "Unknown error occurred"}`);
      });
  }, []);

  const handleClick = (campaignId) => {
    SetCampaignId(campaignId);
    localStorage.setItem("campaignId", campaignId);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "#ffffff" },
            background: { paper: "#273343" },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: "100%", width: "100%" }}>
          <FireNav component="nav" disablePadding>
            <Divider />
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemText
                  primary="Email Campaign list"
                  primaryTypographyProps={{
                    color: "primary",
                    fontWeight: "medium",
                    variant: "body2",
                    fontSize: "20px"
                  }}
                />
              </ListItemButton>
              <Tooltip title="Project Settings">
                <IconButton
                  size="large"
                  sx={{
                    "& svg": {
                      color: "rgba(255,255,255,0.8)",
                      transition: "0.2s",
                      transform: "translateX(0) rotate(0)",
                    },
                    "&:hover, &:focus": {
                      bgcolor: "unset",
                      "& svg:first-of-type": {
                        transform: "translateX(-4px) rotate(-20deg)",
                      },
                      "& svg:last-of-type": {
                        right: 0,
                        opacity: 1,
                      },
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      height: "80%",
                      display: "block",
                      left: 0,
                      width: "1px",
                      bgcolor: "divider",
                    },
                  }}
                >
                  <Settings />
                  <ArrowRight
                    sx={{ position: "absolute", right: 4, opacity: 0 }}
                  />
                </IconButton>
              </Tooltip>
            </ListItem>
            <Divider />
            <Box
              sx={{
                bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                pb: open ? 2 : 0,
                maxHeight: "360px", overflowY:"auto"
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Email Campaign List"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                  }}
                  secondary="Name, EmailCampaign Id, Campaign Id"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                />
              </ListItemButton>
              {open &&
                emailcampaigns.map((item, index) => (
                  <ListItemButton
                    key={item.id}
                    sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                    onClick={() => handleClick(item.allEmailCampaignIds)}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      <Dns />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${item.name}`}
                      secondary={`${item.allEmailCampaignIds} - ${
                        item.id
                      } : Opened ${
                        campaignStatus[index].open
                          ? campaignStatus[index].open
                          : "0"
                      } of ${campaignStatus[index].sent}`}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
      <Notification content={notification} />
    </Box>
  );
};

const Campaign = () => {
  const [notification, setNotification] = useState("");
  const [campaign, setCampaign] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    axios
      .get(`${apiUrl}/api/email/get-campaigns?accessToken=${accessToken}`)
      .then((response) => {
        setCampaign(response.data);
      })
      .catch((error) => {
        console.log(error);
        setNotification(`Error: ${error?.message || "Unknown error occurred"}`);
      });
  }, []);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper", maxHeight: "416px", overflowY:"auto" }}>
      {campaign.map((contact, index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem key={index} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(index)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(index) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={`${contact.id} ${contact.appId} ${contact.appName}`}
              />
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
        );
      })}
      <Notification content={notification} />
    </List>
  );
};

function EmailList() {
  const classes = useStyles;
  const [notification, setNotification] = useState("");
  const [campaignId, SetCampaignId] = useState(
    localStorage.getItem("campaignId")
  );
  const setSchedule = (campaignId) => {
    console.log(campaignId);
  };
  useEffect(() => {
    console.log("sqqweqweqwe");
    axios
      .get(`${apiUrl}/api/auth/reauthorize`)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("accessToken", response.data);
      })
      .catch((error) => {
        console.log(error);
        setNotification(`Error: ${error?.message || "Unknown error occurred"}`);
      });
  }, [campaignId]);

  return (
    <div className="flex-1 bg-[#f5f8fa]">
      <Container sx={{ padding: "4rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Paper style={classes.paper}>
              <h1 className="mt-5 text-2xl font-bold mb-5">Contact List</h1>
              <CustomizedList />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper style={classes.paper} sx={{height:"100%", display: "flex", flexDirection:"column", justifyContent:"space-between"}}>
              <h1 className="mt-5 text-2xl font-bold mb-5">Non-Opener Lists</h1>
              <RightList campaignId={campaignId} />
              <SettingDrawer/>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} sm={6} md={6} >
            <Paper style={classes.paper} sx={{height:"100%"}}>
              <h1 className="mt-5 text-2xl font-bold mb-5">
                Mail Campaign List
              </h1>
              <EmailCampaign SetCampaignId={SetCampaignId} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper style={classes.paper}>
              <h1 className="mt-5 text-2xl font-bold mb-5">Campaign Lists</h1>
              <Campaign />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Notification content={notification} />
    </div>
  );
}

export default EmailList;
