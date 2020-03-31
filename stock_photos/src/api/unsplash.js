import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7Ln7UMubH9cLScVpul4ngSYFK-JYbo9V5r2pnPudrzw'
      }
});