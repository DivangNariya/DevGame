// src/pages/GamePlayer.jsx
import { useParams } from "react-router-dom";

export default function GamePlayer() {
  const { title } = useParams();
  // Encode spaces in folder path for correct URL resolution
  const gameUrl = encodeURI(`/All Games/${title}/index.html`);

  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src={gameUrl}
        title={title}
        className="w-full h-full"
        allowFullScreen
      />
    </div>
  );
}