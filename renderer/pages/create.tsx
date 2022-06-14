import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Creation.module.scss";
import Store from "electron-store";
import Router from "next/router";
import Container from "../components/Layout/Container";
import Navbar from "../components/Navbar/Navbar";
import { randomUUID } from "crypto";
("electron-store");

function Home() {
  const store = new Store();
  const [status, setStatus] = React.useState<"Public" | "Private">("Public");
  const [password, setPassword] = React.useState("");
  const submitForm = (e) => {
    e.preventDefault();
    Router.push(`/game/${randomUUID()}`)
  };
  return (
    <React.Fragment>
      <Head>
        <title>Cards Against Humanity - Create</title>
      </Head>
      <Container>
        <Navbar />
        <div className={styles.creation}>
          <h1>Creation</h1>
          <form className={styles.form} onSubmit={(e) => submitForm(e)}>
            <div>
              <label>Status</label>
              <select
                name="status"
                onChange={(e) => setStatus(e.currentTarget.value as any)}
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
            {status.toLowerCase() === "private" ? (
              <div>
                <label>Password: </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  type="text"
                  name="nickname"
                />
              </div>
            ): null}
            {/* TODO: Display Deck Selection */}

            <button type="submit">Submit</button>
          </form>
          <div>
            <h3>Cards Against Humanity will be better in a Discord Call!</h3>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Home;
