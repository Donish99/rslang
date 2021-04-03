import http from "./httpService";
import { apiUrl } from "../config";

const userId = localStorage.getItem("userId");
const apiEndpoint = `${apiUrl}/users/${userId}/words`;

function getAllWords() {
  return http.get(apiEndpoint);
}

function getWord(id) {
  return http.get(`${apiUrl}/words/${id}`);
}

function getRand3Words() {
  const group = getRandomArbitrary(1, 6);
  const page = getRandomArbitrary(1, 30);

  return http.get(`${apiUrl}/users/${userId}/aggregatedWords`, {
    params: {
      group,
      page,
      wordsPerPage: 3,
    },
  });
}
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const userWordApi = {
  getAllWords,
  getWord,
  getRand3Words,
};

export default userWordApi;
