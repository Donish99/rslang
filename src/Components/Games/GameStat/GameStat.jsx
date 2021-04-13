import React from "react";
import styles from "./GameStat.module.scss";
import { Button, ButtonGroup, Badge } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { apiUrl } from "./../../../config";

const GameStat = ({ wrongList, correctWords, callBack, history }) => (
  <div className={styles.wrapper}>
    <div className={styles.statArea}>
      <h4>Game Stats</h4>
      <div className={styles.corrects}>
        Ошибок <Badge variant="danger">{wrongList.length}</Badge>
        {wrongList.map((w) => (
          <div className={styles.wordContainer} key={w.id}>
            <br />
            <FontAwesomeIcon
              icon={faVolumeUp}
              onClick={() => new Audio(`${apiUrl}/${w.audio}`).play()}
            />
            <p>
              <strong>{w.word}</strong> - {w.wordTranslate}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.wrongs}>
        Знаю <Badge variant="success">{correctWords.length}</Badge>
        {correctWords.map((w) => (
          <div className={styles.wordContainer} key={w.id}>
            <br />
            <FontAwesomeIcon
              icon={faVolumeUp}
              onClick={() => new Audio(`${apiUrl}/${w.audio}`).play()}
            />
            <p>
              <strong>{w.word}</strong> - {w.wordTranslate}
            </p>
          </div>
        ))}
        <div className={styles.actionButtons}>
          <ButtonGroup>
            <Button size="sm" variant="primary" onClick={() => callBack()}>
              new
            </Button>
            <Button
              size="sm"
              variant="primary"
              onClick={() => {
                history.push("/games");
              }}
            >
              back
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(GameStat);
