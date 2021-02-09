import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID tg2G6friEANFTqHrQ0OjY1KWEuRTGRL7oqrn4cuF-2k',
  },
});
