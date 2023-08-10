import axios from 'axios';

export const instance = axios.create(
    {
        baseurl: import.meta.env.VITE_APP_MAIN_URL,
    }
)
