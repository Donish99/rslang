import axios from "axios";
import { toast } from "react-toastify";

const onSuccess = null;
const onError = (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.error(error);
    toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
};

axios.interceptors.response.use(onSuccess, onError);
axios.defaults.headers.common["Content-Type"] = `application/json`;

function setJwt(jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

 const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};

export default httpService;