import { useRouter } from "next/router";
import React from "react";
import Container from "../../components/Layout/Container";
import Navbar from "../../components/Navbar/Navbar";

export default function Game() {
  const router = useRouter();
  let id = router.query.id;
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
        </div>
      </Container>
    </div>
  );
}
