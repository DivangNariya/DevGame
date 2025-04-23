// src/pages/GamePlayer.jsx
import { useParams } from "react-router-dom";

export default function GamePlayer() {
  const { title } = useParams(); // Get the game folder name
  const gameUrl = `/All Games/${title}/index.html`; // Path to local game

  return (
    <div className="min-w-full min-h-screen ">
      <div className="min-w-full min-h-screen rounded overflow-hidden shadow-lg">
        <iframe
          src={gameUrl}
          title={title}
          className="min-w-full min-h-screen"
          allowFullScreen
        />
      </div>
    </div>
  );
}
