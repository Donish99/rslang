import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import dataDescription from "../static/info";
import Savannah from "../Savvana/Savvana";
import AudioCall from "./../AudioCall/AudioCall";
import styles from "./Game.module.scss";
import Savvannah from "../Savvana/Savvana";

const Game = ({ match }) => {
  const [game, setGame] = useState({});
  const [gameStarted, setGameStarted] = useState(false);
  useEffect(() => {
    dataDescription.forEach((d) => {
      if (d.id === parseInt(match.params.id)) setGame(d);
    });
  });

  const getGame = () => {
    switch (game.id) {
      case 1:
        return <Savvannah />;
        break;
      case 2:
        return <AudioCall />;
        break;
      default:
        return <h1>404</h1>;
    }
  };

  return (
    <Container>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: ` url(${game.img})`,
        }}
      >
        {gameStarted ? (
          getGame()
        ) : (
          <div className={styles.info}>
            <h1>{game.name}</h1>
            <h4>{game.description}</h4>
            <h6>{game.instructions}</h6>
            <p>
              1. Используйте мышь, чтобы выбрать. <br />
              2. Используйте клавиши «Влево» и «Вправо».
            </p>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => setGameStarted(true)}
            >
              Start!
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Game;
