import { useEffect, useState, type FormEvent } from "react";
import type { Game, GameFormData, GameStatus } from "../types/game";

interface GameFormProps {
  editingGame: Game | null;
  onSubmit: (gameData: GameFormData) => void;
  onCancelEdit: () => void;
}

type GameFormState = Omit<GameFormData, "score"> & {
  score: number | "";
};

const emptyForm: GameFormData = {
  name: "",
  platform: "",
  status: "Planned",
  score: 5,
};

const emptyFormState: GameFormState = emptyForm;

export function GameForm({
  editingGame,
  onSubmit,
  onCancelEdit,
}: GameFormProps) {
  const [formData, setFormData] = useState<GameFormState>(emptyFormState);

  useEffect(() => {
    if (editingGame) {
      setFormData({
        name: editingGame.name,
        platform: editingGame.platform,
        status: editingGame.status,
        score: editingGame.score,
      });
    } else {
      setFormData(emptyFormState);
    }
  }, [editingGame]);

  const handleChange = (
    field: keyof GameFormState,
    value: string | number,
  ) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({
      ...formData,
      name: formData.name.trim(),
      platform: formData.platform.trim(),
      score: Math.min(10, Math.max(1, Number(formData.score))),
    });

    if (!editingGame) {
      setFormData(emptyFormState);
    }
  };

  return (
    <section className="form-panel" aria-labelledby="form-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{editingGame ? "Düzenleme" : "Koleksiyon"}</p>
          <h2 id="form-title">
            {editingGame ? "Oyunu düzenle" : "Yeni oyun ekle"}
          </h2>
        </div>
        <span className="form-icon" aria-hidden="true">
          {editingGame ? "✎" : "+"}
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Oyun adı
            <input
              type="text"
              value={formData.name}
              onChange={(event) => handleChange("name", event.target.value)}
              placeholder="Örn. Hades"
              required
            />
          </label>

          <label>
            Platform
            <input
              type="text"
              value={formData.platform}
              onChange={(event) =>
                handleChange("platform", event.target.value)
              }
              placeholder="Örn. PC, PlayStation 5"
              required
            />
          </label>

          <label>
            Durum
            <select
              value={formData.status}
              onChange={(event) =>
                handleChange("status", event.target.value as GameStatus)
              }
            >
              <option value="Playing">Oynanıyor</option>
              <option value="Completed">Tamamlandı</option>
              <option value="Planned">Planlanıyor</option>
            </select>
          </label>

          <label>
            Puan <span className="field-note">(1–10)</span>
            <input
              type="number"
              min="1"
              max="10"
              value={formData.score}
              onChange={(event) =>
                handleChange(
                  "score",
                  event.target.value === "" ? "" : Number(event.target.value),
                )
              }
              required
            />
          </label>
        </div>

        <div className="form-actions">
          {editingGame && (
            <button type="button" className="button button-muted" onClick={onCancelEdit}>
              İptal
            </button>
          )}
          <button type="submit" className="button button-primary">
            {editingGame ? "Değişiklikleri kaydet" : "Oyun ekle"}
          </button>
        </div>
      </form>
    </section>
  );
}
