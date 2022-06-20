import { createContext, useContext, useState } from "react";
import { io, Socket } from "socket.io-client";

interface Context {
  socket: Socket;
  nickname?: string;
  setNickname: Function;
}

const socket = io("http://localhost:8080");
const SocketIOContext = createContext<Context>({
  socket,
  setNickname: () => false,
});

const SocketIOProvider = ({ children }) => {
  const [nickname, setNickname] = useState("");
  return (
    <SocketIOContext.Provider value={{ socket, nickname, setNickname }}>
      {children}
    </SocketIOContext.Provider>
  );
};

export const useSockets = () => useContext(SocketIOContext);

export default SocketIOProvider;
