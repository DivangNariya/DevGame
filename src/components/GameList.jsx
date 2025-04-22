// src/components/GameList.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { games } from "../data/game";
import { FiX } from "react-icons/fi";
import Header from "../common/header";

export default function GameList() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen min-w-full bg-black text-white relative">
      <Header onMenuClick={() => setMenuOpen(true)} />

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white text-black z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl focus:outline-none bg-white"
          >
            <FiX />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Home</Link>
          <Link to="/developer" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Developer</Link>
          <Link to="/affiliates" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Affiliates</Link>
          <Link to="/contact-us" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Contact Us</Link>
          <Link to="/about-us" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">About Us</Link>
          <Link to="/privacy-policy" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Privacy Policy</Link>
        </nav>
      </div>

      {/* Main Content */}
      <main className="pt-14 px-4 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {games.map((game) => (
            <Link
              key={game.id}
              to={`/play/${game.title}`}
              className="block p-4 bg-white rounded shadow hover:shadow-md transition hover:bg-gray-50 text-center text-sm font-medium text-black"
            >
              {game.title.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
