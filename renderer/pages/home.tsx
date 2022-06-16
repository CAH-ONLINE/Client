import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";
import Store from "electron-store";
import Router from "next/router";
import Container from "@/components/Layout/Container";
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
        <title>Cards Against Humanity</title>
      </Head>
      <Container>
        <div className={styles.home}>
          <h1>Cards Against Humanity</h1>
          <form className={styles.form} onSubmit={(e) => submitForm(e)}>
            <div>
              <label>Nickname: </label>
              <input
                value={nickname}
                onChange={(e) => setNickname(e.currentTarget.value)}
                type="text"
                name="nickname"
              />
            </div>
            <div>
              <label>Invite Code (Opt.): </label>
              <input
                value={invite}
                onChange={(e) => setInvite(e.currentTarget.value)}
                type="text"
                name="invite"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Home;
