import styles from "./SessionCard.module.scss";

export default function SessionCard() {
  return (
    <div className={styles.sessionCard}>
      <div className={styles.cah}>
        <h1>Cards</h1>
        <h1>Against</h1>
        <h1>Humanity</h1>
      </div>
      <div>
        <h2>Stats</h2>
        <p>Players: ()</p>
        <p>Status: ()</p>
        <p>()</p>
      </div>
      <button>JOIN </button>
    </div>
  );
}
