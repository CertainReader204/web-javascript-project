import type { Game } from "../types/game";

const STORAGE_KEY = "game-collection-manager-games";

const defaultGames: Game[] = [
  {
    id: "elden-ring",
    name: "Elden Ring",
    platform: "PC",
    status: "Completed",
    score: 9,
  },
  {
    id: "hollow-knight",
    name: "Hollow Knight",
    platform: "PC",
    status: "Playing",
    score: 10,
  },
];

export function getGamesFromStorage(): Game[] {
  const storedGames = localStorage.getItem(STORAGE_KEY);

  if (!storedGames) {
    return defaultGames;
  }

  try {
    const parsedGames: unknown = JSON.parse(storedGames);
    return Array.isArray(parsedGames) ? (parsedGames as Game[]) : defaultGames;
  } catch {
    return defaultGames;
  }
}

export function saveGamesToStorage(games: Game[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
}
