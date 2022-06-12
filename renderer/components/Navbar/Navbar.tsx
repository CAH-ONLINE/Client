import Store from "electron-store";
import Link from "next/link";
import styles from "./Navbar.module.scss";
export default function Navbar() {
  const store = new Store();
  let nickname: string = store.get("nickname") as string;
  return (
    <div className={styles.navbar}>
      <h1>Cards Against Humanity</h1>
      <div className={styles.items}>
        <ul className={styles.list}>
          <li>
            <Link href="sessions">Sessions</Link>
          </li>
          <li>
            <Link href="settings">Settings</Link>
          </li>
          <li>
            <Link href="create">Create</Link>
          </li>
        </ul>
        <button>{nickname}</button>
      </div>
    </div>
  );
}
