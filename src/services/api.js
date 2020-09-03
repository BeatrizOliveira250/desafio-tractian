import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tractian-data.s3.us-east-2.amazonaws.com/api.json'
});

export default api;
