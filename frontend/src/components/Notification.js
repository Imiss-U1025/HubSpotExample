import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Notification(props) {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const content = props.content ? props.content : "";

  const handleClick = () => {
    setOpen(true);
    setMessage(content);
  };

  useEffect(() => {
    handleClick();
  }, [content]);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setMessage("");
  };

  return (
    <div>
      {content ? (
        <>
          <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{
                width: "100%",
                backgroundColor: "#f67854",
                color: "white",
              }}
            >
              {message}
            </Alert>
          </Snackbar>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
