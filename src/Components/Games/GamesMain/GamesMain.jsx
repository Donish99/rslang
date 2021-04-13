import React from "react";
import { Card, Container } from "react-bootstrap";
import styles from "./GamesMain.module.scss";

const games = [
  { id: 1, name: "Саванна" },
  { id: 2, name: "Аудиовызов" },
  { id: 3, name: "Спринт" },
  { id: 4, name: "Своя Игра" },
];

const GamesMain = ({ history }) => {
  const goToGame = (gameId) => {
    history.push(`/games/${gameId}`);
  };

  return (
    <Container>
      <div className={styles.wrapper}>
        {games.map((game) => (
          <Card
            onClick={() => goToGame(game.id)}
            key={game.id}
            style={{ width: "14em" }}
            className={`${styles.card} bg-light border-warning`}
          >
            <Card.Body className={`${styles.cardBody}`}>
              <Card.Title>{game.name}</Card.Title>
              <Card.Text>Играть!</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default GamesMain;
