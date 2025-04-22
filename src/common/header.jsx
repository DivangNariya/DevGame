// src/components/Header.jsx
import { FiMenu } from "react-icons/fi";

export default function Header({ onMenuClick }) {
  return (
    <header className="bg-blue-600 p-4 flex justify-between items-center shadow-md relative z-10">
      <h1 className="text-xl font-bold">DevGame</h1>
      <button
        onClick={onMenuClick}
        className="text-white text-2xl focus:outline-none"
      >
        <FiMenu />
      </button>
    </header>
  );
}
