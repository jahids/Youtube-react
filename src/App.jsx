import { useEffect } from "react";
import usePlaylists from "./hooks/usePlaylists";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Component/navbar";

const App = () => {
  const { getPlaylistById, playlists, error, loading } = usePlaylists();
  // useEffect(() => {
  //   getPlaylistById("PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl");
  // }, []);

  console.log("Playlist from hook app", playlists);
  console.log(loading);
  console.log(error);

  return (
    <>
      <CssBaseline>
        <Navbar getPlaylistById={getPlaylistById} />
      </CssBaseline>
    </>
  );
};

export default App;
