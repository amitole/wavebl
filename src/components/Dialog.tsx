import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

interface DialogProps {
  status: boolean;
  open: () => void;
  parentName: string;
};

const DialogPage = (props: DialogProps) => {
  const [text, setText] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setText(event.target.value);
  };

  const handleClickSave = () => {
    console.log(text);
    setText("")
    props.open();
  };

  return (
    <Dialog open={props.status} onClose={props.open}>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          type="text"
          fullWidth
          variant="outlined"
          onChange={handleChange}
          defaultValue={props.parentName === 'edit' ? "Hello" : ""}
          placeholder="Some text..."
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.open}>Cancel</Button>
        <Button onClick={handleClickSave} disabled={!text}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogPage;
