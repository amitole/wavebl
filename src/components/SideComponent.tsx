import React, { useState } from "react";
import Button from "@mui/material/Button";
import DialogPage from "./Dialog";

interface SideContainerProps {
  name: string;
};

const SideContainer = (props: SideContainerProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="side-container">
      <Button variant="contained" onClick={handleClickOpen}>{props.name}</Button>
      <DialogPage status={open} open={handleClose} parentName={props.name} />
    </div>
  );
};

export default SideContainer;
