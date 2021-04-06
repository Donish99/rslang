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
  try {
    const { data } = await userWordApi.getAllWords();
    return await Promise.all(
      data.map(async (d) => {
        const { data: word } = await userWordApi.getWord(d.wordId);
        return word;
      })
    );
  } catch (err) {
    console.log(err);
  }
};

const getOptionWords = async () => {
  try {
    const { data } = await userWordApi.getRand3Words();
    return data[0].paginatedResults;
  } catch (err) {
    console.log(err);
  }
};

const utilFunctions = {
  shuffle,
  getUserWords,
  getOptionWords,
};

export default utilFunctions;
