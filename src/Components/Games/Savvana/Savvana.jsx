import React, { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GameStat from "../GameStat/GameStat";
import wrongSound from "../static/wrong.mp3";
import rightSound from "../static/right.wav";
import styles from "./Savanna.module.scss";
import utilFunctions from "./../AudioCall/util";
import {
  faHeartbeat,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

const getInitialState = () => ({
  gameOver: false,
  fallPosition: 0,
  sound: false,
  english: true,
  lives: [true, true, true],
  userWords: [],
  optionWords: [],
  currentIndex: 0,
  timerId: 0,
  wrongWords: [],
  correctWords: [],
  color: null,
  colors: false,
  sounds: {
    wrong: new Audio(wrongSound),
    right: new Audio(rightSound),
  },
});

class Savvannah extends Component {
  state = getInitialState();

  newGame = async () => {
    this.setState(getInitialState());
    const words = await utilFunctions.getUserWords();
    this.setState({ userWords: words });
    const options = await utilFunctions.getOptionWords();
    this.setState((prev) => {
      return {
        optionWords: utilFunctions.shuffle([...options, prev.userWords[0]]),
      };
    });
    this.initiateMovemet();
  };

  async componentDidMount() {
    try {
      this.newGame();
    } catch (err) {
      console.log(err);
    }
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
      if (this.state.sound) wrong.play();
      this.minusLife();
    }
  }

  async next() {
    const { currentIndex, userWords } = this.state;
    if (currentIndex >= userWords.length - 1) {
      this.gameOver();
    } else {
      const options = await utilFunctions.getOptionWords();
      this.setState({
        optionWords: utilFunctions.shuffle([
          ...options,
          userWords[currentIndex + 1],
        ]),
        currentIndex: currentIndex + 1,
        fallPosition: 0,
      });
      this.initiateMovemet();
      this.setState({color: null})
    }
  }

  minusLife() {
    const { wrongWords, currentIndex, userWords } = this.state;
    this.setState({ wrongWords: [...wrongWords, userWords[currentIndex]] });
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

  gameOver() {
    this.setState({ gameOver: true });
  }

  userSelect(word) {
    const { wrong, right } = this.state.sounds;
    const {
      currentIndex,
      userWords,
      timerId,

      correctWords,
    } = this.state;
    clearInterval(timerId);

    const currentWord = userWords[currentIndex];
    const id = word.id || word._id;
    if (id === currentWord.id) {
      if (this.state.sound) right.play();
      this.setState({ correctWords: [...correctWords, currentWord] }, () => {
        if (
          currentIndex !== userWords.length &&
          currentIndex + 1 !== userWords.length
        ) {
          this.next();
          this.setState({color: true})
          this.setState({colors: true})
        } else {
          this.gameOver();
        }
      });
    } else {
      if (this.state.sound) wrong.play();
      this.setState({color: true})
      this.setState({colors: false}) 
      this.minusLife();
    }
  }

  render() {
    const {
      wrongWords,
      correctWords,
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
            correctWords={correctWords}
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
                    <FontAwesomeIcon icon={faVolumeUp} />
                  ) : (
                    <FontAwesomeIcon icon={faVolumeMute} />
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
                  className = {`${this.state.color ? this.state.colors ? styles.trueBtn : styles.falseBtn : styles.option}`}
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
