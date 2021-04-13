import http from "./httpService";
import { apiUrl } from "../config";

const userId = localStorage.getItem("userId");

function getAllWords(group, page) {
  return http.get(apiUrl + "/words", {
    params: { group, page },
  });
}

function getWord(id) {
  return http.get(`${apiUrl}/words/${id}`);
}

function getRand3Words(group, page) {
  return http.get(`${apiUrl}/users/${userId}/aggregatedWords`, {
    params: {
      group,
      page,
      wordsPerPage: 3,
    },
  });
}

const userWordApi = {
  getAllWords,
  getWord,
  getRand3Words,
};

export default userWordApi;
