import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/words";

function getwords(group, page) {
  return http.get(`${apiEndpoint}?group=${group}&page=${page}`);
}

export default {
  getwords,
};
