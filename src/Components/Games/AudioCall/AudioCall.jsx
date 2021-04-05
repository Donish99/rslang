import React, { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import styles from "./AudioCall.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import GameStat from "../GameStat/GameStat";
import loudSpeaker from "../static/loudSpeaker.jpg";

const AudioCall = () => {
  const [sound, setSound] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [correctWords, setCorrectWords] = useState([]);
  const [wrongWords, setWrongWords] = useState([]);
  const [userSelected, setUserSelected] = useState(false);

  return (
    <>
      {gameOver ? (
        <GameStat
          wrongList={wrongWords}
          correctWords={correctWords}
          callBack={() => console.log("Game over")}
        />
      ) : (
        <div className={styles.game}>
          <Button
            size="sm"
            variant="light"
            className={styles.icon}
            onClick={() => setSound((prev) => !prev)}
          >
            {sound ? (
              <FontAwesomeIcon icon={faVolumeUp} />
            ) : (
              <FontAwesomeIcon icon={faVolumeMute} />
            )}
          </Button>
          <div className={styles.gameItems}>
            <div className={styles.wordImage}>
              <div className={styles.speakerIcon}>
                {userSelected ? (
                  <img src={loudSpeaker} alt="1236" className={styles.img} />
                ) : (
                  <FontAwesomeIcon icon={faVolumeUp} size="6x" />
                )}
              </div>
            </div>
            {userSelected ? (
              <div className={styles.answers}>
                <div className={styles.wordDiv}>
                  <FontAwesomeIcon icon={faVolumeUp} />
                  <h6></h6>
                  <h6>
                    <em></em>
                  </h6>
                </div>
                <div className={styles.wordDiv}>
                  <FontAwesomeIcon icon={faVolumeUp} />
                  <h6></h6>
                </div>
              </div>
            ) : null}
            <div className={styles.options}>
              <div className={styles.option}>123</div>
              <div className={styles.option}>123</div>
              <div className={styles.option}>123</div>
              <div className={styles.option}>133</div>
            </div>
            <Button
              size="sm"
              variant="secondary"
              className={styles.finalButton}
              onClick={() => setGameOver(true)}
            >
              {userSelected ? "Next" : "See Answer"}
            </Button>
            <ProgressBar variant="secondary" now={60} />
          </div>
        </div>
      )}
    </>
  );
};

export default AudioCall;
