import React from 'react';
import styles from '@/styles/Card.module.scss'

type Props = {
  content: string;
  color: "black" | "white";
};

export default function Card({ content, color }: Props) {
  const [clicked, setClicked] = React.useState(false);
  const style: React.CSSProperties = {
    background: `${color}`,
    border: `10px solid ${clicked ? "blue" : "white"}`,
    color: `${color === "black" ? "white" : "black"}`,
  };
  return (
    <div style={style} className={styles.card} onClick={() => setClicked(!clicked)}>
      <div>
        <h2>{content}</h2>
      </div>
      <div>
        <h3>Cards Against Humanity</h3>
      </div>
    </div>
  );
}
