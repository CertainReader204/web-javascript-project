export type GameStatus = "Playing" | "Completed" | "Planned";

export interface Game {
  id: string;
  name: string;
  platform: string;
  status: GameStatus;
  score: number;
}

export type GameFormData = Omit<Game, "id">;
