import React from "react";
import styles from "./GameStat.module.scss";
import { Button, ButtonGroup } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const GameStat = ({ wrongList, rightList, callBack, history }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.statArea}>
        <div className={styles.corrects}>213</div>
        <div className={styles.wrongs}>
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
};

export default withRouter(GameStat);
