import styles from "./SessionCard.module.scss";
import type { SessionCard } from "../../utils/types";
import Link from "next/link";
import { useSockets } from "../../contexts/SocketIOContext";

export default function SessionCard({
  decksID,
  id,
  nsfw,
  playerCount,
  playerLimit,
  status,
}: SessionCard) {
  const { socket } = useSockets();
  const joinGame = () => {
    socket.emit("join-game", {
      roomID: id,
      password: "",
    });
  };
  return (
    <div className={styles.sessionCard}>
      <div className={styles.cah}>
        <h1>Cards</h1>
        <h1>Against</h1>
        <h1>Humanity</h1>
      </div>
      <div>
        <h2>Stats</h2>
        <p>
          Players: {playerCount}/{playerLimit}
        </p>
        <p>Status: {status}</p>
        <p>{nsfw ? "NOT SAFE FOR KIDS" : "SAFE FOR KIDS"}</p>
      </div>
      <button onClick={() => joinGame()}>JOIN GAME</button>
    </div>
  );
}
