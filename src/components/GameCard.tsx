import type { Game } from "../types/game";

interface GameCardProps {
  game: Game;
  onEdit: (game: Game) => void;
  onDelete: (id: string) => void;
}

export function GameCard({ game, onEdit, onDelete }: GameCardProps) {
  const statusLabels = {
    Playing: "Oynanıyor",
    Completed: "Tamamlandı",
    Planned: "Planlanıyor",
  };

  return (
    <article className="game-card">
      <div className="game-card-topline">
        <span className={`status status-${game.status.toLowerCase()}`}>
          {statusLabels[game.status]}
        </span>
        <span className="score">
          <strong>{game.score}</strong>
          <span>/10</span>
        </span>
      </div>
      <h3>{game.name}</h3>
      <p className="platform">{game.platform}</p>
      <div className="card-actions">
        <button className="button button-small button-edit" onClick={() => onEdit(game)}>
          Düzenle
        </button>
        <button
          className="button button-small button-delete"
          onClick={() => onDelete(game.id)}
        >
          Sil
        </button>
      </div>
    </article>
  );
}
