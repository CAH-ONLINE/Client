import { randomUUID } from "crypto";
import { SessionCard } from "../utils/types";

export const dummySessions: SessionCard[] = []
const status = ["closed", "open", "full", "error"]

for(let i = 0; i < 10; i++) {
    dummySessions.push({
      id: randomUUID(),
      decksID: ["core-nsfw"],
      playerCount: Math.floor(Math.random() * 5) + 2,
      playerLimit: Math.floor(Math.random() * 10) + 7,
      nsfw: Math.floor(Math.random() * 2) === 0,
      status: status[Math.floor(Math.random() * 3) + 1] as any
    });
}