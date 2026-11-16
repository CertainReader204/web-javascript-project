import type { Game } from "../types/game";
import { GameCard } from "./GameCard";

interface GameListProps {
  games: Game[];
  onEdit: (game: Game) => void;
  onDelete: (id: string) => void;
}

export function GameList({ games, onEdit, onDelete }: GameListProps) {
  if (games.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon" aria-hidden="true">
          ◌
        </span>
        <h3>Koleksiyonunuz henüz boş</h3>
        <p>Yukarıdaki formu kullanarak ilk oyununuzu ekleyin.</p>
      </div>
    );
  }

  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
