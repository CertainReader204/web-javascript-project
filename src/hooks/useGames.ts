import { useState } from "react";
import type { Game, GameFormData } from "../types/game";
import { getGamesFromStorage, saveGamesToStorage } from "../utils/storage";

export function useGames() {
  const [games, setGames] = useState<Game[]>(() => getGamesFromStorage());

  const addGame = (gameData: GameFormData) => {
    const newGame: Game = {
      ...gameData,
      id: crypto.randomUUID(),
    };
    const updatedGames = [...games, newGame];
    setGames(updatedGames);
    saveGamesToStorage(updatedGames);
  };

  const updateGame = (id: string, gameData: GameFormData) => {
    const updatedGames = games.map((game) =>
      game.id === id ? { ...game, ...gameData } : game,
    );
    setGames(updatedGames);
    saveGamesToStorage(updatedGames);
  };

  const deleteGame = (id: string) => {
    const updatedGames = games.filter((game) => game.id !== id);
    setGames(updatedGames);
    saveGamesToStorage(updatedGames);
  };

  return { games, addGame, updateGame, deleteGame };
}
