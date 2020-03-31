import axios from "axios";

const KEY = 'AIzaSyBDFIBxc3aL-yKjnPjqI6iyUvaE47TFYqY';
 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3", 
  params: {
      part: "snippet", 
      type: 'video',
      maxResults: 5, 
      key: KEY
  }
});

