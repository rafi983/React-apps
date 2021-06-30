
import axios from 'axios';

const KEY = 'AIzaSyDQ5z_CJojfSp_bYz6z7Y4suK6BKWOfWak';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
