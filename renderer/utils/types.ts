export type SessionCard = {
    id: string;
    playerLimit: number;
    playerCount: number;
    nsfw: boolean;
    decksID: string[];
    status: "CLOSED" | "OPEN" | "FULL" | "ERROR";
}

export type CAHCardDeck = {
    id: string;
    cards: CAHCard[];
}

export type CAHCard = {
    id: string;
    content: string;
}