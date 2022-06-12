import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Store from "electron-store";
import Router from "next/router";
import Container from "../components/Layout/Container";
import Navbar from "../components/Navbar/Navbar";
("electron-store");

function Home() {
  const store = new Store();
  const [nickname, setNickname] = React.useState("");
  const [invite, setInvite] = React.useState("");
  const submitForm = (e) => {
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
        <title>Cards Against Humanity - Settings</title>
      </Head>
      <Container>
        <Navbar />
        <h1>Settings</h1>
      </Container>
    </React.Fragment>
  );
}

export default Home;
