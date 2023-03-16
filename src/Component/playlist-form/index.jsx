import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function PlaylistForm({ open, handleClose, getPlaylistId }) {
  const [state, setState] = useState("");

  // checking url
  const handleSubmit = (e) => {
    if (!state) {
      alert("invalid state");
    } else {
      getPlaylistId(state);
      setState("");
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Play List</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new playlist plese insert the playlist id, playlist link..
          plese make sure the link is correct
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="playlist id or link"
          type="email"
          fullWidth
          variant="standard"
          onChange={(e) => setState(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add playlist</Button>
      </DialogActions>
    </Dialog>
  );
}
