import React, { useState, useEffect } from "react";
import styles from "./Sprint.Module.scss";
import { ProgressBar, Button, ButtonGroup } from "react-bootstrap";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GameStat from "../GameStat/GameStat";
import utilFunctions from "./../AudioCall/util";
import wrongSound from "../static/wrong.mp3";
import rightSound from "../static/right.wav";

const Sprint = () => {
  const [sound, setSound] = useState(true);
  const [time, setTime] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(0);
  const [userWords, setUserWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [randIndex, setRandIndex] = useState(0);
  const [wrongList, setWrongList] = useState([]);
  const [rightList, setRightList] = useState([]);
  const [wrong] = useState(new Audio(wrongSound));
  const [right] = useState(new Audio(rightSound));

  const newGame = async () => {
    setTime(60);
    setGameOver(false);
    setWrongList([]);
    try {
      const words = await utilFunctions.getUserWords();
      setUserWords(words);
      setCurrentIndex(0);
      setRandIndex(getRandIndex());
    } catch (err) {}
    let a = setInterval(() => {
      setTime((val) => val - 1);
    }, 1000);
    setTimer(a);
  };

  const getRandIndex = () => {
    const randNum = utilFunctions.rand(0, userWords.length);
    return Math.random() < 0.2 ? randNum : currentIndex + 1;
  };

  useEffect(newGame, []);

  useEffect(() => {
    if (time === 0) {
      setGameOver(true);
      clearInterval(timer);
    }
  }, [time]);

  const checkAnswer = (btn) => {
    const cw = userWords[currentIndex];
    const sw = userWords[randIndex];
    if (currentIndex === userWords.length - 1) setGameOver(true);
    else {
      if ((cw.id === sw.id && btn) || (cw.id !== sw.id && !btn)) {
        correct(cw);
      } else incorrect(cw);
      setCurrentIndex((prev) => prev + 1);
      setRandIndex(getRandIndex());
    }
  };

  const correct = (word) => {
    if (sound) right.play();
    setRightList([...rightList, word]);
  };

  const incorrect = (word) => {
    if (sound) wrong.play();
    setWrongList([...wrongList, word]);
  };

  return (
    <>
      {gameOver ? (
        <GameStat
          wrongList={wrongList}
          correctWords={rightList}
          callBack={() => newGame()}
        />
      ) : (
        <div className={styles.wrapper}>
          <Button
            size="sm"
            variant="light"
            className={styles.icon}
            onClick={() => setSound((prev) => !prev)}
          >
            <FontAwesomeIcon icon={sound ? faVolumeUp : faVolumeMute} />
          </Button>
          <div className={styles.gameArea}>
            <ProgressBar now={(time * 100) / 60} />
            <div className={styles.time}>00:{time}</div>
            <div className={styles.words}>
              <h4>{userWords[currentIndex]?.word}</h4> <h4> - </h4>
              <h4>{userWords[randIndex]?.wordTranslate}</h4>
            </div>
            <ButtonGroup>
              <Button variant="danger" onClick={() => checkAnswer(false)}>
                Неверно
              </Button>
              <Button onClick={() => checkAnswer(true)}>Верно</Button>
            </ButtonGroup>
          </div>
        </div>
      )}
    </>
  );
};

export default Sprint;
