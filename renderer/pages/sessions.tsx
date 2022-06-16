import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Session.module.scss";
import Store from "electron-store";
import Router from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import Container from "@/components/Layout/Container";
import { dummySessions } from "../data/dummy";
import SessionCard from "@/components/Sessions/SessionCard";
("electron-store");

function Home() {
  const store = new Store();
  const [nickname, setNickname] = React.useState("");
  const [invite, setInvite] = React.useState("");
  const submitForm = (e: any) => {
    e.preventDefault();
    store.set("nickname", nickname);
    if (invite) {
      // TODO: Check if invite code is valid; if not, show error and redirect to session
    }
    Router.push("/sessions");
  };
  store.set;
  return (
    <React.Fragment>
      <Head>
        <title>Cards Against Humanity - Sessions</title>
      </Head>
      <Container>
        <Navbar />
        <h2>Sessions</h2>
        <div className={styles.sessions}>{dummySessions.map(c => (
          <SessionCard
            key={c.id}
            decksID={c.decksID}
            id={c.id}
            nsfw={c.nsfw}
            playerCount={c.playerCount}
            playerLimit={c.playerLimit}
            status={c.status.toUpperCase() as any}
          />
        ))}</div>
      </Container>
    </React.Fragment>
  );
}

export default Home;
