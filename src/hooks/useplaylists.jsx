const useplaylists = () => {
  const [state, setstate] = useState({
    playlists: {},
    recentPlaylists: [],
    favourite: [],
  });

  const getVideosByPlaylistId = async (playlistId) => {
    const result = await getPlayList(playlistId);
    setstate((prev) => ({
      ...prev,
      playlists: {
        ...prev.playlists,
        [playlistId]: result,
      },
    }));
  };

  const addToFavourite = async (playlistId) => {
    const result = await getPlayList(playlistId);
    setstate((prev) => ({
      ...prev,
      favourite: [...prev, playlistId],
    }));
  };

  const addToRecenet = async (playlistId) => {
    const result = await getPlayList(playlistId);
    setstate((prev) => ({
      ...prev,
      recentPlaylists: [...prev, playlistId],
    }));
  };

  const getPlaylistByIds = async (id = []) => {
    return ids.map((id) => state.playlists[id]);
  };

  return {
    playlists: state.playlists,
    favourite: getPlaylistByIds(state.favourite),
    recentPlaylists: getPlaylistByIds(state.recentPlaylists),
    getVideosByPlaylistId,
    addToFavourite,
    addToRecenet,
  };
};

export default useplaylists;
