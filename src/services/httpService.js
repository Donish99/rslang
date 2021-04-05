import axios from "axios";
import { toast } from "react-toastify";
import App from "../Components/App/App";
const onSuccess = null;
const onError = (error) => {

  const userDeleteFromLocalStorage =
    error?.response?.status === 401;

  const userExistError =
    error?.response?.status === 417;

  const userEnterError =
    error?.response?.status === 404;

  const expectedError =
    error?.response?.status >= 400 && error?.response?.status < 500 ;

  if (userDeleteFromLocalStorage) {
    window.location='/';
  } 

  if (userExistError) {
    return error;
  } 

  if (userEnterError) {
    return error;
  }

  if (expectedError) {
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

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
