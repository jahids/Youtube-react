// import { useState } from "react";
// import getPlayList from "../api";

// const useplaylists = () => {
//   const [state, setstate] = useState({
//     playlists: {},
//     recentPlaylists: [],
//     favourite: [],
//   });

//   console.log("---", state.playlists);

//   const getPlaylistById = async (playlistId, force = false) => {
//     // request optimaization

//     if (state.playlists[playlistId] && !force) {
//       return;
//     }
//     try {
//       const result = await getPlayList(playlistId);
//     } catch (error) {
//       console.log(error)
//     }

//     // mapping specific item
//     let cid, ct;
//     result = result.map((item) => {
//       const {
//         channelId,
//         title,
//         description,
//         thumbnail: { medium },
//         channelTitle,
//       } = item.snippet;

//       if (!cid) {
//         cid = channelId;
//       }

//       if (!ct) {
//         ct = channelTitle;
//       }

//       return {
//         channelId,
//         title,
//         description,
//         thumbnail: medium,
//         channelTitle,
//         contentDetails: item.contentDetails,
//       };
//     });

//     setstate((prev) => ({
//       ...prev,
//       playlists: {
//         ...prev.playlists,
//         [playlistId]: {
//           items: result,
//           playlistId: playlistId,
//           channelId: cid,
//           channelTitle: ct,
//         },
//       },
//     }));
//   };

//   const addToFavourite = async (playlistId) => {
//     const result = await getPlayList(playlistId);
//     setstate((prev) => ({
//       ...prev,
//       favourite: [...prev, playlistId],
//     }));
//   };

//   const addToRecenet = async (playlistId) => {
//     const result = await getPlayList(playlistId);
//     setstate((prev) => ({
//       ...prev,
//       recentPlaylists: [...prev, playlistId],
//     }));
//   };

//   const getPlaylistByIds = async (ids = []) => {
//     return ids.map((id) => state.playlists[id]);
//   };

//   return {
//     playlists: state.playlists,
//     favourite: getPlaylistByIds(state.favourite),
//     recentPlaylists: getPlaylistByIds(state.recentPlaylists),
//     getPlaylistById,
//     addToFavourite,
//     addToRecenet,
//   };
// };

// export default useplaylists;

import { useState } from "react";
import getPlaylist from "../api";

const usePlaylists = () => {
  const [state, setState] = useState({
    playlists: {},
    recentPlaylists: [],
    favorites: [],
  });

  const getPlaylistById = async (playlistId, force = false) => {
    if (state.playlists[playlistId] && !force) {
      return;
    }

    let result = await getPlaylist(playlistId);

    let cid, ct;

    result = result.map((item) => {
      const {
        channelId,
        title,
        description,
        thumbnails: { medium },
        channelTitle,
      } = item.snippet;

      if (!cid) {
        cid = channelId;
      }

      if (!ct) {
        ct = channelTitle;
      }

      return {
        title,
        description,
        thumbnail: medium,
        contentDetails: item.contentDetails,
      };
    });

    setState((prev) => ({
      ...prev,
      playlists: {
        ...prev.playlists,
        [playlistId]: {
          items: result,
          playlistId: playlistId,
          channelId: cid,
          channelTitle: ct,
        },
      },
    }));
  };

  const addToFavorites = (playlistId) => {
    setState((prev) => ({
      ...prev,
      favorites: [...prev, playlistId],
    }));
  };

  const addToRecent = (playlistId) => {
    setState((prev) => ({
      ...prev,
      recentPlaylists: [...prev, playlistId],
    }));
  };

  const getPlaylistsByIds = (ids = []) => {
    return ids.map((id) => state.playlists[id]);
  };

  return {
    playlists: state.playlists,
    favorites: getPlaylistsByIds(state.favorites),
    recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
    getPlaylistById,
    addToRecent,
    addToFavorites,
  };
};

export default usePlaylists;
