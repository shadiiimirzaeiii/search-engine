import Axios from "axios";

const httpRequest = Axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 120_000,
});

httpRequest.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error?.response?.status === 403) {
      console.log('HANDLE ERROR: 403'); 
    }
    if (error?.response?.status === 401) {
        console.log('HANDLE ERROR: 401');
    }
    throw error;
  }
);

export default httpRequest;