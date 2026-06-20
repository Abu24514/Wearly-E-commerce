import axios from 'axios';

const userAxios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true
});

export default userAxios;