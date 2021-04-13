import React, { useState, useEffect } from "react";
import { Button, Form, ButtonGroup, Spinner } from "react-bootstrap";
import styles from "./OurGame.module.scss";
import GameStat from "../GameStat/GameStat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import utilFunctions from "../AudioCall/util";
import wrongSound from "../static/wrong.mp3";
import rightSound from "../static/right.wav";

const OurGame = () => {
  const [gameOver, setGameOver] = useState(false);
  const [sound, setSound] = useState(true);
  const [english, setEnglish] = useState(true);
  const [userWords, setUserWords] = useState([]);
  const [wrongList, setWrongList] = useState([]);
  const [rightList, setRightList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [value, setValue] = useState("");
  const [wrong] = useState(new Audio(wrongSound));
  const [right] = useState(new Audio(rightSound));
  const [loading, setLoading] = useState(false);
  const newGame = async () => {
    setLoading(true);
    setGameOver(false);
    setWrongList([]);
    setRightList([]);
    setCurrentIndex(0);
    setValue("");
    const words = await utilFunctions.getUserWords();
    setUserWords(words);
    setLoading(false);
  };

  useEffect(newGame, []);

  const submitted = (e) => {
    setLoading(true);
    e.preventDefault();
    if (currentIndex === userWords.length - 1) setGameOver(true);
    else {
      const cw = userWords[currentIndex];
      const input = value.toUpperCase();
      const answer = english
        ? cw?.wordTranslate.toUpperCase()
        : cw?.word.toUpperCase();
      if (input === answer) correct(cw);
      else incorrect(cw);
      setCurrentIndex((prev) => prev + 1);
      setValue("");
    }
    setLoading(false);
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
          <ButtonGroup className={styles.icon}>
            <Button
              size="sm"
              variant="light"
              disabled={english}
              onClick={() => setEnglish(true)}
            >
              ru
            </Button>
            <Button
              size="sm"
              variant="light"
              disabled={!english}
              onClick={() => setEnglish(false)}
            >
              en
            </Button>
          </ButtonGroup>

          <div className={styles.gameArea}>
            <div className={styles.word}>
              {loading ? (
                <Spinner animation="border" />
              ) : (
                <h1>
                  {english
                    ? userWords[currentIndex]?.word
                    : userWords[currentIndex]?.wordTranslate}
                </h1>
              )}{" "}
            </div>
            <Form className={styles.form} onSubmit={(e) => submitted(e)}>
              <Form.Group controlId="input">
                <Form.Control
                  type="text"
                  placeholder="Введите перевод слова"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Проверить
              </Button>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default OurGame;
