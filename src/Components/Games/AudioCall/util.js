import userWordApi from "./../../../services/userWordService";

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const getUserWords = async () => {
  const group = getRandomArbitrary(1, 6);
  const page = getRandomArbitrary(1, 30);
  try {
    const { data } = await userWordApi.getAllWords(group, page);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getOptionWords = async () => {
  const group = getRandomArbitrary(1, 6);
  const page = getRandomArbitrary(1, 30);
  try {
    const { data } = await userWordApi.getRand3Words(group, page);
    return data[0].paginatedResults;
  } catch (err) {
    console.log(err);
  }
};

const utilFunctions = {
  rand: getRandomArbitrary,
  shuffle,
  getUserWords,
  getOptionWords,
};

export default utilFunctions;
