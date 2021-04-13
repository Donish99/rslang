import React, { useEffect, useState } from "react";
import { Button, ProgressBar, Spinner } from "react-bootstrap";
import styles from "./AudioCall.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import GameStat from "../GameStat/GameStat";
import utilFunctions from "./util";
import { apiUrl } from "./../../../config";
import wrongSound from "../static/wrong.mp3";
import rightSound from "../static/right.wav";

const AudioCall = () => {
  const [sound, setSound] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [correctWords, setCorrectWords] = useState([]);
  const [wrongWords, setWrongWords] = useState([]);
  const [userSelected, setUserSelected] = useState(false);
  const [wordList, setWordList] = useState([]);
  const [optionWords, setOptionWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [wrong] = useState(new Audio(wrongSound));
  const [right] = useState(new Audio(rightSound));
  const [percentage, setPercentage] = useState(0);

  const setInitialState = async () => {
    setSound(false);
    setGameOver(false);
    setCorrectWords([]);
    setWrongWords([]);
    setUserSelected(false);
    setWordList([]);
    setOptionWords([]);
    setCurrentIndex(0);
    setCurrentWord({});
    setLoading(false);
    setCurrentAudio(null);
    setPercentage(0);
    try {
      setLoading(true);
      const words = await utilFunctions.getUserWords();
      const cw = words[0];
      const audio = new Audio(`${apiUrl}/${cw.audio}`);
      setCurrentAudio(audio);
      setCurrentWord(cw);
      setWordList(words);
      const options = await utilFunctions.getOptionWords();
      setOptionWords(utilFunctions.shuffle([...options, cw]));
      audio.play();
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(setInitialState, []);
  // useEffect(() => {}, [currentIndex]);

  const calcPercentage = () => {
    const percent = ((currentIndex + 1) * 100) / wordList.length;
    setPercentage(percent);
  };

  const wordClick = (word) => {
    const id = word.id || word._id;
    const isTrue = id === currentWord.id;
    showResults(isTrue);
  };

  const showResults = (cond) => {
    calcPercentage();
    setUserSelected(true);
    if (sound) cond ? right.play() : wrong.play();
    if (cond) {
      setCorrectWords([...correctWords, currentWord]);
    } else {
      setWrongWords([...wrongWords, currentWord]);
    }
  };

  const next = async () => {
    if (wordList[currentIndex + 1]) {
      try {
        setLoading(true);
        const cw = wordList[currentIndex + 1];
        setCurrentIndex((prev) => prev + 1);
        const audio = new Audio(`${apiUrl}/${cw.audio}`);
        setCurrentAudio(audio);
        setCurrentWord(cw);
        const options = await utilFunctions.getOptionWords();
        setOptionWords(utilFunctions.shuffle([...options, cw]));
        audio.play();
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    } else setGameOver(true);
    setUserSelected(false);
  };

  return (
    <>
      {gameOver ? (
        <GameStat
          wrongList={wrongWords}
          correctWords={correctWords}
          callBack={setInitialState}
        />
      ) : (
        <div className={styles.game}>
          <Button
            size="sm"
            variant="light"
            className={styles.icon}
            onClick={() => setSound((prev) => !prev)}
          >
            <FontAwesomeIcon icon={sound ? faVolumeUp : faVolumeMute} />
          </Button>
          <div className={styles.gameItems}>
            <div className={styles.wordImage}>
              <div className={styles.speakerIcon}>
                {userSelected ? (
                  <img
                    src={`${apiUrl}/${currentWord.image}`}
                    alt="1236"
                    className={styles.img}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faVolumeUp}
                    size="6x"
                    onClick={() => currentAudio?.play()}
                  />
                )}
              </div>
            </div>
            {userSelected ? (
              <div className={styles.answers}>
                <div className={styles.wordDiv}>
                  <FontAwesomeIcon
                    icon={faVolumeUp}
                    onClick={() => currentAudio?.play()}
                  />
                  <h6>{currentWord.word}</h6>
                  <h6>
                    <em>{currentWord.transcription}</em>
                  </h6>
                </div>
                <div className={styles.wordDiv}>
                  <FontAwesomeIcon
                    icon={faVolumeUp}
                    onClick={() =>
                      new Audio(`${apiUrl}/${currentWord.audioMeaning}`).play()
                    }
                  />
                  <h6
                    dangerouslySetInnerHTML={{
                      __html: currentWord.textMeaning,
                    }}
                  />
                </div>
              </div>
            ) : null}
            <div className={styles.options}>
              {loading ? (
                <Spinner animation="grow" />
              ) : (
                optionWords.map((o) => (
                  <div
                    className={styles.option}
                    key={o.id || o._id}
                    onClick={() => {
                      if (!userSelected) wordClick(o);
                    }}
                  >
                    {o?.wordTranslate}
                  </div>
                ))
              )}
            </div>
            <Button
              size="sm"
              variant="secondary"
              className={styles.finalButton}
              onClick={() => (userSelected ? next() : showResults(false))}
            >
              {userSelected ? "Next" : "See Answer"}
            </Button>
            <ProgressBar variant="secondary" now={percentage} />
          </div>
        </div>
      )}
    </>
  );
};

export default AudioCall;
