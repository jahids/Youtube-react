import axios from "axios";

const key = `AIzaSyAd4HCev6UKhhxXw0sN3fibYmohoeN1yyg`;
// &nextPageToken=EAAaBlBUOkNESQ


const getPlayList = async (playlistID, pageToken = "", result = []) => {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=contentDetails,snippet&playlistId=${playlistID}&maxResults=50&pageToken=${pageToken}`

    const { data } = await axios.get(url);
    result = [...result, ...data.items]
    // console.log(data)
    // all data get thats why call again api recursive way
    if (data.nextPageToken) {
        result = getPlayList(playlistID, data.nextPageToken, result)
    }


    return result;
}

export default getPlayList
