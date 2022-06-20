import React, { useContext, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Store from "electron-store";
import Router from "next/router";
import Container from "../components/Layout/Container";
import useSocket, { useSockets } from "../contexts/SocketIOContext";

function Home() {
  let { socket, nickname, setNickname } = useSockets();
  const nicknameRef = useRef(null)
  const store = new Store();
  const submitForm = (e) => {
    e.preventDefault();
    const nickname = nicknameRef.current.value;
    const payload = { nickname }
    store.set("nickname", nickname);
    console.log(payload)
    socket.emit("new-user", payload);
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
                ref={nicknameRef}
                type="text"
                name="nickname"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <p>Socket ID: {socket.id}</p>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Home;
