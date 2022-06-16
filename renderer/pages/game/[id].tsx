import React, { useState } from "react";
import { useRouter } from "next/router";
import Card from "@/components/Card/Card";
import Container from "@/components/Layout/Container";
import Navbar from "@/components/Navbar/Navbar";
import styles from "@/styles/Game.module.scss";

export default function Game() {
  const router = useRouter();
  let id = router.query.id;
  const [started, setStarted] = useState(false);
  if (!started) {
    return (
      <div>
        <Container>
          <Navbar />
          <h2>Game {id}</h2>
          <div>
            <h3>Players</h3>
            <div>
              <p>Player 1</p>
              <p>Player 1</p>
              <p>Player 1</p>
              <p>Player 1</p>
              <p>Player 1</p>
            </div>
            <button onClick={() => setStarted(true)}>START</button>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <Container>
          <div className={styles.game}>
            <div className={styles.gameBoard}>
              <div className={styles.questionCard}>
                <Card
                  color="black"
                  content="How I became the richest person in the world is _______________"
                />
              </div>
              <div className={styles.cardList}>
                <Card
                  color="white"
                  content="Surdeg nevered admit being the Scrapped Ender Dragon"
                />
                <Card color="white" content="Mr Beast" />
                <Card
                  color="white"
                  content="Recording Koshie being cute for 10 minutes"
                />
                <Card color="white" content="Mr Beast" />
                <Card
                  color="white"
                  content="Recording Koshie being cute for 10 minutes"
                />
                <Card color="white" content="Mr Beast" />
                {/* TODO */}
              </div>
            </div>
          </div>
          <section className={styles.hand}>
            <div className={styles.cardList}>
              <Card
                color="white"
                content="Surdeg nevered admit being the Scrapped Ender Dragon"
              />
              <Card color="white" content="Mr Beast" />
              <Card
                color="white"
                content="Recording Koshie being cute for 10 minutes"
              />
              <Card color="white" content="Mr Beast" />
              <Card
                color="white"
                content="Recording Koshie being cute for 10 minutes"
              />
              <Card color="white" content="Mr Beast" />
              {/* TODO */}
            </div>
            <button>✔️</button>
          </section>
        </Container>
      </div>
    );
  }
}
