import { AppProps } from "next/app";
import "../styles/global.scss";
import io, { Socket } from "socket.io-client";
import { useEffect, useState } from "react";
import SocketIOProvider from "../contexts/SocketIOContext";
import { app } from "electron";

const relaunch = () => {
        app.relaunch(); 
        app.exit()
      }

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SocketIOProvider>
      <button onClick={() => relaunch()}
        >Relaunch</button>
      <Component {...pageProps} />;
    </SocketIOProvider>
  );
};

export default MyApp;
