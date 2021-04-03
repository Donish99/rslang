import React, { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GameStat from "../GameStat/GameStat";
import userWordApi from "./../../../services/userWordService";
import wrongSound from "../static/wrong.mp3";
import rightSound from "../static/right.wav";
import {
  faHeartbeat,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Savanna.module.scss";

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
const initialState = {
  gameOver: false,
  fallPosition: 0,
  sound: true,
  english: true,
  lives: [true, true, true],
  userWords: [],
  optionWords: [],
  currentIndex: 0,
  timerId: 0,
  wrongWords: [],
  correctWords: [],
  sounds: {
    wrong: new Audio(wrongSound),
    right: new Audio(rightSound),
  },
};

class Savvannah extends Component {
  state = initialState;

  async newGame() {
    this.setState(initialState);

    const { userWords } = this.state;
    await userWordApi.getAllWords().then((res) => {
      res.data.map((r) =>
        userWordApi.getWord(r.wordId).then(({ data }) => {
          let list = userWords;
          list.push(data);
          this.setState({ userWords: [...list] });
        })
      );
    });
    const { data } = await userWordApi.getRand3Words();
    this.setState({
      optionWords: shuffle([...data[0].paginatedResults, userWords[0]]),
    });
    this.initiateMovemet();
  }

  async componentDidMount() {
    this.newGame();
  }

  initiateMovemet() {
    const t = setInterval(() => {
      this.fall();
    }, 80);
    this.setState({ timerId: t });
  }

  fall() {
    const { fallPosition, timerId } = this.state;
    const { wrong } = this.state.sounds;
    this.setState({ fallPosition: fallPosition + 1 });
    if (fallPosition > 79) {
      clearInterval(timerId);
      wrong.play();
      this.minusLife();
    }
  }

  async next() {
    const { currentIndex, userWords } = this.state;
    const { data } = await userWordApi.getRand3Words();
    this.setState({
      optionWords: shuffle([
        ...data[0].paginatedResults,
        userWords[currentIndex + 1],
      ]),
    });
    this.setState({ currentIndex: currentIndex + 1, fallPosition: 0 });
    this.initiateMovemet();
  }

  minusLife() {
    const { lives } = this.state;
    const l = lives;
    lives.pop();
    if (l.length === 0) {
      this.gameOver(true);
    } else {
      this.setState({ lives: [...l] });
      this.next();
    }
  }

  gameOver(loose) {
    this.setState({ gameOver: true });
  }

  userSelect(word) {
    const { wrong, right } = this.state.sounds;
    const {
      currentIndex,
      userWords,
      timerId,
      wrongWords,
      correctWords,
    } = this.state;
    clearInterval(timerId);

    const currentWord = userWords[currentIndex];
    const id = word.id || word._id;
    if (id === currentWord.id) {
      right.play();
      this.setState({ correctWords: [...correctWords, currentWord] }, () => {
        if (
          currentIndex !== userWords.length &&
          currentIndex + 1 !== userWords.length
        ) {
          this.next();
        } else {
          this.gameOver();
        }
      });
    } else {
      wrong.play();

      this.setState({ wrongWords: [...wrongWords, currentWord] }, () => {
        this.minusLife();
      });
    }
  }

  render() {
    const {
      wrongWords,
      rightWords,
      fallPosition,
      sound,
      english,
      lives,
      optionWords,
      userWords,
      currentIndex,
      gameOver,
    } = this.state;

    return (
      <>
        {gameOver ? (
          <GameStat
            wrongList={wrongWords}
            rightList={rightWords}
            callBack={this.newGame}
          />
        ) : (
          <div className={styles.game}>
            <div className={styles.icons}>
              <div>
                <Button
                  size="sm"
                  variant="light"
                  className={styles.icon}
                  onClick={() => this.setState({ sound: !sound })}
                >
                  {sound ? (
                    <FontAwesomeIcon icon={faVolumeMute} />
                  ) : (
                    <FontAwesomeIcon icon={faVolumeUp} />
                  )}
                </Button>
                <ButtonGroup>
                  <Button
                    size="sm"
                    variant="light"
                    className={styles.icon}
                    disabled={english}
                    onClick={() => this.setState({ english: true })}
                  >
                    ru
                  </Button>
                  <Button
                    size="sm"
                    variant="light"
                    className={styles.icon}
                    disabled={!english}
                    onClick={() => this.setState({ english: false })}
                  >
                    en
                  </Button>
                </ButtonGroup>
              </div>
              <div>
                {lives.map((l, i) =>
                  l ? (
                    <FontAwesomeIcon
                      icon={faHeartbeat}
                      key={i}
                      className={styles.icon}
                    />
                  ) : null
                )}
              </div>
            </div>
            <div className={styles.fallingArea}>
              <div
                className={styles.falling}
                style={{ top: `${fallPosition}%` }}
              >
                {english
                  ? userWords[currentIndex]?.wordTranslate
                  : userWords[currentIndex]?.word}
              </div>
            </div>
            <div className={styles.options}>
              {optionWords.map((w) => (
                <div
                  className={styles.option}
                  key={w?._id || w?.id}
                  onClick={() => this.userSelect(w)}
                >
                  {english ? w?.word : w?.wordTranslate}
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Savvannah;
