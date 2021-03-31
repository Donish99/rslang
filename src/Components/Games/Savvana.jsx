import React from 'react';
import {  ButtonGroup, Button } from "react-bootstrap";
import styles from "./Game.module.scss";


const Savannah = () => {
    return (<div className={styles.game}>
        <div className="sound">
          <Button size="sm" variant="light">
            sound
          </Button>
        </div>
        <div className={styles.langSwitch}>
          <ButtonGroup>
            <Button size="sm" variant="light">
              Ru
            </Button>
            <Button size="sm" variant="light">
              En
            </Button>
          </ButtonGroup>
        </div>
      </div> );
}
 
export default Savannah;