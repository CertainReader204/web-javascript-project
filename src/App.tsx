import { useState } from "react";
import { GameForm } from "./components/GameForm";
import { GameList } from "./components/GameList";
import { useGames } from "./hooks/useGames";
import type { Game, GameFormData } from "./types/game";

function App() {
  const { games, addGame, updateGame, deleteGame } = useGames();
  const [editingGame, setEditingGame] = useState<Game | null>(null);

  const handleSubmit = (gameData: GameFormData) => {
    if (editingGame) {
      updateGame(editingGame.id, gameData);
      setEditingGame(null);
    } else {
      addGame(gameData);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Bu oyunu silmek istediğinizden emin misiniz?")) {
      deleteGame(id);
      if (editingGame?.id === id) {
        setEditingGame(null);
      }
    }
  };

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">Kişisel kütüphane</p>
          <h1>Oyun Koleksiyonu</h1>
          <p className="hero-description">
            Oynadığınız, tamamladığınız veya daha sonra oynamak istediğiniz
            oyunları kolayca takip edin.
          </p>
        </div>
      </header>

      <main>
        <GameForm
          editingGame={editingGame}
          onSubmit={handleSubmit}
          onCancelEdit={() => setEditingGame(null)}
        />

        <section className="collection-section" aria-labelledby="collection-title">
          <div className="collection-heading">
            <div>
              <p className="eyebrow">Kütüphaneniz</p>
              <h2 id="collection-title">Koleksiyonunuzdaki oyunlar</h2>
            </div>
            <span className="game-count">
              {games.length} {games.length === 1 ? "oyun" : "oyun"}
            </span>
          </div>
          <GameList games={games} onEdit={setEditingGame} onDelete={handleDelete} />
        </section>
      </main>

      <footer>Oyun Koleksiyonu · Verileriniz tarayıcınızda saklanır</footer>
    </div>
  );
}

export default App;
