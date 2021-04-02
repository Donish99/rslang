import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/words";

function getwords(group, page) {
  return http.get(apiEndpoint, {
    params: { group, page },
  });
}

export default {
  getwords,
};
