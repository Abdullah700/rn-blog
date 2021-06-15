import axios from 'axios';

export const useApi = () => {
  const Axios = axios.create({
    baseURL: 'http://b5e3d5b0bb73.ngrok.io',
  });

  return { Axios };
};
