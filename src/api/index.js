import axios from "axios";

const key = `AIzaSyAd4HCev6UKhhxXw0sN3fibYmohoeN1yyg`;
// const key = ;
// &nextPageToken=EAAaBlBUOkNESQ
// console.log(import.meta.env.LKJDAL, "kk")

// const key = import.meta.env.VITE_API_KEY;

const getPlaylist = async (playlistID, pageToken = '', result = []) => {
	const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistID}&key=${key}&pageToken=${pageToken}`;

	const { data } = await axios.get(URL);
	result = [...result, ...data.items];
	if (data.nextPageToken) {
		result = getPlaylist(playlistID, data.nextPageToken, result);
	}
	return result;
};

export default getPlaylist;
