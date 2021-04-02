import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faRedo,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Savanna.module.scss";

const Savannah = () => {
  const [fallingBody, setFallingBody] = useState(0);
  return (
    <div className={styles.game}>
      <div className={styles.icons}>
        <div>
          <Button size="sm" variant="light" className={styles.icon}>
            <FontAwesomeIcon icon={faVolumeMute} />
            {/* <FontAwesomeIcon icon={faVolumeUp} /> */}
          </Button>
          {/* <Button size="sm" variant="light" className={styles.icon}>
            <FontAwesomeIcon icon={faRedo} />
          </Button> */}
          <ButtonGroup>
            <Button size="sm" variant="light" className={styles.icon}>
              ru
            </Button>
            <Button size="sm" variant="light" className={styles.icon} disabled>
              en
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <FontAwesomeIcon icon={faHeartbeat} className={styles.icon} />
          <FontAwesomeIcon icon={faHeartbeat} className={styles.icon} />
          <FontAwesomeIcon icon={faHeartbeat} className={styles.icon} />
          <FontAwesomeIcon icon={faHeartbeat} className={styles.icon} />
          <FontAwesomeIcon icon={faHeartbeat} className={styles.icon} />
        </div>
      </div>
      <div className={styles.falling}>132</div>
      <div className={styles.options}>
        <div className={styles.option}>word1</div>
        <div className={styles.option}>word1</div>
        <div className={styles.option}>word1</div>
        <div className={styles.option}>word1</div>
      </div>
    </div>
  );
};

export default Savannah;
