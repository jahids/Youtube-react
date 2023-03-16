import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PlaylistForm from "../playlist-form";

export default function Navbar({ getPlaylistById }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getPlaylistId = (playlistId) => {
    // console.log(playlistId);
    getPlaylistById(playlistId);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" sx={{ py: 2 }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Testing api
              </Typography>
            </Stack>
            <Button onClick={handleClickOpen} variant="contained">
              Add playlist
            </Button>
            <PlaylistForm
              open={open}
              handleClose={handleClose}
              getPlaylistId={getPlaylistId}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
