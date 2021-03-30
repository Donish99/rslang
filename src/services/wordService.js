import http from "./httpService";
import { apiUrl } from "../config";

const apiEndpoint = apiUrl + "/words";

function getwords(group, page) {
  return http.get(`${apiEndpoint}?group=${group}&page=${page}`);
}

const wordsApi = {
  getwords,
};

export default wordsApi;